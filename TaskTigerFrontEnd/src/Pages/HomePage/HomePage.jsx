import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Register from "../../Components/Auth/Register";
import HandymanCard from "../../Components/HandymanCard/HandymanCard";
import Title from "../../Components/Title";
import "./HomePage.css";
import Loading from "../../Components/Loading/Loading.jsx";

const fetchUsers = (signal) => {
    return fetch("api/users/tasker/all", {signal}).then((res) => res.json());
};

export default function HomePage() {
    const [users, setUsers] = useState(null);

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
                      <Register />
                    </div>
                </>
            ) : (
                <Loading/>)}
        </div>
        
    );
}
