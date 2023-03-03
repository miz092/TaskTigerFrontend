import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "../../Components/Auth/Register";
import HandymanCard from "../../Components/HandymanCard/HandymanCard";
import Title from "../../Components/Title";
import "./HomePage.css";

export default function HomePage() {

  return (
    <div className="home-page">
      <Title titleClass={"title"} subTitleClass={"sub-title"} />
      <div className="home-container">
        <div className="home-description">
          <div className="description-text">
            <div className="description-text-title">
              Everyday life made easier
            </div>
            When life gets busy, you don't have to tackle it alone.
            <br />
            Get time back for what you love without breaking the bank.
            <br />
            <br />
            - Choose your Tasker by reviews, skills, and price
            <br />
            - Schedule when it works for you — as early as today
            <br />
            - Chat, pay, tip, and review all through one platform
            <br />
          </div>

          <div className="handyman-cards">
            <HandymanCard />
            <HandymanCard />
            <HandymanCard />
            <HandymanCard />
          </div>
        </div>
        <Register />
      </div>
    </div>
  );
}
