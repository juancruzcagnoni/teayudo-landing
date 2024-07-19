import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>TeAyudo - Aplicación para niños con Trastornos del Espectro Autista</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Enlaces</h4>
          <p>Funcionalidades</p>
          <p>Testimonios</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Compañía</h4>
          <p>Términos y Condiciones</p>
          <p>Política de Privacidad</p>
          <p>Contacto</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Contáctanos</h4>
          <p>Dir. Crechterwoord K12 182 DK Alknjkcb</p>
          <p>Tel. 085-132567</p>
          <p>Email: info@teayudo.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© {new Date().getFullYear()} TeAyudo. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
