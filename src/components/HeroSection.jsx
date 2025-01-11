import React from "react";
import banner from "../assets/img/main-banner.jpg";
import honda from "/public/marcas/honda.logo.png";
import bajaj from "/public/marcas/bajaj-auto-logo.svg";
import suzuki from "/public/marcas/Suzuki_Motor.png";
import yamaha from "/public/marcas/Yamaha-logo.png";

const ItemImage = ({ children }) => (
  <img className="w-[10%] object-contain" src={children}></img>
);

const HeroSection = () => {
  return (
    <>
      <div className="">
        <img
          src={banner}
          alt=""
          className="xl:h-[90vh] w-full object-cover pt-[5vh] md:pt-[7vh]"
        />
      </div>
      <div className="bg-[#F0F0F0] flex overflow-hidden flex-row  items-center justify-evenly">
        <ItemImage children={honda}></ItemImage>
        <ItemImage children={bajaj}></ItemImage>
        <ItemImage children={suzuki}></ItemImage>
        <ItemImage children={yamaha}></ItemImage>
      </div>
    </>
  );
};

export default HeroSection;
