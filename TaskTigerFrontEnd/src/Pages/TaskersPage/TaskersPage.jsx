import React, { useState } from "react";
import "./TaskersPage.css";

export default function TaskersPage() {
  const [filterCountry, setFilterCountry] = useState("");
  const [filterCounty, setFilterCounty] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterSkills, setFilterSkills] = useState([]);
  const [filterWage, setFilterWage] = useState(0);


const handleCheckbox = (e) => {
    e.target.checked ?
    filterSkills.push(e.target.labels[0].innerText) : null
    console.log(filterSkills)
}


  return (
    <div className="taskers-page">
      <div className="taskers-page-sidebar">
        <div className="taskers-page-sidebar-calendar">
          <div className="taskers-page-sidebar-calendar-title">
            Available people:
          </div>
          <div className="taskers-page-sidebar-calendar-calendar">
            <div className="hour">6 - 7</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="hour">7 - 8</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="hour">8 - 9</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="hour">9 - 10</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="hour">10 - 11</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="hour">11 - 12</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
            <div className="day">5</div>
          </div>
        </div>
      </div>
      <div className="taskers-page-main">
        <div className="taskers-page-main-filter">
          <div className="taskers-page-main-filter-title">Filter Taskers:</div>
          <div className="taskers-page-main-filter-address">
            <div className="taskers-page-main-filter-address-text">
              by Address:{" "}
            </div>
            <input
              name="country"
              placeholder="Country"
              onInput={(e) => setFilterCountry(e.target.value)}
            ></input>
            <input
              name="county"
              placeholder="County"
              onInput={(e) => setFilterCounty(e.target.value)}
            ></input>
            <input
              name="city"
              placeholder="City"
              onInput={(e) => setFilterCity(e.target.value)}
            ></input>
          </div>
          <div className="taskers-page-main-filter-skills">
            <div className="taskers-page-main-filter-skills-text">
              by Skills:{" "}
            </div>
            <div className="skill-div">
            <input
              name="skill-1"
              type={"checkbox"}
              id={"skill-1"}
              className={"skills-checkbox"}
              onChange={(e) => handleCheckbox(e)}
            ></input>
            <label htmlFor="skill-1" id="skill-1-label">
              Skill 1
            </label>
            </div>
            <div className="skill-div">
            <input
              name="skill-2"
              type={"checkbox"}
              id={"skill-2"}
              className={"skills-checkbox"}
              onChange={(e) => handleCheckbox(e)}
            ></input>
            <label htmlFor="skill-2" id="skill-2-label">
              Skill 2
            </label>
            </div>
            <div className="skill-div">
            <input
              name="skill-3"
              type={"checkbox"}
              id={"skill-3"}
              className={"skills-checkbox"}
              onChange={(e) => handleCheckbox(e)}
            ></input>
            <label htmlFor="skill-3" id="skill-3-label">
              Skill 3
            </label>
            </div>
          </div>
          <div className="taskers-page-main-filter-wage">
            <div className="taskers-page-main-filter-wage-text">
              by Hourly wage :{" "}
            </div>
            <input name="wage" type={"range"} id={"filter-wage"} min={5} onChange={(e) => setFilterWage(e.target.value)}/>
            <div id="filter-wage-value">{filterWage}$</div>
          </div>
        </div>
        <div className="taskers-page-main-list"></div>
      </div>
    </div>
  );
}
