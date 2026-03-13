import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse, fixObjectMedia, normalizeDataFields } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getPortfolio = async (params = {}) => {
    const response = await generalService.getAllPortfolio(params);
    return normalizeArrayResponse(response.data, 'portfolios');
};

export const getPortfolioById = async (id) => {
    const response = await generalService.getSinglePortfolio(id);
    const result = response.data;

    // Robustly find the portfolio object
    let item = result?.portfolio ||
        result?.portfolios ||
        result?.data?.portfolio ||
        result?.data?.portfolios ||
        result?.data ||
        result;

    if (Array.isArray(item)) {
        item = item[0];
    }

    return item ? fixObjectMedia(normalizeDataFields(item)) : null;
};

/**
 * SECTION: HOOKS
 */
export const usePortfolio = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const result = await getPortfolio(params);
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
 * Hook for fetching and managing single portfolio data.
 */
export const usePortfolioDetail = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        if (!id || id === 'undefined') return;
        try {
            setLoading(true);
            const result = await getPortfolioById(id);
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

export default usePortfolio;
