// Imports
import { useState } from "react";
import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

// Component
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Inicio</a>
          </p>
          <p>
            <a href="#features">Funcionalidades</a>
          </p>
          <p>
            <a href="#testimonials">Testimonios</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">
          <a href="https://teayudo.vercel.app/" target="_blank">
            Ir a la app
          </a>
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#912C8C"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#912C8C"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Inicio</a>
              </p>
              <p>
                <a href="#features">Funcionalidades</a>
              </p>
              <p>
                <a href="#testimonials">Testimonios</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button type="button">
                <a href="https://teayudo.vercel.app/" target="_blank">
                  Ir a la app
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
