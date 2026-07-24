import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getFAQs = async (params = {}) => {
    const response = await generalService.getAllFAQs(params);
    return normalizeArrayResponse(response.data, 'faqs');
};

/**
 * SECTION: HOOKS
 */
export const useFAQs = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const paramsKey = JSON.stringify(params);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const parsedParams = paramsKey ? JSON.parse(paramsKey) : {};
            const result = await getFAQs(parsedParams);
            const arrayResult = Array.isArray(result) ? result : [];
            const publishedFAQs = arrayResult.filter(faq => faq.status === 'published');
            setData(publishedFAQs);
            setError(null);
        } catch (err) {
            setError(err);
            setData([]);
        } finally {
            setLoading(false);
        }
    }, [paramsKey]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return { data, loading, error, refresh: loadData };
};

export default useFAQs;
