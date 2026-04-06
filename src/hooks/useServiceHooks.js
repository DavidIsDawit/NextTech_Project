import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse, fixObjectMedia, normalizeDataFields } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getServices = async (params = {}) => {
    const response = await generalService.getAllServices(params);
    return normalizeArrayResponse(response.data, 'services');
};

export const getServiceById = async (id) => {
    const response = await generalService.getSingleService(id);
    const result = response.data;

    // Robustly find the service object
    let item = result?.service ||
        result?.services ||
        result?.data?.service ||
        result?.data?.services ||
        result?.data ||
        result;

    if (Array.isArray(item)) {
        item = item[0];
    }

    return item ? fixObjectMedia(normalizeDataFields(item)) : null;
};

/**
 * Hook for fetching and managing services data.
 */
export const useServices = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const result = await getServices(params);
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

/**
 * Hook for fetching and managing single service data.
 */
export const useService = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        if (!id || id === 'undefined') return;
        try {
            setLoading(true);
            const result = await getServiceById(id);
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return { data, loading, error, refresh: loadData };
};

export default useServices;
