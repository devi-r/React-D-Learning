import React from "react";
import DashboardWrapper from "../components/dashboardWrapper/DashboardWrapper";
import { ConfigProvider } from "../contexts/ConfigContext";

// PostLoginDashboard
function PostLoginDashboard() {
  return (
    <ConfigProvider>
      <DashboardWrapper />
    </ConfigProvider>
  );
}

export default PostLoginDashboard;
