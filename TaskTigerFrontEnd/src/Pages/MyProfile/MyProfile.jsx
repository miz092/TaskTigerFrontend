import React, { useEffect } from "react";
import "./MyProfile.css";
import profileImage from "../../Images/handyman-janos.jpg";
import ReservationCard from "../../Components/ReservationCard/ReservationCard";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {

  const navigate = useNavigate();

  useEffect(() => {
    JSON.parse(window.localStorage.getItem("user")) === null ?
    navigate("/") : null;
  }, [])

  return (
    <div className="myprofile-page">
      <div className="myprofile-name">Jane Foster</div>
      <div className="myprofile-details">
        <div className="myprofile-user-details">
          <div className="myprofile-image-div">
            <img src={profileImage} className="myprofile-image" />
          </div>
          <div className="myprofile-user-info">
            <ul>
              <li>jane_f5</li>
              <li>age: 32</li>
              <li>female</li>
              <li>member since 2023</li>
              <li>tasks given out: 14</li>
            </ul>
          </div>
          <div className="myprofile-user-intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aut repudiandae esse repellendus reiciendis minus delectus amet
            tenetur voluptatibus quasi mollitia laborum hic tempora, id ex
            necessitatibus sunt deserunt perspiciatis culpa ratione? Officia,
            reprehenderit quaerat. Labore eum maiores magnam molestiae obcaecati
            provident commodi, quidem architecto nisi veritatis ipsum quisquam
            iure.
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
