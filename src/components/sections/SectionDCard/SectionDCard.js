import React from "react";
import { MdMenuBook } from "react-icons/md";
import { getColorCSSVars } from "../../../utils/colors";
import "./SectionDCard.scss";

const SectionDCard = ({ course }) => {
  const colorStyles = getColorCSSVars(course.color_tag);

  return (
    <div className="section-d-card" style={colorStyles}>
      <div className="section-d-card__content">
        <div className="section-d-card__icon">
          <MdMenuBook className="section-d-card__icon-svg" size={20} />
        </div>
        <p className="section-d-card__title">{course.title}</p>
        {course.description && (
          <p className="section-d-card__description">{course.description}</p>
        )}
      </div>
      <div className="section-d-card__subject-badge">{course.subject}</div>
    </div>
  );
};

export default SectionDCard;
