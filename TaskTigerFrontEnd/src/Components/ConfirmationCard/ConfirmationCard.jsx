import React from "react";
import "./ConfirmationCard.css";
import {useNavigate} from "react-router-dom";

export default function ConfirmationCard() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/thankyou");
    }
    return (
        <div className="confirmation-card">
            <div className="confirmation-card-title">Confirmation Details:</div>
            <div className="confirmation-card-details">
                <div className="confirmation-details-line">
                    <div className="confirmation-details-nameTag">Client:</div>
                    <div className="confirmation-details-parameter">Jane Foster</div>
                </div>
                <div className="confirmation-details-line">
                    <div className="confirmation-details-nameTag">Job:</div>
                    <div className="confirmation-details-parameter">Dog walking</div>
                </div>
                <div className="confirmation-details-line">
                    <div className="confirmation-details-nameTag">Duration:</div>
                    <div className="confirmation-details-parameter">2 hour</div>
                </div>
                <div className="confirmation-details-line">
                    <div className="confirmation-details-nameTag">Address:</div>
                    <div className="confirmation-details-parameter">Budapest, Népfürdő u. 21f, 1138</div>
                </div>
                <div className="confirmation-details-line">
                    <div className="confirmation-details-nameTag">Description:</div>
                    <div className="confirmation-details-parameter">Please walk 5 km.</div>
                </div>
                <div className="confirmation-details-line">
                    <div className="confirmation-details-nameTag">Message:</div>
                    <div className="confirmation-details-parameter">Call me when you're here at the door. 125
                        doorbell!
                    </div>
                </div>
                <div className="confirmation-details-selectedPeopleBox">
                    <div className="confirmation-details-selectedPeopleBox-title">
                        <div className="confirmation-details-nameTag">Selected people</div>
                        <div className="confirmation-details-nameTag">Request status</div>
                    </div>

                    <div className="confirmation-details-taskerContainer">
                        <div className="confirmation-details-taskerTagAndName">
                            <div className="confirmation-details-taskerTag">Tasker:</div>
                            <div className="confirmation-details-taskerName">Derrick</div>
                        </div>
                        <div> sending request</div>
                    </div>
                    <hr/>
                    <div className="confirmation-details-line-price">
                        <div className="confirmation-details-line-price">
                            <div>
                                2
                            </div>
                            <div>x</div>
                            <div>
                                $30.58
                            </div>
                        </div>
                        <div className>
                            $61.97
                        </div>
                    </div>
                    <div className="confirmation-details-line-total">
                        <div className="confirmation-details-nameTag">Total (USD):</div>
                        <div className="confirmation-details-line-total-priceValue">$61.97</div>
                    </div>
                </div>
                <button className="buttonSubmit"
                        type={"submit"}
                        onClick={(e) => handleSubmit(e)}
                >Send request to Tasker(s)
                </button>
            </div>
        </div>
    );
}
