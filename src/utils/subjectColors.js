// Subject to color mapping for consistent theming across the app
export const subjectColors = {
  // Core subjects
  Mathematics: {
    primary: "#3B82F6", // Blue
    secondary: "#DBEAFE", // Light blue
    accent: "#1D4ED8", // Dark blue
    text: "#1E40AF", // Blue text
  },
  Physics: {
    primary: "#8B5CF6", // Purple
    secondary: "#EDE9FE", // Light purple
    accent: "#7C3AED", // Dark purple
    text: "#6D28D9", // Purple text
  },
  Chemistry: {
    primary: "#F59E0B", // Orange
    secondary: "#FEF3C7", // Light orange
    accent: "#D97706", // Dark orange
    text: "#B45309", // Orange text
  },
  Biology: {
    primary: "#10B981", // Green
    secondary: "#D1FAE5", // Light green
    accent: "#059669", // Dark green
    text: "#047857", // Green text
  },
  "Computer Science": {
    primary: "#EF4444", // Red
    secondary: "#FEE2E2", // Light red
    accent: "#DC2626", // Dark red
    text: "#B91C1C", // Red text
  },
  English: {
    primary: "#EC4899", // Pink
    secondary: "#FCE7F3", // Light pink
    accent: "#DB2777", // Dark pink
    text: "#BE185D", // Pink text
  },
  History: {
    primary: "#6B7280", // Gray
    secondary: "#F3F4F6", // Light gray
    accent: "#4B5563", // Dark gray
    text: "#374151", // Gray text
  },
  Geography: {
    primary: "#14B8A6", // Teal
    secondary: "#CCFBF1", // Light teal
    accent: "#0D9488", // Dark teal
    text: "#0F766E", // Teal text
  },
  Economics: {
    primary: "#F97316", // Orange-red
    secondary: "#FED7AA", // Light orange-red
    accent: "#EA580C", // Dark orange-red
    text: "#C2410C", // Orange-red text
  },
  // Default fallback
  default: {
    primary: "#6B7280", // Gray
    secondary: "#F3F4F6", // Light gray
    accent: "#4B5563", // Dark gray
    text: "#374151", // Gray text
  },
};

// Function to get subject colors
export const getSubjectColors = (subject) => {
  if (!subject) return subjectColors.default;

  // Normalize subject name (trim, capitalize first letter of each word)
  const normalizedSubject = subject
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return subjectColors[normalizedSubject] || subjectColors.default;
};

// Function to get CSS custom properties for a subject
export const getSubjectCSSVars = (subject) => {
  const colors = getSubjectColors(subject);
  return {
    "--subject-primary": colors.primary,
    "--subject-secondary": colors.secondary,
    "--subject-accent": colors.accent,
    "--subject-text": colors.text,
  };
};

// Function to get inline styles for a subject
export const getSubjectStyles = (subject) => {
  const colors = getSubjectColors(subject);
  return {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    text: colors.text,
  };
};

export default subjectColors;
