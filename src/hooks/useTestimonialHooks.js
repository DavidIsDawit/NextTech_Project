import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getTestimonials = async (params = {}) => {
    const response = await generalService.getAllTestimonials(params);
    return normalizeArrayResponse(response.data, 'testimonials');
};

/**
 * SECTION: HOOKS
 */
export const useTestimonials = (params) => {
    const [data, setData] = useState([]);
    const [totalTestimonials, setTotalTestimonials] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const paramsKey = JSON.stringify(params);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const parsedParams = paramsKey ? JSON.parse(paramsKey) : {};
            const response = await generalService.getAllTestimonials(parsedParams);
            const result = normalizeArrayResponse(response.data, 'testimonials');
            const activeItems = (Array.isArray(result) ? result : []).filter(item => item.status === 'Active');
            setData(activeItems);
            setTotalTestimonials(Number(response.data?.totalTestimonials ?? 0));
        } catch (err) {
            setError(err);
            setData([]);
            setTotalTestimonials(0);
        } finally {
            setLoading(false);
        }
    }, [paramsKey]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return { data, totalTestimonials, loading, error, refresh: loadData };
};

export default useTestimonials;
