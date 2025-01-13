import React from "react";

const TerminosCondiciones = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 justify-center items-center ">
        <div className="xl:w-[50%] w-full text-xl bg-white p-8 rounded-lg grid gap-5">
          <p className="">
            Esta pagina web es completamente falsa la mayor parte del material
            grafico (imagenes promocionales, fotos de motos, videos, fotos de
            productos, fotos de puntos de venta fisicos) es tomado de otros
            sitios, creditos totales a sus creadores originales, en ningun
            momento se intenta vender un producto o hacer creer que la web vende
            productos reales, esta web no tiene como proposito generar ingresor
            a base el material de otros ni realizar engaños o estafas, es solo
            para practicar y aprender sobre el desarrollo web entre otras
            tecnologias.
          </p>

          <a href="/" className="text-sky-600">
            volver al inicio
          </a>
        </div>
      </div>
    </>
  );
};

export default TerminosCondiciones;
