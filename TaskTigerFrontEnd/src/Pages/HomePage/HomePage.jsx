import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import HandymanCard from "../../Components/HandymanCard/HandymanCard";
import Title from "../../Components/Title";
import "./HomePage.css";
import Loading from "../../Components/Loading/Loading.jsx";

const fetchUsers = (signal) => {
    return fetch("api/users/tasker/all", {signal}).then((res) => res.json());
};

export default function HomePage() {
    const [users, setUsers] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();

        fetchUsers(controller.signal)
            .then((users) => {
                setUsers(users);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    setUsers(null);
                    throw error;
                }
            });
        return () => controller.abort();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/myprofile");
    }

    return (
        <div className="home-page">
            {users ? (
                <>
                    <Title titleClass={"title"} subTitleClass={"sub-title"}/>
                    <div className="home-container">
                        <div className="home-description">
                            <div className="description-text">
                                <div className="description-text-title">
                                    Everyday life made easier
                                </div>
                                When life gets busy, you don't have to tackle it alone.
                                <br/>
                                Get time back for what you love without breaking the bank.
                                <br/>
                                <br/>
                                - Choose your Tasker by reviews, skills, and price
                                <br/>
                                - Schedule when it works for you — as early as today
                                <br/>
                                - Chat, pay, tip, and review all through one platform
                                <br/>
                            </div>
                            <div>
                                {users.map((currentUser) => {
                                    return (
                                        <div className="handyman-cards"
                                             key={currentUser.id}
                                        >
                                            <HandymanCard
                                                lastName={currentUser.lastName}
                                                firstName={currentUser.firstName}
                                                hourlyWage={currentUser?.taskerInfo?.hourlyWage}
                                                skills={currentUser?.taskerInfo?.skills}
                                            />
                                        </div>
                                    );
                                })};
                            </div>
                        </div>
                        <div className="home-form">
                            <div className="form-title">Register here</div>
                            <form className="home-form-form">
                                <input name="name" placeholder="Your name"></input>
                                <input name="phone" placeholder="Your phone number"></input>
                                <input name="dob" type={"date"} id="dob"></input>
                                <div className="isTasker-checkbox">
                                    <input name="isTasker" type={"checkbox"} id="isTasker"></input>
                                    <label htmlFor="isTasker" id="isTasker-label">
                                        I want to be a Tasker!
                                        <br/>
                                        <span style={{fontSize: "0.7rem", color: "rgb(68,68,68)"}}>
                  This way you will be able to receive tasks and earn money! You
                  can specify your expertise on your profile page.
                </span>
                                    </label>
                                </div>
                                <input
                                    name="email"
                                    type={"email"}
                                    placeholder="Your email address"
                                ></input>
                                <input
                                    name="password"
                                    type={"password"}
                                    placeholder="Your password"
                                ></input>
                                <input
                                    name="password-again"
                                    type={"password"}
                                    placeholder="Your password again"
                                ></input>
                                <input
                                    name="submit"
                                    type={"submit"}
                                    id="submit-btn"
                                    value={"Register"}
                                    onClick={(e) => handleSubmit(e)}
                                ></input>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <Loading/>)}
        </div>
    );
}
