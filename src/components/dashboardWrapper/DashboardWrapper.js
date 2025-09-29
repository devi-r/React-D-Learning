import React from "react";
import Header from "../header/Header";
import UpcomingClasses from "../sections/UpcomingClasses/UpcomingClasses";
import Assignments from "../sections/Assignments/Assignments";
import SharedTests from "../sections/SharedTests/SharedTests";
import EnrolledCourses from "../sections/EnrolledCourses/EnrolledCourses";
import GamificationCard from "../sections/GamificationCard/GamificationCard";
import FloatingAskButton from "../sections/FloatingAskButton/FloatingAskButton";
import "./DashboardWrapper.scss";

const DashboardWrapper = () => {
  return (
    <div className="dashboard-wrapper">
      <Header />
      <main className="dashboard-wrapper__main">
        <div className="dashboard-wrapper__content">
          <h1 className="dashboard-wrapper__greeting">Hi Devi</h1>

          <UpcomingClasses />
          <Assignments />
          <SharedTests />
          <EnrolledCourses />
          <div className="dashboard-wrapper__mobile-gamification">
            <GamificationCard />
          </div>
        </div>

        <div className="dashboard-wrapper__sidebar">
          <GamificationCard />
        </div>
      </main>

      <FloatingAskButton />
    </div>
  );
};

export default DashboardWrapper;
