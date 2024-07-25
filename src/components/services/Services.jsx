// Imports
import React from "react";
import { estrellas, libro, megafono } from "./imports"; 
import "./services.css";

// Component
const Services = () => {
  return (
    <div className="services" data-aos="fade-up">
      <div className="service-item">
        <img className="service-image" src={megafono} alt="botones" />
        <div className="text-container">
          <h2>+50</h2>
          <p className="service-text">Botones de sonidos</p>
        </div>
      </div>
      <div className="service-item">
        <img className="service-image" src={estrellas} alt="meditaciones" />
        <div className="text-container">
          <h2>3</h2>
          <p className="service-text">Meditaciones guiadas</p>
        </div>
      </div>
      <div className="service-item">
        <img className="service-image" src={libro} alt="informes" />
        <div className="text-container">
          <h2>+99</h2>
          <p className="service-text">Creación de informes</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
