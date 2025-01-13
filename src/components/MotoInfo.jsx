import React from "react";
import motos from "../data/motos";

const InfoItem = ({ icono, titulo, datos }) => (
  <div className="flex items-center gap-5">
    <img src={icono} alt="" />
    <div className="text-2xl text-white font-medium">
      <p>{titulo}</p>
      <p>{datos}</p>
    </div>
  </div>
);

const MotoInfo = () => {
  const motoSeleccionada = motos.find((moto) => moto.id === 1);

  return (
    <>
      <div className="flex 2xl:flex-row flex-col items-center justify-center mt-20 p-2 md:gap-32">
        <div className="flex flex-col gap-6 items-center">
          <p
            className="xl:text-8xl text-7xl font-semibold text-[#017CE1]"
            style={{ fontFamily: "Archivo Black" }}
          >
            {motoSeleccionada.nombre}
          </p>
          <div className="flex flex-row gap-8">
            {motoSeleccionada.colores.map((color) => (
              <div
                className="w-14 h-14 rounded-full"
                style={{ backgroundColor: color.color }}
                key={color.colorId}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <img src={motoSeleccionada.imagen} alt="" className="w-100%" />
        </div>
        <div className="flex flex-col gap-8">
          <p
            className="text-6xl text-[#017CE1]"
            style={{ fontFamily: "Archivo Black" }}
          >
            {motoSeleccionada.precio}
          </p>
          <div className="flex justify-evenly font-semibold">
            <a href="/financiacion">
              <button
                className=" animation-ease-in-out outline-none px-4 py-2 border-black border-2 rounded-full"
                style={{ "--bg-color": "black" }}
              >
                COTIZAR
              </button>
            </a>
            <a href="/servicio-cliente">
              <button className="outline-none px-4 animation-ease-in py-2  border-[#017CE1] text-white  transition-all duration-300 border-2 rounded-full">
                AGENDAR CITA
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden 2xl:flex justify-evenly bg-[#222222] p-8 ">
        <InfoItem
          icono={"/icons/cilindraje.png"}
          titulo={"Cilindraje"}
          datos={"155 cc"}
        />
        <InfoItem
          icono={"/icons/potencia.png"}
          titulo={"Potencia"}
          datos={"155 cc"}
        />
        <InfoItem
          icono={"/icons/batery.png"}
          titulo={"Bateria"}
          datos={"155 cc"}
        />
      </div>
      <div className="p-8 mb-16 flex justify-center">
        <a href="/moto/mt15">
          <button
            className=" animation-ease-in-out outline-none px-4 py-2 text-[#017CE1] font-semibold border-[#017CE1] border-2 rounded-full"
            style={{ "--bg-color": "#017CE1" }}
          >
            VER MAS DETALLES
          </button>
        </a>
      </div>
    </>
  );
};

export default MotoInfo;
