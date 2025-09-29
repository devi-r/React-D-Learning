import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ message, onRetry, showRetry = true }) => {
  return (
    <div className="error-message">
      <div className="error-message__icon">⚠️</div>
      <p className="error-message__text">{message}</p>
      {showRetry && onRetry && (
        <button className="error-message__retry-btn" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
