import React from "react";
import Header from "../components/Header";
import {
  ImageWithText,
  ImageWithTextAnimated,
} from "../components/ImageWithText";
import Footer from "../components/Footer";
import content from "../data/PuntosAtencionData";

const PagePuntosAtencion = () => {
  return (
    <>
      <Header />
      <div className="pt-[5vh] md:pt-[7vh] py-16 overflow-hidden">
        <h1 className="font-black text-3xl sm:text-5xl py-16 text-center">
          Conoce nuestros puntos de{" "}
          <span className="text-[#017CE1]">Atención</span>
        </h1>
        <div className="lg:block hidden">
          {content.map((section, index) => (
            <ImageWithTextAnimated
              key={index}
              reverse={section.reverse}
              direction={section.direction}
              imageSrc={section.imageSrc}
              text={section.text}
              address={section.address}
            />
          ))}
        </div>
        <div className="lg:hidden gap-16 flex flex-col">
          {content.map((section, index) => (
            <ImageWithText
              key={index}
              direction={section.direction}
              imageSrc={section.imageSrc}
              text={section.text}
              address={section.address}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PagePuntosAtencion;
