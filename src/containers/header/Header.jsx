// Imports
import React from "react";
import "./header.css";
import home from "../../assets/phones.png";
import people from "../../assets/people.png"

// Component
const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header-content" data-aos="fade-right">
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
        <div className="header-button" data-aos="fade-up">
          <button type="button">
            <a href="https://teayudo.vercel.app/" target="_blank">Ir a la app</a>
          </button>
          <div className="header-people">
            <img src={people} alt="people" />
            <p>+100 personas usaron <span className="negrita">TEA</span>YUDO</p>
          </div>
        </div>
      </div>
      <div className="header-image"  data-aos="fade-up">
        <img src={home} alt="home" />
      </div>
    </div>
  );
};

export default Header;
