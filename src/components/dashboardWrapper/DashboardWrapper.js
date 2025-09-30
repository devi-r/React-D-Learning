import React from "react";
import Header from "../header/Header";
import SectionA from "../sections/SectionA/SectionA";
import SectionB from "../sections/SectionB/SectionB";
import SectionC from "../sections/SectionC/SectionC";
import SectionD from "../sections/SectionD/SectionD";
import SectionE from "../sections/SectionE/SectionE";
import FloatingButton from "../sections/FloatingButton/FloatingButton";
import { useConfigData } from "../../contexts/ConfigContext";
import "./DashboardWrapper.scss";

const DashboardWrapper = () => {
  const { config } = useConfigData();

  return (
    <div className="dashboard-wrapper">
      <Header />
      <main className="dashboard-wrapper__main">
        <div className="dashboard-wrapper__content">
          <h1 className="dashboard-wrapper__greeting">{config.page_title}</h1>

          <SectionA />
          <SectionB />
          <SectionC />
          <SectionD />
          <div className="dashboard-wrapper__mobile-section-e">
            <SectionE />
          </div>
        </div>

        <div className="dashboard-wrapper__sidebar">
          <SectionE />
        </div>
      </main>

      <FloatingButton />
    </div>
  );
};

export default DashboardWrapper;
