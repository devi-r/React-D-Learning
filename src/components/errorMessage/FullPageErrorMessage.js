import React from "react";
import "./FullPageErrorMessage.scss";

const FullPageErrorMessage = ({ message, onRetry, showRetry = true }) => {
  return (
    <div className="full-page-error">
      <div className="full-page-error__container">
        <div className="full-page-error__icon">⚠️</div>
        <h1 className="full-page-error__title">Something went wrong</h1>
        <p className="full-page-error__message">{message}</p>
        {showRetry && onRetry && (
          <button className="full-page-error__retry-btn" onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default FullPageErrorMessage;
