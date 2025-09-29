import React from "react";
import { getSubjectCSSVars } from "../../../utils/subjectColors";
import "./AssignmentCard.scss";

const AssignmentCard = ({ assignment }) => {
  const subjectStyles = getSubjectCSSVars(assignment.subject);

  return (
    <div className="assignment-card" style={subjectStyles}>
      <div className="assignment-card__border"></div>

      <div className="assignment-card__content">
        <p className="assignment-card__title">{assignment.title}</p>
      </div>
    </div>
  );
};

export default AssignmentCard;
