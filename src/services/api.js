// API service for D-Learning application
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://express-mock-server-rose.vercel.app/api"
    : "http://localhost:4000/api";

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

// Section A API (formerly Classes)
export const sectionAAPI = {
  // Get all section A data
  getAll: (productType) => {
    const url = productType
      ? `/post-login-dashboard/section-a?product_type=${productType}`
      : "/post-login-dashboard/section-a";
    return apiCall(url);
  },
};

// Section B API (formerly Assignments)
export const sectionBAPI = {
  // Get all section B data
  getAll: (productType) => {
    const url = productType
      ? `/post-login-dashboard/section-b?product_type=${productType}`
      : "/post-login-dashboard/section-b";
    return apiCall(url);
  },
};

// Section C API (formerly Tests)
export const sectionCAPI = {
  // Get all section C data
  getAll: (productType) => {
    const url = productType
      ? `/post-login-dashboard/section-c?product_type=${productType}`
      : "/post-login-dashboard/section-c";
    return apiCall(url);
  },
};

// Section D API (formerly Courses)
export const sectionDAPI = {
  // Get all section D data
  getAll: (productType) => {
    const url = productType
      ? `/post-login-dashboard/section-d?product_type=${productType}`
      : "/post-login-dashboard/section-d";
    return apiCall(url);
  },
};

// Config API
export const configAPI = {
  // Get all config
  getAll: (productType) => {
    const url = productType
      ? `/post-login-dashboard/config?product_type=${productType}`
      : "/post-login-dashboard/config";
    return apiCall(url);
  },
};

export default {
  sectionA: sectionAAPI,
  sectionB: sectionBAPI,
  sectionC: sectionCAPI,
  sectionD: sectionDAPI,
  config: configAPI,
};
