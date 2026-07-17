import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getGallery = async (params = {}) => {
    const response = await generalService.getAllGallery(params);
    return normalizeArrayResponse(response.data, 'gallery');
};

/**
 * Hook for fetching and managing gallery data.
 */
export const useGallery = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const result = await getGallery(params);
            const activeGallery = (Array.isArray(result) ? result : []).filter(item => item.status === "Active");
            setData(activeGallery);
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

export default useGallery;
