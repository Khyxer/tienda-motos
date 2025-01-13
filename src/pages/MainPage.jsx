import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MotoInfo from "../components/MotoInfo";
import Promocion from "../components/Promocion";
import ModelosComprados from "../components/ModelosComprados";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      
      <HeroSection />
      <MotoInfo />
      <Promocion />
      <ModelosComprados />
    </>
  );
};

export default MainPage;
