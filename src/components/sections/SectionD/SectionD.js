import React from "react";
import { useSectionD } from "../../../hooks/useAPI";
import SectionDCard from "../SectionDCard/SectionDCard";
import SectionDCardSkeleton from "../SectionDCard/SectionDCardSkeleton";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import { SectionHeader } from "../../common";
import { useConfigData } from "../../../contexts/ConfigContext";
import "./SectionD.scss";

const SectionD = () => {
  // Get current product type from context
  const { config, currentProductType } = useConfigData();

  // Fetch courses data from API with current product type
  const {
    data: coursesData,
    loading,
    error,
    refetch,
  } = useSectionD(currentProductType);
  const sectionDData = coursesData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="section-d__grid">
          {Array.from({ length: 4 }, (_, index) => (
            <SectionDCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load courses: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!sectionDData || sectionDData.length === 0) {
      return (
        <div className="section-d__empty">
          <p>No enrolled courses found.</p>
        </div>
      );
    }

    return (
      <div className="section-d__grid">
        {sectionDData.map((item, index) => (
          <SectionDCard key={item.id || index} course={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="section-d">
      <SectionHeader
        title={config.section_d_title}
        ctaText={config.section_d_cta_text}
      />
      {renderContent()}
    </div>
  );
};

export default SectionD;
