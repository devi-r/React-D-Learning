import React from "react";
import "./SectionCCardSkeleton.scss";

const SectionCCardSkeleton = () => {
  return (
    <div className="section-c-card-skeleton">
      <div className="section-c-card-skeleton__content">
        <div className="section-c-card-skeleton__icon"></div>
        <div className="section-c-card-skeleton__details">
          <div className="section-c-card-skeleton__title"></div>
          <div className="section-c-card-skeleton__duration"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionCCardSkeleton;
