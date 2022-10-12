import React from "react";
import Nav from "./compoments/Nav";
import Navigation from "./compoments/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sections from "./compoments/Sections";
import Services from "./compoments/Services";
import Portfolio from "./compoments/Portfolio";
import Youtube from "./compoments/Youtube";
import Skills from "./compoments/Skills";
import Contact from "./compoments/Contact";
import Footer from "./compoments/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
          {/* <Route path="/www.google.com" element={<Sections />} /> */}
        </Routes>
      </Router>
      <Sections />
      <Services />
      <Portfolio />
      <Youtube />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
