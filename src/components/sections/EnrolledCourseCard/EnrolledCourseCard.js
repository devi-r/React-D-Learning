import React from "react";
import { MdMenuBook } from "react-icons/md";
import { getSubjectCSSVars } from "../../../utils/subjectColors";
import "./EnrolledCourseCard.scss";

const EnrolledCourseCard = ({ course }) => {
  const subjectStyles = getSubjectCSSVars(course.subject);

  return (
    <div className="enrolled-course-card" style={subjectStyles}>
      <div className="enrolled-course-card__content">
        <div className="enrolled-course-card__icon">
          <MdMenuBook className="enrolled-course-card__icon-svg" size={20} />
        </div>
        <p className="enrolled-course-card__title">{course.title}</p>
        {course.description && (
          <p className="enrolled-course-card__description">
            {course.description}
          </p>
        )}
      </div>
      <div className="enrolled-course-card__subject-badge">
        {course.subject}
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
