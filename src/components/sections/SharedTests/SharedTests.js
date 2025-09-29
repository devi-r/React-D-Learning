import React from "react";
import { useTests } from "../../../hooks/useAPI";
import SharedTestCard from "../SharedTestCard/SharedTestCard";
import SharedTestCardSkeleton from "../SharedTestCard/SharedTestCardSkeleton";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import "./SharedTests.scss";

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2 className="section-header__title">{title}</h2>
    <a href="#" className="section-header__link">
      View All
    </a>
  </div>
);

const SharedTests = () => {
  // Fetch tests data from API
  const { data: testsData, loading, error, refetch } = useTests();
  const sharedTests = testsData?.data || [];

  const renderContent = () => {
    if (loading) {
      return (
        <div className="shared-tests__list">
          {Array.from({ length: 3 }, (_, index) => (
            <SharedTestCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <ErrorMessage
          message={`Failed to load tests: ${error}`}
          onRetry={refetch}
        />
      );
    }

    if (!sharedTests || sharedTests.length === 0) {
      return (
        <div className="shared-tests__empty">
          <p>No tests found.</p>
        </div>
      );
    }

    return (
      <div className="shared-tests__list">
        {sharedTests.map((item, index) => (
          <SharedTestCard key={item.id || index} test={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="shared-tests">
      <SectionHeader title="Tests" />
      {renderContent()}
    </div>
  );
};

export default SharedTests;
