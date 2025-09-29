import { useState, useEffect } from "react";

// Custom hook for API calls with loading and error states
export const useAPI = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, dependencies);

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

// Custom hook for classes
export const useClasses = (filters = {}) => {
  const { classesAPI } = require("../services/api");

  const apiFunction = async () => {
    if (filters.subject) {
      return await classesAPI.getBySubject(filters.subject);
    }
    if (filters.status) {
      return await classesAPI.getByStatus(filters.status);
    }
    return await classesAPI.getAll();
  };

  return useAPI(apiFunction, [filters.subject, filters.status]);
};

// Custom hook for assignments
export const useAssignments = (filters = {}) => {
  const { assignmentsAPI } = require("../services/api");

  const apiFunction = async () => {
    if (filters.subject) {
      return await assignmentsAPI.getBySubject(filters.subject);
    }
    if (filters.status) {
      return await assignmentsAPI.getByStatus(filters.status);
    }
    if (filters.type) {
      return await assignmentsAPI.getByType(filters.type);
    }
    return await assignmentsAPI.getAll();
  };

  return useAPI(apiFunction, [filters.subject, filters.status, filters.type]);
};

// Custom hook for tests
export const useTests = (filters = {}) => {
  const { testsAPI } = require("../services/api");

  const apiFunction = async () => {
    if (filters.subject) {
      return await testsAPI.getBySubject(filters.subject);
    }
    if (filters.difficulty) {
      return await testsAPI.getByDifficulty(filters.difficulty);
    }
    if (filters.duration) {
      return await testsAPI.getByDuration(filters.duration);
    }
    return await testsAPI.getAll();
  };

  return useAPI(apiFunction, [
    filters.subject,
    filters.difficulty,
    filters.duration,
  ]);
};

// Custom hook for courses
export const useCourses = (filters = {}) => {
  const { coursesAPI } = require("../services/api");

  const apiFunction = async () => {
    if (filters.subject) {
      return await coursesAPI.getBySubject(filters.subject);
    }
    if (filters.status) {
      return await coursesAPI.getByStatus(filters.status);
    }
    if (filters.instructor) {
      return await coursesAPI.getByInstructor(filters.instructor);
    }
    if (filters.minProgress !== undefined) {
      return await coursesAPI.getByProgress(filters.minProgress);
    }
    return await coursesAPI.getAll();
  };

  return useAPI(apiFunction, [
    filters.subject,
    filters.status,
    filters.instructor,
    filters.minProgress,
  ]);
};
