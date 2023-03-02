import React from "react";
import "./HandymanCard.css";
import handymanImage from "../../Images/handyman-janos.jpg"

export default function HandymanCard() {
  return (
    <div className="handyman-card">
      <img
        src={handymanImage}
        className="handyman-card-image"
      />
      <div className="handyman-card-details">
        <div className="handyman-name">János</div>
        <div className="handyman-expertise">
          <div className="handyman-skills">
            Experienced gardener,<br/>expert plumber
          </div>
          <div className="handyman-rate">⭐ 4.91 (484)</div>
        </div>
        <div className="handyman-address">🏙 Budapest IX. district</div>
        <div className="handyman-available">📅 Available: Oct 23-26</div>
        <div className="handyman-wage">💲 17 - 29 / hour</div>
      </div>
    </div>
  );
}
