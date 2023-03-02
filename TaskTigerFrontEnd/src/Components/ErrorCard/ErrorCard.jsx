import React from "react";
import "./ErrorCard.css";

export default function ErrorCard() {
    return (
        <div className="error-card">
            <div className="error-oops">Oops...</div>
            <div>something went wrong</div>
        </div>
    );
}