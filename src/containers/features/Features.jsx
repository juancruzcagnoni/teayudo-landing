import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Comunicación sin barreras",
    text: "Facilitá la expresión de necesidades y emociones mediante una botonera intuitiva, esto permite a los niños con TEA comunicarse de manera efectiva y sin frustraciones.",
  },
  {
    title: "Calma interior",
    text: "Sumergite en sesiones de meditación especialmente diseñadas para niños con TEA, esto ofrece audios para ayudarles a encontrar paz y tranquilidad.",
  },
  {
    title: "Generá seguimiento",
    text: "Creá informes de una manera sencilla e intuitiva hacia los pacientes, esto permite la posibilidad de generar un seguimiento al paciente dentro de la aplicación.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading" data-aos="fade-right">
      <h1>
        Explorá las potentes funcionalidades de{" "}
        <span className="negrita">TEA</span>YUDO.
      </h1>
      <div className="gpt3__navbar-sign">
        <button type="button">
          <a href="https://teayudo.vercel.app/" target="_blank">
            Ir a la app
          </a>
        </button>
      </div>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
