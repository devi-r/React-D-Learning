import React from "react";
import Skeleton from "../../skeleton/Skeleton";
import "./SectionHeader.scss";

const SectionHeader = ({ title, ctaText, onCtaClick, loading = false }) => {
  if (loading) {
    return (
      <div className="section-header">
        <Skeleton
          width="200px"
          height="20px"
          className="section-header__title-skeleton"
        />
        <Skeleton
          width="80px"
          height="14px"
          className="section-header__link-skeleton"
        />
      </div>
    );
  }

  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      {ctaText && (
        <a
          href="#"
          className="section-header__link"
          onClick={(e) => {
            e.preventDefault();
            if (onCtaClick) {
              onCtaClick();
            }
          }}
        >
          {ctaText}
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
