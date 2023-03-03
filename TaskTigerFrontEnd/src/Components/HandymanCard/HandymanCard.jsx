import React from "react";
import "./HandymanCard.css";
import handymanImage from "../../Images/handyman-janos.jpg"

export default function HandymanCard({lastName, firstName, hourlyWage, skills}) {
    return (<div className="handyman-card">
            <img
                src={handymanImage}
                className="handyman-card-image"
             alt={"handyman-janos.jpg"}/>
            <div className="handyman-card-details">
                <div className="handyman-name">{lastName + " " + firstName}</div>
                <div className="handyman-expertise">
                    {skills ? skills.map((skill,i) => {
                        return (<div key={i}>
                                {skill}
                            </div>);
                    }) : ("")}
                    {/*<div className="handyman-rate">⭐ 4.91 (484)</div>*/}
                </div>
                <div className="handyman-wage">💲 {hourlyWage} / hour</div>
            </div>
        </div>);
}
