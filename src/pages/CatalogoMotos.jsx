import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import motos from "../data/motos";
import { Card } from "flowbite-react";

const PriceRangeSlider = ({ min = 0, max = 80000000, onChange }) => {
  const [value, setValue] = useState(max / 2);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">
          ${min.toLocaleString()}
        </span>
        <span className="text-sm font-medium text-sky-600">
          ${parseInt(value).toLocaleString()}
        </span>
        <span className="text-sm font-medium text-gray-700">
          ${max.toLocaleString()}
        </span>
      </div>

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
              accent-sky-600
              focus:outline-none focus:ring-2 focus:ring-sky-600/50
              hover:bg-gray-300 transition-colors
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:bg-sky-600
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:transition-all
              [&::-webkit-slider-thumb]:hover:w-5
              [&::-webkit-slider-thumb]:hover:h-5
              [&::-moz-range-thumb]:appearance-none
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:w-4
              [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:bg-sky-600
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:transition-all
              [&::-moz-range-thumb]:hover:w-5
              [&::-moz-range-thumb]:hover:h-5"
        />
      </div>
    </div>
  );
};

const CatalogoMotos = () => {
  return (
    <>
      <Header />
      <div className="flex p-2 pt-[5vh] md:pt-[7vh]">
        <div className="flex w-full">
          <div className=" lg:flex hidden border-r sticky p-4 w-[15%] top-[12vh] h-fit flex-col gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Filtros</h2>
              <h2 className="text-lg font-semibold mb-4">Precio</h2>
              <PriceRangeSlider />{" "}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Marcas</h2>
              {["Honda", "Yamaha", "Kawasaki", "Suzuki", "BMW"].map((index) => (
                <div key={index} className="flex items-center  gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <p className="text-lg">{index}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Cilindraje</h2>
              {["125cc", "250cc", "500cc", "750cc", "1000cc"].map((index) => (
                <div key={index} className="flex items-center  gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <p className="text-lg">{index}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Tipo</h2>
              {["Deportiva", "Adventure", "Urban", "Scooter"].map((index) => (
                <div key={index} className="flex items-center  gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <p className="text-lg">{index}</p>
                </div>
              ))}
            </div>
            <button className="bg-sky-600 text-white hover:bg-sky-700 duration-200  px-4 py-2 rounded-lg ">
              Aplicar Filtros
            </button>
          </div>
          <div className="w-full flex flex-wrap items-center justify-center gap-4 py-8 pt-12">
            {motos.map((moto) => (
              <div className="w-full lg:w-1/3  2xl:w-1/4" key={moto.id}>
                <Card className="max-w-full h-full flex flex-col">
                  <img
                    src={moto.imagen}
                    alt={moto.nombre}
                    className="object-cover h-48 w-full rounded-t-lg"
                  />
                  <div className="flex flex-col p-4 flex-grow gap-4">
                    <div>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                        {moto.nombre}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                        {moto.informacion}
                      </p>
                      <p className="text-lg text-sky-600 font-semibold ">
                        {moto.precio}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <a
                        href={`/moto/${moto.slug}`}
                        className="transition-all duration-200 w-full  hover:bg-sky-600 hover:text-white text-sky-600 border-2 border-sky-600 py-2 px-4 rounded-md items-center justify-center font-semibold flex gap-2 mt-auto"
                      >
                        Ver Detalles
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CatalogoMotos;
