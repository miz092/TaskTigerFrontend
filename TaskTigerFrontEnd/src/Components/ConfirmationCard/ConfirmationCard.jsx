import React, { useState, useEffect } from "react";
import "./ConfirmationCard.css";
import { useNavigate } from "react-router-dom";

export default function ConfirmationCard({ details }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [client, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [selectedJob, setSelectedJob] = useState(details?.jobs[0]);
  const [id, setId] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "client":
        setClient(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "message":
        setMessage(value);
        break;
      case "job":
        setSelectedJob(value);
        console.log(value);
        break;
      default:
        break;
    }
  };

  const isLoggedIn =
    localStorage.getItem("token") !== null &&
    localStorage.getItem("token") !== "null";

  useEffect(() => {
    !isLoggedIn ? navigate("/") : null;
    async function fetchData() {
      const res = await fetch(`/api/users/authenticate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      try {
        const user = await res.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`api/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        client: user.id,
        tasker: details.tasker.id,
        description: description,
        workType: selectedJob,
        address: address,
        message: message,
      }),
    });
    try {
      const data = await res.json();

      navigate(`/reservation/${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="confirmation-card">
      <div className="confirmation-card-title">Confirmation Details:</div>
      <div className="confirmation-card-details">
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Client:</div>
          <div className="confirmation-details-parameter">
            {user?.firstName + " " + user?.lastName}
          </div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Job:</div>
          <div className="confirmation-details-parameter">
            <select
              defaultValue={details?.jobs[0]}
              name="job"
              id="confirmation-details-parameter-select"
              onChange={handleInputChange}
            >
              {details?.jobs.map((job, index) => {
                return (
                  <option key={job + index} value={job}>
                    {job}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Duration:</div>
          <div className="confirmation-details-parameter">65 years</div>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Address:</div>
          <input
            name="address"
            onChange={handleInputChange}
            type={"text"}
            className="confirmation-details-parameter"
          ></input>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Description:</div>
          <textarea
            name="description"
            onChange={handleInputChange}
            className="confirmation-details-parameter"
          ></textarea>
        </div>
        <div className="confirmation-details-line">
          <div className="confirmation-details-nameTag">Message:</div>
          <input
            name="message"
            onChange={handleInputChange}
            type={"text"}
            className="confirmation-details-parameter"
          ></input>
        </div>
        <div className="confirmation-details-selectedPeopleBox">
          <div className="confirmation-details-taskerContainer">
            <div className="confirmation-details-taskerTagAndName">
              <div className="confirmation-details-taskerTag">Tasker:</div>
              <div className="confirmation-details-taskerName">
                {details?.tasker.firstName + " " + details?.tasker.lastName}
              </div>
            </div>
          </div>
          <hr id="hr" />
          <div className="confirmation-details-line-price">
            <div className="confirmation-details-line-price">
              <div>2</div>
              <div>x</div>
              <div> ${details?.tasker.taskerInfo.hourlyWage}</div>
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
