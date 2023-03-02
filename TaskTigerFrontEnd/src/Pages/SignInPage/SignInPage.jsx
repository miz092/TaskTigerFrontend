import "./SignInPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(
    "Don't use your real passwords, the passwords on this page are not yet encrypted!"
  );

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();

    //   const res = await fetch(`/api/users/`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //     }),
    //   });

    //   try {
    //     const user_id = await res.json();
    //     const userData = await (await fetch("/api/users/" + user_id)).json();
    //     window.localStorage.setItem("user", JSON.stringify(userData));
    //     //setSignedInUser(userData);
    //     //navigate("/user/" + user_id);
    //     navigate("/myprofile")
    //   } catch (error) {
    //     setErrorMessage("Invalid username or password.");
    //   }
    }

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="sign-in-title">Sign In</div>
        <form className="sign-in-form" id="sign-in-form">
          <input
            name="username"
            placeholder="Your username"
            onInput={(e) => setUsername(e.target.value)}
          ></input>

          <input
            name="password"
            type={"password"}
            placeholder="Your password"
            onInput={(e) => setPassword(e.target.value)}
          />

          <input
            name="submit"
            type={"submit"}
            id="sign-in-submit-btn"
            value={"Sign in"}
            onClick={(e) => handleSubmit(e)}
          />
        </form>

        <div className="error-message">{errorMessage}</div>

        <div className="register" onClick={() => navigate("/")}>
            Don't have an account?{" "}
            <b>
              Register here
            </b>
            .
          </div>

      </div>
    </div>
  );
}
