import React from "react";
import DashboardWrapper from "./components/dashboardWrapper/DashboardWrapper";
import { ConfigProvider } from "./contexts/ConfigContext";
import "./harness.css";

function App() {
  return (
    <ConfigProvider>
      <div className="layout-root">
        <DashboardWrapper />
      </div>
    </ConfigProvider>
  );
}

export default App;
