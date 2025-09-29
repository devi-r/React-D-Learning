import React from "react";
import { MdStars } from "react-icons/md";
import "./GamificationCard.scss";

const GamificationCard = () => {
  return (
    <>
      <div className="gamification-card">
        <div className="gamification-card__header">
          <div className="gamification-card__icon">
            <MdStars className="gamification-card__icon-svg" size={21} />
          </div>
          <h3 className="gamification-card__title">Earn Points</h3>
        </div>
        <p className="gamification-card__description">
          Complete daily tasks to earn rewards and track your progress
        </p>

        <button className="gamification-card__cta">Start Daily Task</button>
      </div>
    </>
  );
};

export default GamificationCard;
