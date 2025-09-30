import React from "react";
import { useSectionC } from "../../../hooks/useAPI";
import SectionCCard from "../SectionCCard/SectionCCard";
import SectionCCardSkeleton from "../SectionCCard/SectionCCardSkeleton";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import { SectionHeader } from "../../common";
import { useConfigData } from "../../../contexts/ConfigContext";
import "./SectionC.scss";

const SectionC = () => {
  // Get current product type from context
  const { config, currentProductType } = useConfigData();

  // Fetch tests data from API with current product type
  const {
    data: testsData,
    loading,
    error,
    refetch,
  } = useSectionC(currentProductType);
  const sectionCData = testsData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="section-c__list">
          {Array.from({ length: 3 }, (_, index) => (
            <SectionCCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load tests: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!sectionCData || sectionCData.length === 0) {
      return (
        <div className="section-c__empty">
          <p>No tests found.</p>
        </div>
      );
    }

    return (
      <div className="section-c__list">
        {sectionCData.map((item, index) => (
          <SectionCCard key={item.id || index} test={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="section-c">
      <SectionHeader
        title={config.section_c_title}
        ctaText={config.section_c_cta_text}
      />
      {renderContent()}
    </div>
  );
};

export default SectionC;
