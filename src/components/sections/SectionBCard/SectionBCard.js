import React from "react";
import { getSubjectCSSVars } from "../../../utils/subjectColors";
import "./SectionBCard.scss";

const SectionBCard = ({ assignment }) => {
  const subjectStyles = getSubjectCSSVars(assignment.subject);

  return (
    <div className="section-b-card" style={subjectStyles}>
      <div className="section-b-card__border"></div>

      <div className="section-b-card__content">
        <p className="section-b-card__title">{assignment.title}</p>
      </div>
    </div>
  );
};

export default SectionBCard;
