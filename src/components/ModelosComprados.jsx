import React from "react";
import CarruselMotos from "./CarruselMotos";

const ModelosComprados = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center my-20 gap-16">
        <h1 className="font-black text-3xl sm:text-5xl text-center ">
          Modelos Mas <span className="text-[#017CE1]">Comprados</span>
        </h1>
        <CarruselMotos />
      </div>
    </>
  );
};

export default ModelosComprados;
