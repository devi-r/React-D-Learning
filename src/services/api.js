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

// Classes API
export const classesAPI = {
  // Get all classes
  getAll: () => apiCall("/classes"),

  // Get class by ID
  getById: (id) => apiCall(`/classes/${id}`),

  // Get classes by subject
  getBySubject: (subject) => apiCall(`/classes/subject/${subject}`),

  // Get classes by status
  getByStatus: (status) => apiCall(`/classes/status/${status}`),
};

// Assignments API
export const assignmentsAPI = {
  // Get all assignments
  getAll: () => apiCall("/assignments"),

  // Get assignment by ID
  getById: (id) => apiCall(`/assignments/${id}`),

  // Get assignments by subject
  getBySubject: (subject) => apiCall(`/assignments/subject/${subject}`),

  // Get assignments by status
  getByStatus: (status) => apiCall(`/assignments/status/${status}`),

  // Get assignments by type
  getByType: (type) => apiCall(`/assignments/type/${type}`),
};

// Tests API
export const testsAPI = {
  // Get all tests
  getAll: () => apiCall("/tests"),

  // Get test by ID
  getById: (id) => apiCall(`/tests/${id}`),

  // Get tests by subject
  getBySubject: (subject) => apiCall(`/tests/subject/${subject}`),

  // Get tests by difficulty
  getByDifficulty: (difficulty) => apiCall(`/tests/difficulty/${difficulty}`),

  // Get tests by duration
  getByDuration: (duration) => apiCall(`/tests/duration/${duration}`),
};

// Courses API
export const coursesAPI = {
  // Get all courses
  getAll: () => apiCall("/courses"),

  // Get course by ID
  getById: (id) => apiCall(`/courses/${id}`),

  // Get courses by subject
  getBySubject: (subject) => apiCall(`/courses/subject/${subject}`),

  // Get courses by status
  getByStatus: (status) => apiCall(`/courses/status/${status}`),

  // Get courses by instructor
  getByInstructor: (instructor) => apiCall(`/courses/instructor/${instructor}`),

  // Get courses by progress
  getByProgress: (minProgress) => apiCall(`/courses/progress/${minProgress}`),
};

// Health check API
export const healthAPI = {
  check: () => apiCall("/health"),
};

export default {
  classes: classesAPI,
  assignments: assignmentsAPI,
  tests: testsAPI,
  courses: coursesAPI,
  health: healthAPI,
};
