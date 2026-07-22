import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';

export const getFAQs = async (params = {}) => {
    const response = await generalService.getAllFAQs(params);
    return response.data?.data || [];
};

/**
 * SECTION: HOOKS
 */
export const useFAQs = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const result = await getFAQs(params);
            const arrayResult = Array.isArray(result) ? result : [];
            const publishedFAQs = arrayResult.filter(faq => faq.status === "published");
            setData(publishedFAQs);
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

export default useFAQs;
