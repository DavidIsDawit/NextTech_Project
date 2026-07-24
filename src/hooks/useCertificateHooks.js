import { useState, useEffect, useCallback } from 'react';
import generalService from '../api/generalService';
import { normalizeArrayResponse, fixObjectMedia } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const fetchAllCertificates = async (params = {}) => {
    const response = await generalService.getAllCertificates(params);
    return normalizeArrayResponse(response.data, 'certificates');
};

export const getCertificateById = async (id) => {
    const response = await generalService.getSingleCertificate(id);
    const item = response.data?.data?.certificate;
    return item ? fixObjectMedia(item) : null;
};

/**
 * SECTION: HOOKS
 */
export const useCertificates = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const paramsKey = JSON.stringify(params);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const parsedParams = paramsKey ? JSON.parse(paramsKey) : {};
            const result = await fetchAllCertificates(parsedParams);
            const arrayResult = Array.isArray(result) ? result : [];
            const activeCertificates = arrayResult.filter(item => item.status === 'Active');
            setData(activeCertificates);
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

export const useCertificate = (id) => {
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
            const result = await getCertificateById(id);
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
