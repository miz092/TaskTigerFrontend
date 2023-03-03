import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Title from "../Title";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  const signOut = () => {
    window.localStorage.setItem("user", null);
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
          GetTaskers
        </div>
        {JSON.parse(window.localStorage.getItem("user")) !== null ? (
          <div
            className="nav-button"
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </div>
        ) : window.location.href === "http://127.0.0.1:5173/signin" ? (
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
