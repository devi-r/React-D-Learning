import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = ({ size = "medium", message = "Loading..." }) => {
  return (
    <div className={`loading-spinner loading-spinner--${size}`}>
      <div className="loading-spinner__spinner"></div>
      <p className="loading-spinner__message">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
