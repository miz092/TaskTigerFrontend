import React from "react";
import "./ReservationCard.css";
import handymanImage from "../../Images/handyman-janos.jpg";

export default function ReservationCard() {
  return (
    <div className="reservation-container">
    <div className="reservation-card">
      <div className="reservation-card-date">Your reservation at: 2023.01.12 - 15:00</div>
      <div className="reservation-card-info">
        <div className="reservation-card-image-div">
          <img
            src={handymanImage}
            alt="tasker-image"
            className="reservation-card-image"
          />
        </div>
        <div className="reservation-card-info-details">
          <div className="reservation-card-status">Confirmed</div>
          <div className="reservation-card-task">Walking dog</div>
          <div className="reservation-card-id">reservation code: XMPQKAPZ6D</div>
        </div>
      </div>
    </div>
    <div className="reservation-interaction">❌</div>
    </div>
  );
}
