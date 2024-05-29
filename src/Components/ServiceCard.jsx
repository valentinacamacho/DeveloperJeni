import React from "react";
import "../Stylesheets/Services.css";

function ServiceCard({ titlecard, descripcioncard, iconservices: Iconservices }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="text-card">{titlecard}</p>
          <Iconservices className="iconserv" />
        </div>
        <div className="flip-card-back">
          <h1 className="title-ser">{titlecard}</h1>
          <p className="des-ser">{descripcioncard}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
