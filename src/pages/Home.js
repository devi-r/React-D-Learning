import React from "react";
import Header from "../components/Header/Header";
import UpcomingClasses from "../components/sections/UpcomingClasses/UpcomingClasses";
import Assignments from "../components/sections/Assignments/Assignments";
import SharedTests from "../components/sections/SharedTests/SharedTests";
import EnrolledCourses from "../components/sections/EnrolledCourses/EnrolledCourses";
import GamificationCard from "../components/sections/GamificationCard/GamificationCard";
import FloatingAskButton from "../components/sections/FloatingAskButton/FloatingAskButton";
import "../index.css";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="home__main">
        <div className="home__content">
          <h1 className="home__greeting">Hi Devi</h1>

          <UpcomingClasses />
          <Assignments />
          <SharedTests />
          <EnrolledCourses />
          <div className="home__mobile-gamification">
            <GamificationCard />
          </div>
        </div>

        <div className="home__sidebar">
          <GamificationCard />
        </div>
      </main>

      <FloatingAskButton />
    </div>
  );
};

export default Home;
