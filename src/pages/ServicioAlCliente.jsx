import { HR } from "flowbite-react";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AgendarCita from "../components/AgendarCita";

const InputItem = ({ texto, tipo }) => (
  <div className="relative group">
    <input
      className="border-gray-300 rounded-lg w-full"
      type={tipo}
      required
    ></input>
    <label className=" group-focus-within:-translate-y-[20px] select-none group-focus-within:scale-90 bg-white group-[&:has(:valid)]:-translate-y-[20px] group-[&:has(:valid)]:scale-90 absolute top-2 left-1 px-2 pointer-events-none text-gray-500 duration-200 ">
      {texto}
    </label>
  </div>
);

const ServicioAlCliente = () => {
  return (
    <>
      <div className="p-16 flex justify-center items-center flex-col">
        <AgendarCita />
      </div>

      <div className="bg-gray-100 py-16 px-6  flex items-center justify-center flex-col">
        <h1 className="text-3xl font-semibold pb-8">CONTACTO</h1>
        <div className="bg-white p-8 rounded-lg xl:w-[50%] w-full">
          <form>
            <div className="flex gap-4 text-sm lg:text-xl">
              <label className="flex items-center justify-center gap-2 ">
                <input
                  type="radio"
                  name="opcion"
                  value="opcion1"
                  className="cursor-pointer"
                />
                Soy cliente Axis
              </label>
              |
              <label className="flex items-center justify-center gap-2">
                <input
                  type="radio"
                  name="opcion"
                  value="opcion2"
                  className=" cursor-pointer"
                />
                No soy cliente Axis
              </label>
            </div>
            <HR.Trimmed className="w-full bg-gray-200 h-[1px] my-4" />
            <div className="grid gap-3">
              <h2 className="text-xl">Datos Personales</h2>
              <div className="parent grid-cols-6 grid-rows-2 gap-3 md:grid hidden">
                <div className="div1 col-span-3 row-span-1">
                  <InputItem tipo={"text"} texto={"Nombre"} />
                </div>
                <div className="div2 col-span-3 col-start-4 row-span-1">
                  <InputItem tipo={"text"} texto={"Apellido"} />
                </div>
                <div className="div3 col-span-2 row-start-2 row-span-1">
                  <InputItem tipo={"number"} texto={"Documento"} />
                </div>
                <div className="div4 col-span-2 col-start-3 row-start-2 row-span-1">
                  <InputItem tipo={"number"} texto={"Celular"} />
                </div>
                <div className="div5 col-span-2 col-start-5 row-start-2 row-span-1">
                  <InputItem tipo={"text"} texto={"E-mail"} />
                </div>
              </div>
              <div className="md:hidden grid gap-3">
                <InputItem tipo={"text"} texto={"Nombre"} />
                <InputItem tipo={"text"} texto={"Apellido"} />
                <InputItem tipo={"number"} texto={"Documento"} />
                <InputItem tipo={"number"} texto={"Celular"} />
                <InputItem tipo={"text"} texto={"E-mail"} />
              </div>
            </div>
            <HR.Trimmed className="w-full bg-gray-200 h-[1px] my-4" />
            <div className="grid gap-3">
              <div className="grid gap-3">
                <h2 className="text-xl">Vehículo</h2>
                <div className="grid-cols-3 grid-rows-4 gap-3 md:grid hidden">
                  <div className="col-span-1 row-span-1">
                    <InputItem tipo={"text"} texto={"Departamento"} />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <InputItem tipo={"text"} texto={"Ciudad"} />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <InputItem tipo={"text"} texto={"Tienda"} />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <InputItem tipo={"text"} texto={"Modelo"} />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <InputItem tipo={"number"} texto={"Año modelo"} />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <InputItem tipo={"number"} texto={"Numero de Motor"} />
                  </div>
                  <div className="col-span-1 row-span-1">
                    <InputItem tipo={"text"} texto={"Placa"} />
                  </div>
                </div>
              </div>
              <div className="md:hidden grid gap-3">
                <InputItem tipo={"text"} texto={"Departamento"} />
                <InputItem tipo={"text"} texto={"Ciudad"} />
                <InputItem tipo={"text"} texto={"Tienda"} />
                <InputItem tipo={"text"} texto={"Modelo"} />
                <InputItem tipo={"number"} texto={"Año modelo"} />
                <InputItem tipo={"number"} texto={"Numero de Motor"} />
                <InputItem tipo={"text"} texto={"Placa"} />
                <textarea
                  placeholder="Comentario.."
                  rows="5"
                  className="border-gray-300 rounded-lg w-full"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between pt-4 lg:flex-row flex-col gap-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p>
                  Acepto los
                  <span className="text-sky-600 hover:underline cursor-pointer">
                    {" "}
                    terminos de uso y tratamiento de datos{" "}
                  </span>
                </p>
              </div>
              <button className="bg-sky-500 text-white font-semibold px-8 py-2 rounded-full hover:bg-sky-600 duration-150 text-xl">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServicioAlCliente;
