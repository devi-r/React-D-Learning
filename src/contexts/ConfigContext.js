import React, { createContext, useContext, useState, useEffect } from "react";
import { useConfig } from "../hooks/useAPI";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [currentProductType, setCurrentProductType] = useState("learning");
  const { data: configData, loading, error } = useConfig(currentProductType);

  // Default config values in case API fails
  const defaultConfig = {
    brand: "D-Learning",
    nav: [
      { title: "Explore" },
      { title: "Subscriptions" },
      { title: "Classes" },
      { title: "Content" },
    ],
    nav_button: [{ label: "2,450 Points" }],
    page_title: "Hi Devi",
    section_a_title: "Live & Upcoming Classes",
    section_a_cta_text: "View All",
    section_b_title: "Assignments",
    section_b_cta_text: "View All",
    section_c_title: "Tests",
    section_c_cta_text: "View All",
    section_d_title: "Courses",
    section_d_cta_text: "View All",
    section_e_title: "Earn Points",
    section_e_cta_text: "Start Daily Task",
    section_e_description:
      "Complete daily tasks to earn rewards and track your progress",
    floating_button_text: "Ask D-Learning",
    primary_color: "#a12850",
    product_types: [
      {
        label: "Learning",
        value: "learning",
        description: "Educational courses and classes",
      },
      {
        label: "E-commerce",
        value: "ecommerce",
        description: "Online shopping platform",
      },
      {
        label: "Healthcare",
        value: "healthcare",
        description: "Medical and health services",
      },
    ],
  };

  const config = configData?.data || defaultConfig;

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

  return (
    <ConfigContext.Provider
      value={{
        config,
        loading,
        error,
        currentProductType,
        changeProductType,
        productTypes: config.product_types || defaultConfig.product_types,
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
