import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import MessageComponent from "../../Components/MessageComponent/MessageComponent";
import "./ReservationPage.css";
function ReservationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reservation, setReservation] = useState(null);
  const [user, setUser] = useState(null);
  const [tasker, setTasker] = useState(null);
  const [client, setClient] = useState(null);
  const [otherUserId, setOtherUserId] = useState(0);
  const [otherUser, setOtherUser] = useState(null);

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

    async function fetchReservation() {
      const res = await fetch(`/api/reservation/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      try {
        const data = await res.json();
        setReservation(data);
        setTasker(data.taskerId);
        setClient(data.clientId);
        setOtherUserId(
          user?.id === data.taskerId ? data.clientId : data.taskerId
        );
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchOtherUser() {
      const res = await fetch(`/api/users/${otherUserId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      try {
        const data = await res.json();
        setOtherUser(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    fetchReservation();
    fetchOtherUser();
  }, [id, otherUserId]);

  function isCurrentUserTasker() {
    return user?.tasker;
  }
  console.log(reservation);

  return reservation && otherUser ? (
    <div className="reservationPage_container">
      <div className="reservationPage_container_reservationDetails">
        <h2>Details:</h2>

        <hr />

        <div className="reservation-detail">
          <b>Address:</b> {reservation?.address}
        </div>
        <div
          className="reservation-detail"
          style={{
            color:
              reservation?.reservationStatus === "PENDING"
                ? "darkorange"
                : reservation?.reservationStatus === "CONFIRMED"
                ? "darkblue"
                : reservation?.reservationStatus === "COMPLETED"
                ? "darkgreen"
                : reservation?.reservationStatus === "CANCELLED"
                ? "darkred"
                : "black",
          }}
        >
          <b>Status:</b> {reservation?.reservationStatus}
        </div>
        <div className="reservation-detail">
          <b>Type of work:</b> {reservation?.workType.replaceAll("_", " ")}
        </div>
        <div className="reservation-detail">
          <b>Description:</b> {reservation?.description}
        </div>

        <hr />

        <table className="reservationPage_container_reservationDetails_table">
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                First Name:
              </td>
              <td>{otherUser.firstName}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                Last Name:
              </td>
              <td>{otherUser.lastName}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>Email:</td>
              <td>{otherUser.email}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                Phone Number:
              </td>
              <td>{otherUser.phoneNumber}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>Gender:</td>
              <td>{otherUser.gender}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", textAlign: "left" }}>
                Date of Birth:
              </td>
              <td>{otherUser.dob}</td>
            </tr>
            {isCurrentUserTasker() ? (
              <>
                <tr>
                  <td style={{ fontWeight: "bold", textAlign: "left" }}>
                    Hourly Wage:
                  </td>
                  <td>{otherUser.taskerInfo.hourlyWage} $</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", textAlign: "left" }}>
                    Skills:
                  </td>
                  <td>
                    <ul>
                      {otherUser.taskerInfo.skills.map((skill, index) => (
                        <li key={index}>{skill.replaceAll("_", " ")}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
      <MessageComponent
        reservationId={id}
        currentUserId={user?.id}
        otherUserId={otherUserId}
      />
    </div>
  ) : (
    <></>
  );
}

export default ReservationPage;
