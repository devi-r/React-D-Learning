import React from "react";
import { getColorCSSVars } from "../../../utils/colors";
import "./SectionBCard.scss";

const SectionBCard = ({ assignment }) => {
  const colorStyles = getColorCSSVars(assignment.color_tag);

  return (
    <div className="section-b-card" style={colorStyles}>
      <div className="section-b-card__border"></div>

      <div className="section-b-card__content">
        <p className="section-b-card__title">{assignment.title}</p>
      </div>
    </div>
  );
};

export default SectionBCard;
