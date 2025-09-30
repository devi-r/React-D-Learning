import React from "react";
import { MdArrowForward } from "react-icons/md";
import {
  MdScience,
  MdBiotech,
  MdFunctions,
  MdMenuBook,
  MdComputer,
  MdHistoryEdu,
  MdLanguage,
} from "react-icons/md";
import {
  getSubjectCSSVars,
  getSubjectColors,
} from "../../../utils/subjectColors";
import "./SectionCCard.scss";

// Subject code to full name mapping
const subjectCodeMap = {
  CHM: "Chemistry",
  BIO: "Biology",
  MTH: "Mathematics",
  PHY: "Physics",
  ENG: "English",
  CS: "Computer Science",
  HIS: "History",
};

const SubjectIcon = ({ subjectCode }) => {
  const icons = {
    CHM: <MdScience size={20} />,
    BIO: <MdBiotech size={20} />,
    MTH: <MdFunctions size={20} />,
    PHY: <MdScience size={20} />,
    ENG: <MdLanguage size={20} />,
    CS: <MdComputer size={20} />,
    HIS: <MdHistoryEdu size={20} />,
  };

  const subjectName = subjectCodeMap[subjectCode] || "General";
  const colors = getSubjectColors(subjectName);

  return (
    <div
      className="subject-icon-bg"
      style={{
        backgroundColor: colors.secondary,
        color: colors.primary,
      }}
    >
      {icons[subjectCode] || <MdMenuBook size={20} />}
    </div>
  );
};

const SectionCCard = ({ test }) => {
  const subjectName = subjectCodeMap[test.subject] || "General";
  const subjectStyles = getSubjectCSSVars(subjectName);

  return (
    <div className="section-c-card" style={subjectStyles}>
      <div className="section-c-card__content">
        <SubjectIcon subjectCode={test.subject} />
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
