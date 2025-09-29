import React from "react";
import { useAssignments } from "../../../hooks/useAPI";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import AssignmentCardSkeleton from "../AssignmentCard/AssignmentCardSkeleton";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import "./Assignments.scss";

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2 className="section-header__title">{title}</h2>
    <a href="#" className="section-header__link">
      View All
    </a>
  </div>
);

const Assignments = () => {
  // Fetch assignments data from API
  const { data: assignmentsData, loading, error, refetch } = useAssignments();
  const assignments = assignmentsData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="assignments__grid">
          {Array.from({ length: 3 }, (_, index) => (
            <AssignmentCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load assignments: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!assignments || assignments.length === 0) {
      return (
        <div className="assignments__empty">
          <p>No assignments found.</p>
        </div>
      );
    }

    return (
      <div className="assignments__grid">
        {assignments.map((item, index) => (
          <AssignmentCard key={item.id || index} assignment={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="assignments">
      <SectionHeader title="Assignments" />
      {renderContent()}
    </div>
  );
};

export default Assignments;
