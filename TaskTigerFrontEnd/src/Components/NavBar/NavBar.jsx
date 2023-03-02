import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Title from "../Title";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <Title titleClass={"nav-title"} subTitleClass={"nav-sub-title"} />
        <div className="nav-myprofile" onClick={() => navigate("/myprofile")}>
          My Profile
        </div>
      </nav>
      <Outlet />
    </>
  );
}
