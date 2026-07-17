import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getPartners = async (params = {}) => {
    const response = await generalService.getAllPartners(params);
    return normalizeArrayResponse(response.data, 'partners');
};

/**
 * SECTION: HOOKS
 */
export const usePartners = (params) => {
    const [data, setData] = useState([]);
    const [totalPartners, setTotalPartners] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use stringified params as dependency to avoid infinite loops with object literals
    const paramsKey = JSON.stringify(params);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await generalService.getAllPartners(params);
            

            const result = normalizeArrayResponse(response.data, 'partners');
            const activePartners = (Array.isArray(result) ? result : []).filter(item => item.status === 'Active');
            setData(activePartners);
            
            // Extract total count from various potential keys and nested objects
            const total = response.data?.totalPartners ?? 
                          response.data?.data?.totalPartners ??
                          response.data?.totalCount ?? 
                          response.data?.count ?? 
                          result.length ?? 
                          0;
            
            setTotalPartners(Number(total));
            setError(null);
        } catch (err) {
            console.error('Error fetching partners:', err);
            setError(err);
            setData([]);
            setTotalPartners(0);
        } finally {
            setLoading(false);
        }
    }, [paramsKey]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return { data, totalPartners, loading, error, refresh: loadData };
};

export default usePartners;
