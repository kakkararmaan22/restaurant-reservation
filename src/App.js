import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import AboutSection from "./components/AboutSection";
import CarouselSection from "./components/CarouselSection";
import ReservationForm from "./components/ReservationForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <AboutSection />
              <CarouselSection />
              <ContactSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/reservation"
          element={
            <>
              <ReservationForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Menu />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
