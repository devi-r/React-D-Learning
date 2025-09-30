import React from "react";
import "./SectionACardSkeleton.scss";

const SectionACardSkeleton = () => {
  return (
    <div className="section-a-card-skeleton">
      <div className="section-a-card-skeleton__overlay">
        <div className="section-a-card-skeleton__content">
          <div className="section-a-card-skeleton__badges">
            <div className="section-a-card-skeleton__badge"></div>
            <div className="section-a-card-skeleton__badge"></div>
          </div>
          <div className="section-a-card-skeleton__content-text">
            <div className="section-a-card-skeleton__title"></div>
            <div className="section-a-card-skeleton__meta"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionACardSkeleton;
