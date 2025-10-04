import React, { createContext, useContext, useState, useEffect } from "react";
import { useConfig } from "../hooks/useAPI";
import FullPageErrorMessage from "../components/errorMessage/FullPageErrorMessage";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [currentProductType, setCurrentProductType] = useState("design");
  const {
    data: configData,
    loading,
    error,
    refetch,
  } = useConfig(currentProductType);

  const config = configData?.data || {};

  // Set primary color from config API when config changes
  useEffect(() => {
    if (config.primary_color) {
      document.documentElement.style.setProperty(
        "--primary-color",
        config.primary_color
      );
      console.log("Primary color set from config:", config.primary_color);
    }
  }, [config.primary_color]);

  const changeProductType = (newProductType) => {
    setCurrentProductType(newProductType);
  };

  const handleRetry = () => {
    refetch();
  };

  // Show full page error if config API fails
  if (error) {
    return (
      <FullPageErrorMessage
        message={`Failed to load dashboard configuration: ${error}`}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <ConfigContext.Provider
      value={{
        config,
        loading,
        error,
        currentProductType,
        changeProductType,
        productTypes: config.product_types || [],
        refetch,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfigData = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error("useConfigData must be used within a ConfigProvider");
  }
  return context;
};
