import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse, fixObjectMedia } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getServices = async (params = {}) => {
    const response = await generalService.getAllServices(params);
    const items = normalizeArrayResponse(response.data, 'services');
    // Map MongoDB's _id to id so components can always use item.id
    const mapped = items.map(item => ({ ...item, id: item._id }));
    // Filter to only show published (active) services
    return mapped.filter(item => item.status === "active");
};

export const getServiceById = async (id) => {
    const response = await generalService.getSingleService(id);
    // Backend returns: { status, data: { service: {...} } }
    const item = response.data?.data?.service;
    // Map MongoDB's _id to id
    return item ? fixObjectMedia({ ...item, id: item._id }) : null;
};

/**
 * Hook for fetching and managing services data.
 */
export const useServices = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Stringify params to avoid infinite re-render when object literal is passed
    const paramsKey = JSON.stringify(params);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const parsedParams = paramsKey ? JSON.parse(paramsKey) : {};
            const result = await getServices(parsedParams);
            setData(Array.isArray(result) ? result : []);
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

/**
 * Hook for fetching and managing single service data.
 */
export const useService = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        if (!id || id === 'undefined') {
            setLoading(false);  // Guard exit: stop loading, don't fetch
            return;
        }
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
