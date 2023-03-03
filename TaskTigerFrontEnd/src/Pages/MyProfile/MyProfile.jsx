import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import profileImage from "../../Images/handyman-janos.jpg";
import ReservationCard from "../../Components/ReservationCard/ReservationCard";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();

  useEffect(() => {
    JSON.parse(window.localStorage.getItem("user")) === null ?
    navigate("/") : null;
  }, [])

  const getAge = (birthDate) => {
    const thisDate = new Date()
    const dob = new Date(birthDate)
    const thisYear = thisDate.getFullYear()
    const dobYear = dob.getFullYear()
    return thisDate > dob ? thisYear-dobYear-1 : thisYear-dobYear;
  }


  return (
    <div className="myprofile-page">
      <div className="myprofile-name">{user.firstName + " " + user.lastName}</div>
      <div className="myprofile-details">
        <div className="myprofile-user-details">
          <div className="myprofile-image-div">
            <img src={profileImage} className="myprofile-image" />
          </div>
          <div className="myprofile-user-info">
            <div className="myprofile-user-info-title">{user.isTasker ? "TASKER" : "CLIENT" }</div>
            <ul>
              <li>{user.username}</li>
              <li>{getAge(user.dob)}</li>
              <li>{user.gender.toLowerCase()}</li>
              <li>member since {new Date(user.registrationDate).getFullYear()}</li>
              <li>tasks given out: 14</li>
            </ul>
          </div>
          <div className="myprofile-user-intro">
          <div className="myprofile-user-intro-title">ABOUT ME</div>
            <div className="myprofile-user-intro-text">{user.shortIntroduction}</div>
          </div>
        </div>
        <div className="myprofile-reservation-container">
          <div className="myprofile-reservation-container-title">Your upcoming tasks 📅</div>
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />

        </div>
      </div>
    </div>
  );
}
