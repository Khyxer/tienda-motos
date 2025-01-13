import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardMember from "../components/CardMember";
import { Slide } from "react-awesome-reveal";

const basic = [
  "5% OFF",
  "Pruebas de manejo gratis",
  "Asesor privado",
  "Notificaciones exclusivas",
  "Acceso a promociones especiales",
];
const client = [
  "20% OFF",
  "Pruebas de manejo gratis",
  "Asesor privado",
  "Notificaciones exclusivas",
  "Prioridad en disponibilidad de vehículos",
];
const vip = [
  "50% OFF",
  "Pruebas de manejo gratis",
  "Asesor privado",
  "Servicio de atención al cliente personalizado",
  "Acceso anticipado a nuevos modelos y eventos especiales",
  "Invitaciones a eventos privados y lanzamientos",
  "Acceso a un lounge VIP en el concesionario",
];

const AxisMember = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <div className="xl:px-16 py-16 flex flex-col gap-4 items-center">
          <h1 className="text-5xl font-semibold">
            Axis <span className="text-sky-600">Member</span>
          </h1>
          <p className="lg:text-2xl text-lg">
            Conviertete en un miembro de Axis Motors
          </p>
          <div className="lg:flex-row gap-4 flex flex-col items-center justify-center">
            <Slide>
              <CardMember
                plan={"Plan Basico"}
                precio={"99.000"}
                beneficios={basic}
              />
            </Slide>
            <Slide direction="up">
              <CardMember
                plan={"Plan VIP"}
                precio={"199.000"}
                beneficios={vip}
              />
            </Slide>
            <Slide direction="right">
              <CardMember
                plan={"Plan Cliente"}
                precio={"150.000"}
                beneficios={client}
              />
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default AxisMember;
