import React from "react";
import { useCourses } from "../../../hooks/useAPI";
import EnrolledCourseCard from "../EnrolledCourseCard/EnrolledCourseCard";
import EnrolledCourseCardSkeleton from "../EnrolledCourseCard/EnrolledCourseCardSkeleton";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "./EnrolledCourses.scss";

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2 className="section-header__title">{title}</h2>
    <a href="#" className="section-header__link">
      View All
    </a>
  </div>
);

const EnrolledCourses = () => {
  // Fetch courses data from API
  const { data: coursesData, loading, error, refetch } = useCourses();
  const enrolledCourses = coursesData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="enrolled-courses__grid">
          {Array.from({ length: 4 }, (_, index) => (
            <EnrolledCourseCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load courses: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!enrolledCourses || enrolledCourses.length === 0) {
      return (
        <div className="enrolled-courses__empty">
          <p>No enrolled courses found.</p>
        </div>
      );
    }

    return (
      <div className="enrolled-courses__grid">
        {enrolledCourses.map((item, index) => (
          <EnrolledCourseCard key={item.id || index} course={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="enrolled-courses">
      <SectionHeader title="Courses" />
      {renderContent()}
    </div>
  );
};

export default EnrolledCourses;
