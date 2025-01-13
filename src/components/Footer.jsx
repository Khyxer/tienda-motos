import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import PuntosAtencion from "./PuntosAtencion";

const infoFooter = [
  {
    id: 1,
    title: "SEGUROS AXIS",
    links: [
      "Campañas",
      "Axis Order Academy",
      "Mantenimiento",
      "Tips de manejo",
      "Clubs Axis",
    ],
  },
  {
    id: 2,
    title: "CORPORATIVO",
    links: [
      "Axis Motors",
      "Trabaja con nosotros",
      "Garantias",
      "Distribuidores",
      "Axis Motors Global",
      "Gestión Integral",
      "Estilo unico Axis",
    ],
  },
  {
    id: 3,
    title: "SERVICIOS AXIS",
    links: [
      "Moto+",
      "Axis Seguros",
      "Aliados Comerciales",
      "Cátalogo de Despecie",
      "Puntos de Atención",
      "Agendamiento de Citas",
      "Comprador Axis",
      "Axis Servicios Financieros",
    ],
  },
  {
    id: 4,
    title: "SERVICIO AL CLIENTE",
    links: [
      "Agendamiento",
      "Contáctenos",
      "Linea de Transparencia",
      "Fácturación electronica",
      "Manual",
      "Codigo de ética",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <PuntosAtencion />
      <div className="flex flex-col xl:flex-row py-10 justify-center items-center  bg-[#232323] ">
        <div className="xl:max-w-[35%] flex flex-col gap-3 px-2">
          <h1 className="text-4xl font-medium text-[#017CE1]">CONTACTANOS</h1>
          <p className="text-[#D9D9D9] text-xl">
            Deja tu información junto con tu nombre y nos pondremos en contacto
            contigo lo mas pronto posible.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-14 xl:w-[40%] ">
          <div className="flex flex-col gap-2 w-[60%]">
            <input
              type="text"
              placeholder="Correo"
              className="py-2 px-3 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="Nombre"
              className="py-2 px-3 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 text-white items-center ">
              <input type="checkbox" />
              <p>
                Acepto los{" "}
                <span className="text-[#017CE1] cursor-pointer hover:underline">
                  Terminos y Condiciones
                </span>{" "}
                de uso de datos
              </p>
            </div>
            <button className="bg-[#017CE1] text-white px-5 py-1 rounded-full text-lg hover:bg-[#014fe1] duration-300">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1C1C1C] p-10 pb-0">
        <div>
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-36 justify-center ">
            {infoFooter.map((info) => (
              <div key={info.id}>
                <h1 className=" font-medium text-[#f3f3f3]">{info.title}</h1>
                {info.links.map((link, index) => (
                  <p
                    key={index}
                    className="cursor-pointer text-[#797979] hover:text-[#b8b8b8]"
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className=" flex items-end text-white text-lg flex-col p-2 border-b border-[#636363]">
          <p>Linea de atención al cliente</p>
          <p className="text-5xl font-semibold text-[#017CE1]">0123456789</p>
          <p>{"email100%real@fakemail.com"}</p>
        </div>
        <div className="p-4 flex flex-col gap-4 xl:flex-row justify-evenly items-center">
          <p className="text-[#cfcfcf] xl:w-[60%]">
            Axis Motors es una división de Axis Order y no se hace responsable
            por plagio, estafa, crimen de guerra, trafico ilegal de brownies
            magicos o cualquier otra demanda. Para mas información <span className="text-sky-600 font-semibold">(información real)</span> consulte los
            <a
              href="/tyc"
              className="text-[#017CE1] cursor-pointer hover:underline font-medium"
            >
              {" "}
              Terminos y Condiciones
            </a>
          </p>
          <div className="flex text-4xl gap-5 text-[#cfcfcf]">
            <FaSquareXTwitter className="cursor-pointer rounded duration-200 hover:text-[#000000]" />
            <FaFacebook className="cursor-pointer rounded duration-200 hover:text-[#4550ee]" />
            <FaYoutube className="cursor-pointer rounded duration-200 hover:text-[#ff1919ee]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
