import React from "react";
import { redirect, useNavigate, useRouteError } from "react-router-dom";
import Title from "../../Components/Title";
import "./ErrorPage.css"

const ErrorPage = ({ error, componentStack, resetErrorBoundary }) => {
console.log(error)
console.log(componentStack)
// console.log(resetErrorBoundary)
    return (
        <div id="error-page">
            <div className="error-page-title">TaskTiger.</div>
            <div className="error-page-error">
            <div className="sadFace">😿</div>
            <div className="error-container">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <div className="error-container-error"></div>
            <div className="goHome" onClick={() => location.href = location.origin}>🏠 I want to go home.</div>
            </div>
            </div>
        </div>
    );
}

export default ErrorPage;