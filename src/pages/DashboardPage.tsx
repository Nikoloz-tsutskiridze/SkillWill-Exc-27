import React from "react";
import "./styles/_dashboard.scss";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <div className="header">
        <h1>Dashboard</h1>
      </div>
      <div className="content">
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default DashboardPage;
