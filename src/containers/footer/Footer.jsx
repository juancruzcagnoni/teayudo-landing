import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="footer-center">
          <p>
            <span className="negrita">TEA</span>YUDO, apoyo para niños con
            Trastornos en Espectro Autista.
          </p>
        </div>

        <div className="footer-links_div">
          <h4>Enlaces</h4>
          <a href="#features">
            <p>Funcionalidades</p>
          </a>
          <a href="#testimonials">
            <p>Testimonios</p>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          © {new Date().getFullYear()} <span className="negrita">TEA</span>YUDO.
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
