import React from "react";
import "./AssignmentCardSkeleton.scss";

const AssignmentCardSkeleton = () => {
  return (
    <div className="assignment-card-skeleton">
      <div className="assignment-card-skeleton__border"></div>
      <div className="assignment-card-skeleton__content">
        <div className="assignment-card-skeleton__title"></div>
      </div>
    </div>
  );
};

export default AssignmentCardSkeleton;
