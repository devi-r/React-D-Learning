import { useState, useEffect, useCallback } from "react";

// Custom hook for API calls with loading and error states
export const useAPI = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err.message || "An error occurred");
      console.error("API call failed:", err);
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, ...dependencies]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err.message || "An error occurred");
      console.error("API call failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Custom hook for sectionA
export const useSectionA = (productType) => {
  const { sectionAAPI } = require("../services/api");

  const apiFunction = useCallback(async () => {
    return await sectionAAPI.getAll(productType);
  }, [productType, sectionAAPI]);

  return useAPI(apiFunction, [productType]);
};

// Custom hook for sectionB
export const useSectionB = (productType) => {
  const { sectionBAPI } = require("../services/api");

  const apiFunction = useCallback(async () => {
    return await sectionBAPI.getAll(productType);
  }, [productType, sectionBAPI]);

  return useAPI(apiFunction, [productType]);
};

// Custom hook for sectionC
export const useSectionC = (productType) => {
  const { sectionCAPI } = require("../services/api");

  const apiFunction = useCallback(async () => {
    return await sectionCAPI.getAll(productType);
  }, [productType, sectionCAPI]);

  return useAPI(apiFunction, [productType]);
};

// Custom hook for sectionD
export const useSectionD = (productType) => {
  const { sectionDAPI } = require("../services/api");

  const apiFunction = useCallback(async () => {
    return await sectionDAPI.getAll(productType);
  }, [productType, sectionDAPI]);

  return useAPI(apiFunction, [productType]);
};

// Custom hook for config
export const useConfig = (productType) => {
  const { configAPI } = require("../services/api");

  const apiFunction = useCallback(async () => {
    return await configAPI.getAll(productType);
  }, [productType, configAPI]);

  return useAPI(apiFunction, [productType]);
};
