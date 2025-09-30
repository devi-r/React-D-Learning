import React from "react";
import "./SectionAIndicatorsSkeleton.scss";

const SectionAIndicatorsSkeleton = () => {
  return (
    <div className="section-a-indicators-skeleton">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="section-a-indicators-skeleton__indicator"
        ></div>
      ))}
    </div>
  );
};

export default SectionAIndicatorsSkeleton;
