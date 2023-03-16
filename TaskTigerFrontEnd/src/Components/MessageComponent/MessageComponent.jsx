import React, { useState, useEffect } from "react";

const MessageComponent = ({ reservationId, currentUserId, otherUserId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [reservation, setReservation] = useState(null);
  useEffect(() => {
    console.log(reservationId + " " + currentUserId + " " + otherUserId);

    async function fetchMessages() {
      try {
        const response = await fetch(
          `/api/reservation/message/${reservationId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setMessages(data);
        console.log(messages);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMessages();
  }, [reservationId]);

  const sendMessage = async (e, reservationId) => {
    e.preventDefault();

    const response = await fetch(`/api/reservation/message/${reservationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        senderId: currentUserId,
        receiverId: otherUserId,
        createdDate: new Date().toISOString(),
        message: message,
        reservationId: reservationId,
      }),
    });
    try {
      if (response.ok) {
        const newMessage = {
          sender: { id: currentUserId },
          receiver: { id: otherUserId },
          createdDate: new Date(),
          message: message,
        };
        setMessages([...messages, newMessage]);
        setMessage("");
        console.log(messages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li
            key={index}
            style={{
              textAlign: msg.sender === currentUserId ? "right" : "left",
            }}
          >
            {msg.message}
          </li>
        ))}
      </ul>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here"
      />
      <button
        onClick={(e) => {
          sendMessage(e, reservationId);
        }}
      >
        Send
      </button>
    </div>
  );
};
export default MessageComponent;
