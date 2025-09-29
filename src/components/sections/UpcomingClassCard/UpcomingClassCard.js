import React, { useState } from "react";
import { getSubjectCSSVars } from "../../../utils/subjectColors";
import useClassTimer from "../../../hooks/useClassTimer";
import "./UpcomingClassCard.scss";

const UpcomingClassCard = ({ classInfo }) => {
  const [imageError, setImageError] = useState(false);
  const subjectStyles = getSubjectCSSVars(classInfo.subject);
  const { status, countdown } = useClassTimer(
    classInfo.startTime,
    classInfo.endTime
  );

  const getStatusBadge = () => {
    if (status === "live") {
      return (
        <span className="upcoming-class-card__badge upcoming-class-card__badge--live">
          LIVE
        </span>
      );
    } else if (status === "ended") {
      return (
        <span className="upcoming-class-card__badge upcoming-class-card__badge--ended">
          ENDED
        </span>
      );
    } else if (countdown) {
      return (
        <span className="upcoming-class-card__badge upcoming-class-card__badge--countdown">
          UPCOMING IN {countdown.minutes}:
          {countdown.seconds.toString().padStart(2, "0")}
        </span>
      );
    } else {
      return (
        <span className="upcoming-class-card__badge upcoming-class-card__badge--status">
          UPCOMING
        </span>
      );
    }
  };

  const formatTime = (startTime) => {
    const date = new Date(startTime);
    return (
      date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }) +
      ", " +
      date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  const getJoinButton = () => {
    if (status === "live") {
      return (
        <button className="upcoming-class-card__join-btn">Join Now</button>
      );
    }
    return null;
  };

  return (
    <div className="upcoming-class-card" style={subjectStyles}>
      <div className="upcoming-class-card__overlay">
        <div className="upcoming-class-card__content">
          <div className="upcoming-class-card__badges">
            <span className="upcoming-class-card__badge upcoming-class-card__badge--subject">
              {classInfo.subject}
            </span>
            {getStatusBadge()}
          </div>
          <div className="upcoming-class-card__content-text">
            <h3 className="upcoming-class-card__title">{classInfo.title}</h3>
            <p className="upcoming-class-card__meta">
              {formatTime(classInfo.startTime)} • {classInfo.instructor}
            </p>
            {getJoinButton()}
          </div>
        </div>
        {!imageError && (
          <div className="upcoming-class-card__teacher">
            <img
              src={classInfo.teacherProfilePic}
              alt={`${classInfo.instructor} profile`}
              className="upcoming-class-card__teacher-image"
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingClassCard;
