import React from "react";
import { useClasses } from "../../../hooks/useAPI";
import UpcomingClassCard from "../UpcomingClassCard/UpcomingClassCard";
import UpcomingClassCardSkeleton from "../UpcomingClassCard/UpcomingClassCardSkeleton";
import UpcomingClassesActionsSkeleton from "./UpcomingClassesActionsSkeleton";
import UpcomingClassesIndicatorsSkeleton from "./UpcomingClassesIndicatorsSkeleton";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import Carousel from "../../Carousel/Carousel";
import "./UpcomingClasses.scss";

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2 className="section-header__title">{title}</h2>
    <a href="#" className="section-header__link">
      View All
    </a>
  </div>
);

const UpcomingClasses = () => {
  // Fetch classes data from API
  const { data: classesData, loading, error, refetch } = useClasses();
  const upcomingClasses = classesData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <Carousel
            items={Array.from({ length: 4 }, (_, index) => ({ id: index }))}
            renderItem={() => <UpcomingClassCardSkeleton />}
            itemsPerView={1}
            showNavigation={false}
            showIndicators={false}
            className="upcoming-classes__carousel"
          />
          <UpcomingClassesIndicatorsSkeleton />
          <UpcomingClassesActionsSkeleton />
        </>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load classes: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!upcomingClasses || upcomingClasses.length === 0) {
      return (
        <div className="upcoming-classes__empty">
          <p>No upcoming classes found.</p>
        </div>
      );
    }

    return (
      <>
        <Carousel
          items={upcomingClasses}
          renderItem={(classInfo) => (
            <UpcomingClassCard classInfo={classInfo} />
          )}
          itemsPerView={1}
          showNavigation={true}
          showIndicators={true}
          className="upcoming-classes__carousel"
        />

        {/* Action Buttons */}
        <div className="upcoming-classes__actions">
          <button className="upcoming-classes__action-btn">
            Replays & Notes
          </button>
          <button className="upcoming-classes__action-btn">
            View Full Schedule
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="upcoming-classes">
      <SectionHeader title="Live & Upcoming Classes" />
      {renderContent()}
    </div>
  );
};

export default UpcomingClasses;
