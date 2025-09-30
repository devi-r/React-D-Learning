import React from "react";
import "./Skeleton.scss";

const Skeleton = ({
  width = "100%",
  height = "1rem",
  borderRadius = "4px",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...props.style,
      }}
      {...props}
    />
  );
};

export default Skeleton;
