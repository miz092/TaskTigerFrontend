import React from "react";
import HandymanCard from "../../Components/HandymanCard";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="title">
        TaskTiger.
        <div className="sub-title">Your Task, Our Hunt.</div>
      </div>

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
        <div className="home-form">
          <div className="form-title">Register here</div>
          <form className="home-form-form">
            <input name="name" placeholder="Your name"></input>
            <input name="address" placeholder="Your address"></input>
            <input name="dob" type={"date"} id="dob"></input>
            <div className="isTasker-checkbox">
              <input name="isTasker" type={"checkbox"} id="isTasker"></input>
              <label htmlFor="isTasker" id="isTasker-label">
                I want to be a Tasker!
                <br />
                <span style={{ fontSize: "0.7rem", color: "rgb(68,68,68)" }}>
                  This way you will be able to receive tasks and earn money! You
                  can specify your expertise on your profile page.
                </span>
              </label>
            </div>
            <input
              name="email"
              type={"email"}
              placeholder="Your email address"
            ></input>
            <input
              name="password"
              type={"password"}
              placeholder="Your password"
            ></input>
            <input
              name="password-again"
              type={"password"}
              placeholder="Your password again"
            ></input>
            <input
              name="submit"
              type={"submit"}
              id="submit-btn"
              value={"Register"}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
