import React from "react";
import "./SectionDCardSkeleton.scss";

const SectionDCardSkeleton = () => {
  return (
    <div className="section-d-card-skeleton">
      <div className="section-d-card-skeleton__icon"></div>
      <div className="section-d-card-skeleton__subject-badge"></div>
      <div className="section-d-card-skeleton__title"></div>
      <div className="section-d-card-skeleton__description"></div>
    </div>
  );
};

export default SectionDCardSkeleton;
