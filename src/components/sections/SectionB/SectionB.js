import React from "react";
import { useSectionB } from "../../../hooks/useAPI";
import SectionBCard from "../SectionBCard/SectionBCard";
import SectionBCardSkeleton from "../SectionBCard/SectionBCardSkeleton";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import { SectionHeader } from "../../common";
import { useConfigData } from "../../../contexts/ConfigContext";
import "./SectionB.scss";

const SectionB = () => {
  // Get current product type from context
  const {
    config,
    currentProductType,
    loading: configLoading,
  } = useConfigData();

  // Fetch assignments data from API with current product type
  const {
    data: assignmentsData,
    loading,
    error,
    refetch,
  } = useSectionB(currentProductType);
  const sectionBData = assignmentsData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="section-b__grid">
          {Array.from({ length: 3 }, (_, index) => (
            <SectionBCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load data: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!sectionBData || sectionBData.length === 0) {
      return (
        <div className="section-b__empty">
          <p>No data found.</p>
        </div>
      );
    }

    return (
      <div className="section-b__grid">
        {sectionBData.map((item, index) => (
          <SectionBCard key={item.id || index} assignment={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="section-b">
      <SectionHeader
        title={config.section_b_title}
        ctaText={config.section_b_cta_text}
        loading={configLoading || !config}
      />
      {renderContent()}
    </div>
  );
};

export default SectionB;
