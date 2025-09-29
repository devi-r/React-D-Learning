import React from "react";
import "./UpcomingClassesIndicatorsSkeleton.scss";

const UpcomingClassesIndicatorsSkeleton = () => {
  return (
    <div className="upcoming-classes-indicators-skeleton">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="upcoming-classes-indicators-skeleton__indicator"
        ></div>
      ))}
    </div>
  );
};

export default UpcomingClassesIndicatorsSkeleton;
