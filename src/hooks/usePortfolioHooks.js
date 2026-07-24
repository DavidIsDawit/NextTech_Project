import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse, fixObjectMedia } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const getPortfolio = async (params = {}) => {
    const response = await generalService.getAllPortfolio(params);
    return normalizeArrayResponse(response.data, 'portfolios');
};

export const getPortfolioById = async (id) => {
    const response = await generalService.getSinglePortfolio(id);
    const item = response.data?.data?.portfolio || response.data?.portfolio;
    return item ? fixObjectMedia(item) : null;
};

/**
 * SECTION: HOOKS
 */
export const usePortfolio = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const paramsKey = JSON.stringify(params);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const parsedParams = paramsKey ? JSON.parse(paramsKey) : {};
            const result = await getPortfolio(parsedParams);
            const arrayResult = Array.isArray(result) ? result : [];
            const activePortfolios = arrayResult.filter(item => item.status === "Active");
            setData(activePortfolios);
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
 * Hook for fetching and managing single portfolio data.
 */
export const usePortfolioDetail = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        if (!id || id === 'undefined') {
            setLoading(false);
            return;
        }
        try {
            setLoading(true);
            const result = await getPortfolioById(id);
            setData(result);
            setError(null);
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
