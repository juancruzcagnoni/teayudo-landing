import React, { useEffect } from "react";

import { Footer, Testimonials, Features, Header } from "./containers";
import { CTA, Services, Navbar } from "./components";
import "./App.css";

import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
