import React, {useEffect, useState} from "react";
import "./TaskersPage.css";
import HandymanHorizontalCard from "../../Components/HandymanCard/HandymanHorizontalCard";
import {useNavigate} from "react-router-dom";
import Calendar from "../../Components/Calendar/Calendar.jsx";


export default function TaskersPage() {
    const [filterCountry, setFilterCountry] = useState("");
    const [filterCounty, setFilterCounty] = useState("");
    const [filterCity, setFilterCity] = useState("");
    const [filterStreet, setFilterStreet] = useState("");
    const [filterStreetNr, setStreetNr] = useState("");
    const [filterSkills, setFilterSkills] = useState([]);
    const [filterWage, setFilterWage] = useState(0);
    const [taskers, setTaskers] = useState(null);

    const [oneTaskerTimeSlots, setOneTaskerTimeSlots] = useState(null);

    const [users, setUsers] = useState(null);
    const currentClient = useState(JSON.parse(localStorage.getItem("user")));

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/timeSlots/1");
            const data = await response.json();
            setOneTaskerTimeSlots([data]);
        }

        fetchData();
    }, []);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/users/tasker/all");
            const data = await response.json();
            setUsers(data);
        }

        fetchData();
    }, []);

    const handleCheckbox = (e) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        isChecked ? setFilterSkills([...filterSkills, value]) : setFilterSkills(filterSkills.filter(filterValue => filterValue !== value));
    };

    function getTaskerAndClientInfo(user, currentClient) {
        console.log(user);
        console.log(currentClient);
        navigate("/confirmation")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/users/worktype`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(filterSkills),
        });

        try {
            const data = await res.json();
            setTaskers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const events =
        [{
            id: 1,
            text: "true",
            start: "2023-03-07T10:30:00",
            end: "2023-03-07T13:00:00"
        }];

    return oneTaskerTimeSlots ? (
        <div className="taskers-page">
            <div className="taskers-page-sidebar">
                <div className="taskers-page-sidebar-calendar">
                    <div className="taskers-page-sidebar-calendar-title">
                        Timetable:
                    </div>
                    {/*<div className="taskers-page-sidebar-calendar-calendar">*/}
                    {/*    <div className="hour">6 - 7</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="hour">7 - 8</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="hour">8 - 9</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="hour">9 - 10</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="hour">10 - 11</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="hour">11 - 12</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*    <div className="day">5</div>*/}
                    {/*</div>*/}
                    <div>
                        <Calendar
                            props={oneTaskerTimeSlots}
                            time={events}
                        >
                        </Calendar>
                    </div>
                </div>
            </div>
            <div className="taskers-page-main">
                <form className="taskers-page-form" id="taskers-page-form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="taskers-page-main-filter">
                        <div className="taskers-page-main-filter-title">
                            Filter Taskers:
                        </div>
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
                            <input
                                name="street"
                                placeholder="Street"
                                onInput={(e) => setFilterStreet(e.target.value)}
                            ></input>
                            <input
                                name="nr"
                                placeholder="Nr."
                                onInput={(e) => setStreetNr(e.target.value)}
                            ></input>
                        </div>
                        <div className="taskers-page-main-filter-skills">
                            <div className="taskers-page-main-filter-skills-text">
                                by Skills:{" "}
                            </div>
                            <div className="skill-div">
                                <input
                                    name="skill-1"
                                    value={"CLEANING"}
                                    type={"checkbox"}
                                    id={"skill-1"}
                                    className={"skills-checkbox"}
                                    checked={filterSkills.includes("CLEANING")}
                                    onChange={(e) => handleCheckbox(e)}
                                ></input>
                                <label htmlFor="skill-1" id="skill-1-label">
                                    CLEANING
                                </label>
                            </div>
                            <div className="skill-div">
                                <input
                                    name="skill-2"
                                    value={"GARDENING"}
                                    type={"checkbox"}
                                    id={"skill-2"}
                                    className={"skills-checkbox"}
                                    checked={filterSkills.includes("GARDENING")}
                                    onChange={(e) => handleCheckbox(e)}
                                ></input>
                                <label htmlFor="skill-2" id="skill-2-label">
                                    GARDENING
                                </label>
                            </div>
                            <div className="skill-div">
                                <input
                                    name="skill-3"
                                    value={"DOG_WALKING"}
                                    type={"checkbox"}
                                    id={"skill-3"}
                                    className={"skills-checkbox"}
                                    checked={filterSkills.includes("DOG_WALKING")}
                                    onChange={(e) => handleCheckbox(e)}
                                ></input>
                                <label htmlFor="skill-3" id="skill-3-label">
                                    DOG WALKING
                                </label>
                            </div>
                        </div>
                        <div className="taskers-page-main-filter-wage">
                            <div className="taskers-page-main-filter-wage-text">
                                by Hourly wage :{" "}
                            </div>
                            <input
                                name="wage"
                                type={"range"}
                                id={"filter-wage"}
                                min={5}
                                onChange={(e) => setFilterWage(e.target.value)}
                            />
                            <div id="filter-wage-value">{filterWage}$</div>
                        </div>
                        <input
                            name="filter"
                            type={"submit"}
                            id="filter-submit-btn"
                            value={"filter"}
                        />
                    </div>
                </form>
                <div className="taskers-page-main-list">
                    {taskers ? taskers.map((tasker, i) => {
                            return (
                                <div
                                    key={i}
                                    onClick={() => getTaskerAndClientInfo(tasker, currentClient)}
                                    className={"taskers-page-main-list-card"}
                                >
                                    <HandymanHorizontalCard
                                        firstName={tasker.firstName}
                                        lastName={tasker.lastName}
                                        skills={tasker?.taskerInfo?.skills}
                                        hourlyWage={tasker?.taskerInfo?.hourlyWage}
                                    />
                                </div>
                            );
                        })
                        : ""}
                </div>
            </div>
        </div>
    ) : "";
}
