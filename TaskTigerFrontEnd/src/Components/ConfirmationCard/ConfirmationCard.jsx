import React from "react";
import "./ConfirmationCard.css";
import { useNavigate } from "react-router-dom";
// import { postReservation } from "./confirmation";

export default function ConfirmationCard({
}) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/thankyou");
  };
  return (
    <div className="confirmation-card">
      <div className="confirmation-card-title">Confirmation Details:</div>
      <div className="confirmation-card-details">
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Client:</div>
          <div className="confirmation-details-parameter">
          Señor Client
          </div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Job:</div>
          <div className="confirmation-details-parameter">Best job in the world</div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Duration:</div>
          <div className="confirmation-details-parameter">65 years</div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Address:</div>
          <div className="confirmation-details-parameter">101001 Address street 01</div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Description:</div>
          <div className="confirmation-details-parameter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, neque!</div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Message:</div>
          <div className="confirmation-details-parameter">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="confirmation-details-selectedPeopleBox">
          <div className="confirmation-details-selectedPeopleBox-title">
            <div className="confirmation-details-nameTag">Selected people:</div>
            <div className="confirmation-details-nameTag">Request status:</div>
          </div>

          <div className="confirmation-details-taskerContainer">
            <div className="confirmation-details-taskerTagAndName">
              <div className="confirmation-details-taskerTag">Tasker:</div>
              <div className="confirmation-details-taskerName">
                Señor Tasker
              </div>
            </div>
            <div style={{color:"blue"}}> sending request</div>
          </div>
          <hr />
          <div className="confirmation-details-line-price">
            <div className="confirmation-details-line-price">
              <div>2</div>
              <div>x</div>
              <div>$30.58</div>
            </div>
            <div className>$61.97</div>
          </div>
          <div className="confirmation-details-line-total">
            <div className="confirmation-details-nameTag">Total (USD):</div>
            <div className="confirmation-details-line-total-priceValue">
              $61.97
            </div>
          </div>
        </div>
        <button
          className="buttonSubmit"
          type={"submit"}
          onClick={(e) => handleSubmit(e)}
        >
          Send request to Tasker(s)
        </button>
      </div>
    </div>
  );
}
