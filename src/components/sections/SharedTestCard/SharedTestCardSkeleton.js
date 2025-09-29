import React from "react";
import "./SharedTestCardSkeleton.scss";

const SharedTestCardSkeleton = () => {
  return (
    <div className="shared-test-card-skeleton">
      <div className="shared-test-card-skeleton__content">
        <div className="shared-test-card-skeleton__icon"></div>
        <div className="shared-test-card-skeleton__details">
          <div className="shared-test-card-skeleton__title"></div>
          <div className="shared-test-card-skeleton__duration"></div>
        </div>
      </div>
    </div>
  );
};

export default SharedTestCardSkeleton;
