import React from "react";
import { MdMenuBook } from "react-icons/md";
import { getSubjectCSSVars } from "../../../utils/subjectColors";
import "./SectionDCard.scss";

const SectionDCard = ({ course }) => {
  const subjectStyles = getSubjectCSSVars(course.subject);

  return (
    <div className="section-d-card" style={subjectStyles}>
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
