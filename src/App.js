import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Portfolios from "./pages/Portfolios";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>

      <Footer />
      <ScrollUp />
    </BrowserRouter>
  );
}

export default App;
