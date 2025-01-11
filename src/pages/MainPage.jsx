import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MotoInfo from "../components/MotoInfo";
import Promocion from "../components/Promocion";
import ModelosComprados from "../components/ModelosComprados";
import PuntosAtencion from "../components/PuntosAtencion";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      {/* Volver a hacer esa basura de header */}
      <Header />
      <HeroSection />
      <MotoInfo />
      <Promocion />
      <ModelosComprados />
      <Footer />
    </>
  );
};

export default MainPage;
