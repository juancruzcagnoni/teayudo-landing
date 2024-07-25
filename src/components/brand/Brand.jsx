// Imports
import React from "react";
import { estrellas, libro, megafono } from "./imports"; 
import "./brand.css";

// Component
const Brand = () => {
  return (
    <div className="gpt3__brand" data-aos="fade-up">
      <div className="brand-item">
        <img className="brand-image" src={megafono} alt="google" />
        <div className="text-container">
          <h2>+50</h2>
          <p className="brand-text">Botones de sonidos</p>
        </div>
      </div>
      <div className="brand-item">
        <img className="brand-image" src={estrellas} alt="slack" />
        <div className="text-container">
          <h2>3</h2>
          <p className="brand-text">Meditaciones guiadas</p>
        </div>
      </div>
      <div className="brand-item">
        <img className="brand-image" src={libro} alt="atlassian" />
        <div className="text-container">
          <h2>+99</h2>
          <p className="brand-text">Creación de informes</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
