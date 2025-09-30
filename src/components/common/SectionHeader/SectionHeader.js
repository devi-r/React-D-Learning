import React from "react";
import "./SectionHeader.scss";

const SectionHeader = ({ title, ctaText, onCtaClick }) => {
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

