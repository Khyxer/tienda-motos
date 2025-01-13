import React, { useState, useEffect } from "react";
import motos from "../data/motos";
import { Card } from "flowbite-react";
import { useSearchParams } from "react-router-dom";

const PriceRangeSlider = ({ min = 0, max = 80000000, value, onChange }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">
          ${min.toLocaleString()}
        </span>
        <span className="text-sm font-medium text-sky-600">
          ${value.toLocaleString()}
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

const FilterMotos = ({ filters, setFilters }) => {
  const marcas = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "BMW"];
  const cilindrajes = ["125cc", "250cc", "500cc", "750cc", "1000cc"];
  const tipos = ["Deportiva", "Adventure", "Urban", "Scooter"];

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [value]: !prev[category][value],
      },
    }));
  };

  const handlePriceChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: value,
    }));
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Filtros</h2>
        <h2 className="text-lg font-semibold mb-4">Precio</h2>
        <PriceRangeSlider
          value={filters.maxPrice}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Marcas</h2>
        {marcas.map((marca) => (
          <div key={marca} className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={filters.marcas[marca] || false}
              onChange={() => handleCheckboxChange("marcas", marca)}
              className="cursor-pointer"
            />
            <p className="text-lg">{marca}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Cilindraje</h2>
        {cilindrajes.map((cilindraje) => (
          <div key={cilindraje} className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={filters.cilindrajes[cilindraje] || false}
              onChange={() => handleCheckboxChange("cilindrajes", cilindraje)}
              className="cursor-pointer"
            />
            <p className="text-lg">{cilindraje}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Tipo</h2>
        {tipos.map((tipo) => (
          <div key={tipo} className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={filters.tipos[tipo] || false}
              onChange={() => handleCheckboxChange("tipos", tipo)}
              className="cursor-pointer"
            />
            <p className="text-lg">{tipo}</p>
          </div>
        ))}
      </div>
    </>
  );
};
const CatalogoMotos = () => {
  const [searchParams] = useSearchParams();
  const tipoFromUrl = searchParams.get("tipo");

  const [filters, setFilters] = useState({
    marcas: {},
    cilindrajes: {},
    tipos: {},
    maxPrice: 80000000,
  });

  useEffect(() => {
    if (tipoFromUrl) {
      setFilters((prev) => ({
        ...prev,
        tipos: {
          ...prev.tipos,
          [tipoFromUrl]: true,
        },
      }));
    }
  }, [tipoFromUrl]);

  const [filteredMotos, setFilteredMotos] = useState(motos);

  useEffect(() => {
    const applyFilters = () => {
      return motos.filter((moto) => {
        const price = parseInt(moto.precio.replace(/[$,]/g, ""));

        if (price > filters.maxPrice) return false;

        const hasSelectedMarcas = Object.values(filters.marcas).some((v) => v);
        if (hasSelectedMarcas && !filters.marcas[moto.marca]) return false;

        const hasSelectedCilindrajes = Object.values(filters.cilindrajes).some(
          (v) => v
        );
        if (hasSelectedCilindrajes && !filters.cilindrajes[moto.cilindraje])
          return false;

        const hasSelectedTipos = Object.values(filters.tipos).some((v) => v);
        if (hasSelectedTipos && !filters.tipos[moto.tipo]) return false;

        return true;
      });
    };

    setFilteredMotos(applyFilters());
  }, [filters]);

  return (
    <>
      <div className="flex p-2">
        <div className="flex w-full">
          <div className="lg:flex hidden border-r sticky p-4 w-[15%] top-[12vh] h-fit flex-col gap-4">
            <FilterMotos filters={filters} setFilters={setFilters} />
          </div>
          <div className="w-full flex flex-wrap items-center justify-center gap-4 py-8 pt-12">
            {filteredMotos.length > 0 ? (
              filteredMotos.map((moto) => (
                <div className="w-full lg:w-1/3 2xl:w-1/4" key={moto.id}>
                  <Card className="max-w-full h-full flex flex-col">
                    <img
                      src={moto.imagen}
                      alt={moto.nombre}
                      className="object-cover h-48 w-full rounded-t-lg"
                    />
                    <div className="flex flex-col p-4 flex-grow gap-4">
                      <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                          {moto.nombre}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                          {moto.informacion}
                        </p>
                        <p className="text-lg text-sky-600 font-semibold">
                          {moto.precio}
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <a
                          href={`/moto/${moto.slug}`}
                          className="transition-all duration-200 w-full hover:bg-sky-600 hover:text-white text-sky-600 border-2 border-sky-600 py-2 px-4 rounded-md items-center justify-center font-semibold flex gap-2 mt-auto"
                        >
                          Ver Detalles
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-12 px-4">
                <div className="text-center space-y-4">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900">
                    No se encontraron motos
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Lo sentimos, no encontramos motos que coincidan con los
                    filtros seleccionados. Intenta ajustar los filtros para ver
                    más resultados.
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        marcas: {},
                        cilindrajes: {},
                        tipos: {},
                        maxPrice: 80000000,
                      })
                    }
                    className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogoMotos;
