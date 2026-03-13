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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const result = await getPartners(params);
            setData(Array.isArray(result) ? result : []);
        } catch (err) {
            setError(err);
            setData([]);
        } finally {
            setLoading(false);
        }
    }, [params]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return { data, loading, error, refresh: loadData };
};

export default usePartners;
