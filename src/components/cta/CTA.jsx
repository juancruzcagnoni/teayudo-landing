import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta" data-aos="fade-up">
      <div className="cta-content">
        <p>
          Descargá <span className="negrita">TEA</span>YUDO y abrí la puerta a
          un futuro lleno de posibilidades.
        </p>
        <h3>¡Juntos podemos hacer la diferencia!</h3>
      </div>
      <div className="cta-button">
        <button type="button">
          <a href="https://teayudo.vercel.app/" target="_blank">
            Ir a la app
          </a>
        </button>
      </div>
    </div>
  );
};

export default CTA;
