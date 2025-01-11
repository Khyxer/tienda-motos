import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const SelectItem = ({ children }) => (
  <select className="outline-none p-2 lg:p-2 border-gray-500 border-2 rounded-lg w-full lg:w-[80%] text-xl text-gray-500 ">
    {children}
  </select>
);

const canalesAtencion = [
  {
    id: 1,
    icono: <CgMail />,
    titulo: "Correo electronico",
    extra: "info@fakemail.com",
  },
  {
    id: 2,
    icono: <IoCallOutline />,
    titulo: "Llamándonos",
    extra: "0123456789",
  },
  {
    id: 3,
    icono: <BsChatSquareText />,
    titulo: "Déjanos tus comentarios",
    extra: "Escribenos",
  },
  {
    id: 4,
    icono: <FaWhatsapp />,
    titulo: "Whatsapp",
    extra: "Escribenos",
  },
];

const PuntosAtencion = () => {
  const position = [51.505, -0.09];

  return (
    <>
      <div className="bg-[#E4E4E4] px-2 py-12  lg:p-20 flex flex-col items-center gap-6 lg:gap-12">
        <h1 className="font-black text-3xl sm:text-5xl ">
          Puntos de <span className="text-[#017CE1]">Atención</span>
        </h1>
        <div className="bg-white p-11 shadow-lg rounded-xl w-[90%] lg:w-[80%] flex flex-col lg:flex-row ">
          <div className="w-full h-48 lg:h-[550px] lg:w-[700px] lg:flex-1 z-40">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>Un marcador en el mapa.</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="flex  items-center justify-center gap-4 lg:gap-8 flex-col lg:flex-1">
            <h1 className="font-black text-sm sm:text-4xl ">
              Filtrar Por <span className="text-[#017CE1]">Categoria</span>
            </h1>
            <SelectItem>
              <option value="opcion1">Tienda</option>
              <option value="opcion2">Axis Motors</option>
              <option value="opcion3">Axis Cars</option>
              <option value="opcion3">Axis Guns</option>
              <option value="opcion3">Axis Lycors</option>
            </SelectItem>
            <SelectItem>
              <option value="opcion1">Departamento</option>
              <option value="opcion2">Antioquia</option>
              <option value="opcion3">Cundinamarca</option>
              <option value="opcion3">Atlántico</option>
              <option value="opcion3">Valle del Cauca</option>
            </SelectItem>
            <SelectItem>
              <option value="opcion1">Ciudad</option>
              <option value="opcion2">Bogotá</option>
              <option value="opcion2">Medellin</option>
              <option value="opcion2">Cali</option>
            </SelectItem>
            <SelectItem>
              <option value="opcion1">Punto</option>
              <option value="opcion2">CLL 99 # 99 - 99</option>
              <option value="opcion3">CLL 99 # 99 - 99</option>
              <option value="opcion3">CLL 99 # 99 - 99</option>
            </SelectItem>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-2 justify-center py-16 gap-14">
        <h1 className="text-lg sm:text-4xl font-medium">¿NECESITAS AYUDA?</h1>
        <p className="lg:w-[40%] text-center text-xl">
          Te ofrecemos múltiples vías de contacto para que puedas resolver todas
          tus dudas y consultas de manera ágil y personalizada. Nuestros
          diversos canales están aquí para brindarte el apoyo que necesitas en
          cualquier momento.
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-evenly w-full ">
          {canalesAtencion.map((canalAtencion) => (
            <div
              key={canalAtencion.id}
              className="text-gray-600 flex flex-col items-center"
            >
              <div className="text-5xl flex items-center justify-center">
                {canalAtencion.icono}
              </div>
              <h1 className="font-semibold text-lg">{canalAtencion.titulo}</h1>
              <p className="text-[#017CE1]">{canalAtencion.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PuntosAtencion;
