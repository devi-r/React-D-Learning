import React from "react";
import "./EnrolledCourseCardSkeleton.scss";

const EnrolledCourseCardSkeleton = () => {
  return (
    <div className="enrolled-course-card-skeleton">
      <div className="enrolled-course-card-skeleton__icon"></div>
      <div className="enrolled-course-card-skeleton__subject-badge"></div>
      <div className="enrolled-course-card-skeleton__title"></div>
      <div className="enrolled-course-card-skeleton__description"></div>
    </div>
  );
};

export default EnrolledCourseCardSkeleton;
