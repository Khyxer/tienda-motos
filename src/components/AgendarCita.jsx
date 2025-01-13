import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { FaMoneyCheck, FaRegCircleCheck } from "react-icons/fa6";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const servicios = [
  {
    id: 1,
    icono: <HiMiniWrenchScrewdriver />,
    nombre: "Cita servicio tecnico",
  },
  {
    id: 2,
    icono: <GiFullMotorcycleHelmet />,
    nombre: "Prueba de manejo",
    informacion: "",
  },
  {
    id: 3,
    icono: <FaMoneyCheck />,
    nombre: "Simular credito",
    informacion: "",
  },
];

const AgendarCita = () => {
  const position = [51.505, -2.09];

  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  return (
    <>
      <h1 className="font-black text-2xl pb-8 sm:text-4xl text-center ">
        Modelos Mas <span className="text-[#017CE1]">Comprados</span>
      </h1>
      <div className=" gap-16   flex flex-col items-center justify-center">
        <div className=" gap-8 flex items-center justify-center flex-col">
          <h2 className="text-3xl text-gray-700  font-medium">
            1. SELECCIONA EL TIPO DE SERVICIO
          </h2>

          <div className="flex gap-7">
            {servicios.map((servicio) => {
              const isSelected = servicioSeleccionado === servicio.id;

              return (
                <div
                  key={servicio.id}
                  onClick={() => setServicioSeleccionado(servicio.id)}
                  className={`
                    border-2  font-semibold flex py-3 px-7 gap-2 shadow-md items-center 
                    select-none cursor-pointer rounded-full scale-95 
                    hover:scale-100 duration-150
                    ${
                      isSelected
                        ? "border-[#00ad1f] text-[#00ad1f] scale-100"
                        : "border-gray-600 text-gray-600"
                    }
                  `}
                >
                  <FaRegCircleCheck className="text-xl" />
                  <p className="text-lg">{servicio.nombre}</p>
                  <div className="text-xl">{servicio.icono}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid gap-8">
          <h2 className="text-3xl text-gray-700 font-medium text-center">
            2. SELECCIONA LA TIENDA EN EL MAPA
          </h2>
          <div className=" flex z-20">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendarCita;
