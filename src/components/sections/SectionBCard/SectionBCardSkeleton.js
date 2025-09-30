import React from "react";
import "./SectionBCardSkeleton.scss";

const SectionBCardSkeleton = () => {
  return (
    <div className="section-b-card-skeleton">
      <div className="section-b-card-skeleton__border"></div>
      <div className="section-b-card-skeleton__content">
        <div className="section-b-card-skeleton__title"></div>
      </div>
    </div>
  );
};

export default SectionBCardSkeleton;
