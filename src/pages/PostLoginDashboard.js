import React from "react";
import DashboardWrapper from "../components/dashboardWrapper/DashboardWrapper";
import { ConfigProvider } from "../contexts/ConfigContext";

// PostLoginDashboard
function PostLoginDashboard() {
  return (
    <ConfigProvider>
      <div className="layout-root">
        <DashboardWrapper />
      </div>
    </ConfigProvider>
  );
}

export default PostLoginDashboard;
