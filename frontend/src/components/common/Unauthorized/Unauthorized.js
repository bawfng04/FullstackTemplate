import React from "react";
import "./Unauthorized.css";

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <h1 className="unauthorized-title">401</h1>
      <p className="unauthorized-message">Unauthorized</p>
      <p className="unauthorized-description">
        You are not authorized to view this page.
      </p>
    </div>
  );
};

export default Unauthorized;
