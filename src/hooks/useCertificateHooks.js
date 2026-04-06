import { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../api/axiosInstance';
import generalService from '../api/generalService';
import { normalizeArrayResponse, fixObjectMedia, normalizeDataFields } from '../utils/dataNormalization';

/**
 * SECTION: API FETCHERS
 */
export const fetchAllCertificates = async ({ page = 1, sort = "recent" } = {}) => {
    const response = await axiosInstance.get("/getAllCertificates", {
        params: { page, sort },
    });
    return normalizeArrayResponse(response.data, 'certificates');
};

export const getCertificateById = async (id) => {
    const response = await generalService.getSingleCertificate(id);
    const result = response.data;
    let item = result?.certificate || result?.certificates || result?.data?.certificate || result?.data?.certificates || result?.data || result;
    if (Array.isArray(item)) item = item[0];
    return fixObjectMedia(normalizeDataFields(item));
};

/**
 * SECTION: HOOKS
 */
export const useCertificates = (params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        try {
            setLoading(true);
            const result = await fetchAllCertificates(params);
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

export const useCertificate = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async () => {
        if (!id || id === 'undefined') return;
        try {
            setLoading(true);
            const result = await getCertificateById(id);
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
