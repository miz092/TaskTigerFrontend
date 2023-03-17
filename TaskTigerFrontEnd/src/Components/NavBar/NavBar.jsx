import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Title from "../Title";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  
  const isLoggedIn =
    localStorage.getItem("token") !== null &&
    localStorage.getItem("token") !== "null";

  const signOut = () => {
    localStorage.setItem("token", null);
    navigate("/");
  };


  return (
    <>
      <nav className="navbar">
        <Title titleClass={"nav-title"} subTitleClass={"nav-sub-title"} />
        <div className="nav-button" onClick={() => navigate("/myprofile")}>
          My Profile
        </div>
        <div className="nav-button" onClick={() => navigate("/taskers")}>
          Taskers
        </div>
        {isLoggedIn ? (
          <div
            className="nav-button"
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </div>
        ) : location.pathname === "/signin" ? (
          <div className="nav-button" onClick={() => navigate("/")}>
            Register
          </div>
        ) : (
          <div className="nav-button" onClick={() => navigate("/signin")}>
            Sign in
          </div>
        )}

        <div className={"slider-switch"}>
          <label className={"switch"} htmlFor={"nightmode-checkbox"}>
            <input type={"checkbox"} id={"nightmode-checkbox"} />
            <div className={"slider round"}></div>
          </label>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
