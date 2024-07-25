import React, { useEffect } from "react";

import { Footer, Testimonials, Features, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en milisegundos
      once: true, // si se debe animar solo una vez
    });
  }, []);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
