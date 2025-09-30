import React from "react";
import { useSectionA } from "../../../hooks/useAPI";
import SectionACard from "../SectionACard/SectionACard";
import SectionACardSkeleton from "../SectionACard/SectionACardSkeleton";
import SectionAActionsSkeleton from "./SectionAActionsSkeleton";
import SectionAIndicatorsSkeleton from "./SectionAIndicatorsSkeleton";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Carousel from "../../carousel/Carousel";
import { SectionHeader } from "../../common";
import { useConfigData } from "../../../contexts/ConfigContext";
import "./SectionA.scss";

const SectionA = () => {
  // Get current product type from context
  const {
    config,
    currentProductType,
    loading: configLoading,
  } = useConfigData();

  // Fetch classes data from API with current product type
  const {
    data: classesData,
    loading,
    error,
    refetch,
  } = useSectionA(currentProductType);
  const sectionAData = classesData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Carousel
            items={Array.from({ length: 4 }, (_, index) => ({ id: index }))}
            renderItem={() => <SectionACardSkeleton />}
            itemsPerView={1}
            showNavigation={false}
            showIndicators={false}
            className="section-a__carousel"
          />
          <SectionAIndicatorsSkeleton />
          <SectionAActionsSkeleton />
        </>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load events: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!sectionAData || sectionAData.length === 0) {
      return (
        <div className="section-a__empty">
          <p>No upcoming events found.</p>
        </div>
      );
    }

    return (
      <>
        <Carousel
          items={sectionAData}
          renderItem={(classInfo) => <SectionACard classInfo={classInfo} />}
          itemsPerView={1}
          showNavigation={true}
          showIndicators={true}
          className="section-a__carousel"
        />

        {/* Action Buttons */}
        <div className="section-a__actions">
          <button className="section-a__action-btn">
            {config.section_a_action_btn_1_text}
          </button>
          <button className="section-a__action-btn">
            {config.section_a_action_btn_2_text}
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="section-a">
      <SectionHeader
        title={config.section_a_title}
        ctaText={config.section_a_cta_text}
        loading={configLoading || !config}
      />
      {renderContent()}
    </div>
  );
};

export default SectionA;
