import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
        </div>

        <div className="footer-center">
          <p>
            <span className="negrita">TEA</span>YUDO, apoyo para niños con
            Trastornos en Espectro Autista.
          </p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Enlaces</h4>
          <a href="#features">
            <p>Funcionalidades</p>
          </a>
          <a href="#testimonials">
            <p>Testimonios</p>
          </a>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>
          © {new Date().getFullYear()} <span className="negrita">TEA</span>YUDO.
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
