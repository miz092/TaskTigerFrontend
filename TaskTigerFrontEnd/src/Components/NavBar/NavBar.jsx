import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
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
  console.log(window.location.href);
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
        ) : window.location.href === "http://localhost:5173/signin" ? (
          <div className="nav-button" onClick={() => navigate("/")}>
            Register
          </div>
        ) : (
          <div className="nav-button" onClick={() => navigate("/signin")}>
            Sign in
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}
