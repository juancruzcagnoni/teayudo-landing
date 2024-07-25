// Imports
import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import home from "../../assets/home.png";

// Component
const Header = () => {
  return (
    <div className="gpt3__header" id="home">
      <div className="gpt3__header-content" data-aos="fade-right">
        <h1>
          <span className="teayudo">
            <span className="negrita">TEA</span>YUDO
          </span>, apoyo para niños con autismo.
        </h1>
        <p>
          Descubrí el apoyo comprensivo y personalizado de <span className="negrita">TEA</span>YUDO, diseñado
          para guiar a niños con Trastornos en Espectro Autista en su viaje
          hacia el desarrollo.
        </p>
        <div className="gpt3__header-button" data-aos="fade-up">
          <button type="button">
            <a href="https://teayudo.vercel.app/" target="_blank">Ir a la app</a>
          </button>
        </div>
      </div>
      <div className="gpt3__header-image" data-aos="fade-left">
        <img src={home} alt="home" />
      </div>
    </div>
  );
};

export default Header;
