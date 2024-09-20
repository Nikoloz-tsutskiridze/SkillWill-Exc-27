import React from "react";
import "./styles/_home.scss";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="welcome">Welcome to the Home Page</h1>
      <button className="login-link">Login</button>
    </div>
  );
};

export default HomePage;
