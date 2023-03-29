import "./HandymanHorizontalCard.css";

import React from "react";
import handymanImage from "../../Images/handyman-janos.jpg";

export default function HandymanHorizontalCard({
  lastName,
  firstName,
  hourlyWage,
  skills, handleShowTableButton
}) {

    return (
    <div className="handyman-card-horizontal">
      <img
        src={handymanImage}
        className="handyman-card-image-horizontal"
        alt={"handyman-janos.jpg"}
      />
      <div className="handyman-card-details-horizontal">
        <div className="handyman-name-horizontal">{lastName + " " + firstName}</div>
        <div className="handyman-expertise-horizontal">
          {skills
            ? skills.map((skill, i) => {
                return <div key={i}>{skill.replaceAll("_", " ")}</div>;
              })
            : ""}
          <div className="handyman-rate">⭐ 4.91 (484)</div>
        </div>
        <div className="handyman-wage-horizontal">💲 {hourlyWage} / hour</div>
          <button onClick={handleShowTableButton} >Show Timetable</button>
      </div>
    </div>
  );
}
