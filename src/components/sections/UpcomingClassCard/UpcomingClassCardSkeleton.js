import React from "react";
import "./UpcomingClassCardSkeleton.scss";

const UpcomingClassCardSkeleton = () => {
  return (
    <div className="upcoming-class-card-skeleton">
      <div className="upcoming-class-card-skeleton__overlay">
        <div className="upcoming-class-card-skeleton__content">
          <div className="upcoming-class-card-skeleton__badges">
            <div className="upcoming-class-card-skeleton__badge"></div>
            <div className="upcoming-class-card-skeleton__badge"></div>
          </div>
          <div className="upcoming-class-card-skeleton__content-text">
            <div className="upcoming-class-card-skeleton__title"></div>
            <div className="upcoming-class-card-skeleton__meta"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingClassCardSkeleton;
