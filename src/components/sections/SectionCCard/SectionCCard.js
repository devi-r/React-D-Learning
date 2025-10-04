import React from "react";
import { MdArrowForward } from "react-icons/md";
import { getColorCSSVars } from "../../../utils/colors";
import "./SectionCCard.scss";

const SectionCCard = ({ test }) => {
  const colorStyles = getColorCSSVars(test.color_tag);

  return (
    <div className="section-c-card" style={colorStyles}>
      <div className="section-c-card__content">
        <div className="section-c-card__details">
          <p className="section-c-card__title">{test.title}</p>
          <p className="section-c-card__duration">{test.duration}</p>
        </div>
      </div>
      <MdArrowForward className="section-c-card__add-icon" size={20} />
    </div>
  );
};

export default SectionCCard;
