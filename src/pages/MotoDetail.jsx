import React from "react";
import motos from "../data/motos";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import banner from "../assets/img/banner-mt10sp.png";
import { InfoMotoMenu } from "../components/InfoMotoMenu";
import info from "/public/info.svg";
import PuntosAtencion from "../components/PuntosAtencion";
import TiendaAxis from "../components/TiendaAxis";

const MotoDetail = () => {
  const { nombre } = useParams();
  const moto = motos.find((moto) => moto.slug === nombre);

  if (!moto) {
    return (
      <div>
        <h1>Moto no encontrada</h1>
        <a href="/" className="text-blue-700 hover:underline">
          volver
        </a>
      </div>
    );
  }

  return (
    <>
      <div>
        <img src={banner} alt="" className="xl:h-[90vh] w-full object-cover" />
        <div className="bg-[#F0F0F0] w-full flex items-center justify-center">
          <img src={info} alt="" />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center  xl:h-[80vh] pt-[8vh] md:pt-[10vh] p-2 xl:p-11">
        <div className="xl:w-[55%]  flex items-center  flex-col xl:flex-row ">
          <div className="flex xl:flex-col gap-5  ">
            {moto.colores.map((color) => (
              <div
                className="xl:w-14 xl:h-14 w-10 h-10 rounded-full"
                style={{ backgroundColor: color.color }}
                key={color.colorId}
              ></div>
            ))}
          </div>
          <img src={moto.imagen} alt="" className=" " />
        </div>
        <div className="xl:w-[40%]  h-full w-full p-3 ">
          <div className="flex flex-col items-center justify-center xl:justify-start  h-full xl:items-start gap-8">
            <div>
              <p
                className="xl:text-6xl text-5xl font-semibold  text-[#017CE1]"
                style={{ fontFamily: "Archivo Black" }}
              >
                {moto.nombre}
              </p>
              <p className="xl:text-4xl text-3xl font-semibold">
                {moto.precio}
              </p>
            </div>
            <div className="w-full xl:w-[80%]">
              <InfoMotoMenu />
            </div>
            <div className="flex justify-evenly font-semibold gap-5">
              <a href="/financiacion">
                <button
                  className=" animation-ease-in-out outline-none px-4 py-2 border-black border-2 rounded-full"
                  style={{ "--bg-color": "black" }}
                >
                  COTIZAR
                </button>
              </a>
              <a href="/servicio-cliente">
                <button className="outline-none px-4  py-2  border-[#017CE1] text-white hover:text-[#017CE1] bg-[#017CE1] hover:bg-white duration-300 border-2 rounded-full">
                  AGENDAR CITA
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:p-28 px-2 py-28 flex items-center justify-center">
        <video src="/videos/video-promo.mp4" autoPlay loop muted>
          Tu navegador no soporta la visualización de videos
        </video>
      </div>
      <TiendaAxis />
    </>
  );
};

export default MotoDetail;
