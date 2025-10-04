// color mapping for consistent theming across the app
export const colorTagMap = {
  // Core colors
  color_1: {
    primary: "#3B82F6", // Blue
    secondary: "#DBEAFE", // Light blue
    accent: "#1D4ED8", // Dark blue
    text: "#1E40AF", // Blue text
  },
  color_2: {
    primary: "#8B5CF6", // Purple
    secondary: "#EDE9FE", // Light purple
    accent: "#7C3AED", // Dark purple
    text: "#6D28D9", // Purple text
  },
  color_3: {
    primary: "#F59E0B", // Orange
    secondary: "#FEF3C7", // Light orange
    accent: "#D97706", // Dark orange
    text: "#B45309", // Orange text
  },
  color_4: {
    primary: "#10B981", // Green
    secondary: "#D1FAE5", // Light green
    accent: "#059669", // Dark green
    text: "#047857", // Green text
  },
  color_5: {
    primary: "#EF4444", // Red
    secondary: "#FEE2E2", // Light red
    accent: "#DC2626", // Dark red
    text: "#B91C1C", // Red text
  },
  color_6: {
    primary: "#EC4899", // Pink
    secondary: "#FCE7F3", // Light pink
    accent: "#DB2777", // Dark pink
    text: "#BE185D", // Pink text
  },
  color_7: {
    primary: "#6B7280", // Gray
    secondary: "#F3F4F6", // Light gray
    accent: "#4B5563", // Dark gray
    text: "#374151", // Gray text
  },
  color_8: {
    primary: "#14B8A6", // Teal
    secondary: "#CCFBF1", // Light teal
    accent: "#0D9488", // Dark teal
    text: "#0F766E", // Teal text
  },
  color_9: {
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

// Function to get colors
export const getColors = (colorTag) => {
  if (!colorTag) return colorTagMap.default;

  return colorTagMap[colorTag] || colorTagMap.default;
};

// Function to get CSS custom properties for a color
export const getColorCSSVars = (colorTag) => {
  const colors = getColors(colorTag);
  return {
    "--color-primary": colors.primary,
    "--color-secondary": colors.secondary,
    "--color-accent": colors.accent,
    "--color-text": colors.text,
  };
};

// Function to get inline styles for a color
export const getColorStyles = (colorTag) => {
  const colors = getColors(colorTag);
  return {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    text: colors.text,
  };
};

export default colorTagMap;
