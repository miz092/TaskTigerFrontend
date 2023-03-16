import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import MessageComponent from "../../Components/MessageComponent/MessageComponent";
function ReservationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reservation, setReservation] = useState(null);
  const [user, setUser] = useState(null);
  const [tasker, setTasker] = useState(null);
  const [client, setClient] = useState(null);

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
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    fetchReservation();
    console.log(client + " " + tasker);
  }, [id]);

  // function getCurrentAndOtherUserIds() {
  //   if (!user || !reservation) {
  //     return { currentUserId: null, otherUserId: null };
  //   }

  //   const isTasker = user?.id === reservation?.tasker;
  //   const currentUserId = isTasker ? reservation.tasker : reservation.client;
  //   const otherUserId = isTasker ? reservation.client : reservation.tasker;

  //   return { currentUserId, otherUserId };
  // }

  function isCurrentUserTasker() {
    return user?.id === tasker;
  }

  //const { currentUserId, otherUserId } = getCurrentAndOtherUserIds();
  return user && reservation ? (
    <div className="reservationPage_container">
      <div className="reservationPage_container_reservationDetails">
        Address: <p>{reservation?.address}</p>
        Status: <p>{reservation?.reservationStatus}</p>
        Type of work: <p>{reservation?.workType}</p>
        {/* <table>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{user.phoneNumber}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{user.dob}</td>
            </tr>
            <tr>
              <td>Hourly Wage</td>
              <td>{user.taskerInfo.hourlyWage}</td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>
                <ul>
                  {user.taskerInfo.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
      <div>
        <MessageComponent
          reservationId={id}
          currentUserId={isCurrentUserTasker() ? tasker : client}
          otherUserId={isCurrentUserTasker() ? client : tasker}
        />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ReservationPage;
