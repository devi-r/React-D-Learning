import React, { useState } from "react";
import { getColorCSSVars } from "../../../utils/colors";
import useEventTimer from "../../../hooks/useEventTimer";
import "./SectionACard.scss";

const SectionACard = ({ classInfo }) => {
  const [imageError, setImageError] = useState(false);
  const colorStyles = getColorCSSVars(classInfo.color_tag);
  const { status, countdown } = useEventTimer(
    classInfo.startTime,
    classInfo.endTime
  );

  const getStatusBadge = () => {
    if (status === "live") {
      return (
        <span className="section-a-card__badge section-a-card__badge--live">
          LIVE
        </span>
      );
    } else if (status === "ended") {
      return (
        <span className="section-a-card__badge section-a-card__badge--ended">
          ENDED
        </span>
      );
    } else if (countdown) {
      return (
        <span className="section-a-card__badge section-a-card__badge--countdown">
          UPCOMING IN {countdown.minutes}:
          {countdown.seconds.toString().padStart(2, "0")}
        </span>
      );
    } else {
      return (
        <span className="section-a-card__badge section-a-card__badge--status">
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
      return <button className="section-a-card__join-btn">Join Now</button>;
    }
    return null;
  };

  return (
    <div className="section-a-card" style={colorStyles}>
      <div className="section-a-card__overlay">
        <div className="section-a-card__content">
          <div className="section-a-card__badges">
            <span className="section-a-card__badge section-a-card__badge--color">
              {classInfo.subject_tag}
            </span>
            {getStatusBadge()}
          </div>
          <div className="section-a-card__content-text">
            <h3 className="section-a-card__title">{classInfo.title}</h3>
            <p className="section-a-card__meta">
              {formatTime(classInfo.startTime)} • {classInfo.instructor}
            </p>
            {getJoinButton()}
          </div>
        </div>
        {!imageError && (
          <div className="section-a-card__teacher">
            <img
              src={classInfo.teacherProfilePic}
              alt={`${classInfo.instructor} profile`}
              className="section-a-card__teacher-image"
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionACard;
