import React, { useState } from "react";
import motos from "../data/motos";

const formatPrice = (value) => {
  if (!value) return "";
  const number = value.replace(/[^\d]/g, "");
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(number);
};

const getNumericValue = (formattedValue) => {
  return parseInt(formattedValue.replace(/[^\d]/g, "")) || 0;
};

const InputItem = ({ texto, tipo, value, onChange, minValue }) => (
  <div className="relative group">
    <input
      className="border-gray-300 rounded-lg w-full p-2"
      type="text"
      required
      value={value}
      onChange={onChange}
      min={minValue}
    />
    <label className="group-focus-within:-translate-y-[20px] select-none group-focus-within:scale-90 bg-white group-[&:has(:valid)]:-translate-y-[20px] group-[&:has(:valid)]:scale-90 absolute top-2 left-1 px-2 pointer-events-none text-gray-500 duration-200">
      {texto}
    </label>
  </div>
);

const LabelItem = ({ value, texto, checked, onChange }) => (
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="opcion"
      value={value}
      className="cursor-pointer"
      defaultChecked={checked}
      onChange={onChange}
    />
    {texto} Meses
  </label>
);

const SearchMoto = ({ onSelect, selectedMoto }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredMotos = motos.filter((moto) =>
    moto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full mb-4">
      <input
        type="text"
        placeholder="Buscar moto..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowDropdown(true);
        }}
        className="w-full p-2 border rounded-lg"
      />
      {showDropdown && searchTerm && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
          {filteredMotos.map((moto) => (
            <div
              key={moto.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(moto);
                setSearchTerm(moto.nombre);
                setShowDropdown(false);
              }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={moto.imagen}
                  alt={moto.nombre}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <p className="font-medium">{moto.nombre}</p>
                  <p className="text-sm text-gray-600">{moto.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Financiacion = () => {
  const [selectedMoto, setSelectedMoto] = useState(null);
  const [salary, setSalary] = useState("");
  const [initialPayment, setInitialPayment] = useState("");
  const [months, setMonths] = useState("3");
  const [simulationResult, setSimulationResult] = useState(null);
  const [error, setError] = useState("");

  const handleSalaryChange = (e) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    setSalary(rawValue ? formatPrice(rawValue) : "");
  };

  const handleInitialPaymentChange = (e) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    setInitialPayment(rawValue ? formatPrice(rawValue) : "");
  };

  const handleMonthsChange = (e) => {
    setMonths(e.target.value);
  };

  const calculateCredit = (e) => {
    e.preventDefault();
    setError("");

    const numericSalary = getNumericValue(salary);
    const numericInitialPayment = getNumericValue(initialPayment);
    const motoPrice = selectedMoto
      ? parseInt(selectedMoto.precio.replace(/[^\d]/g, ""))
      : 0;

    if (!selectedMoto) {
      setError("Por favor selecciona una moto");
      return;
    }

    if (numericSalary < 1300000) {
      setError("Los ingresos mensuales deben ser al menos $1.300.000");
      return;
    }

    if (numericInitialPayment < motoPrice * 0.1) {
      setError(
        "La cuota inicial debe ser al menos el 10% del valor de la moto"
      );
      return;
    }

    const loanAmount = motoPrice - numericInitialPayment;
    const interestRate = 0.015;
    const monthlyInterest = loanAmount * interestRate;
    const monthlyPayment = loanAmount / parseInt(months) + monthlyInterest;
    const totalPayment = monthlyPayment * parseInt(months);

    setSimulationResult({
      monthlyPayment: formatPrice(Math.round(monthlyPayment).toString()),
      totalPayment: formatPrice(Math.round(totalPayment).toString()),
      loanAmount: formatPrice(loanAmount.toString()),
      months: months,
      interestRate: "1.5%",
    });
  };

  return (
    <>
      <div className="flex py-16 justify-center flex-col gap-8 ">
        <h1 className="font-black text-2xl pb-8 sm:text-4xl text-center">
          Simula tu <span className="text-[#017CE1]">Crédito</span>
        </h1>
        <div className="flex xl:justify-evenly flex-col xl:flex-row items-center justify-center">
          <form
            className="flex flex-col gap-5 xl:w-[30%]"
            onSubmit={calculateCredit}
          >
            <SearchMoto
              onSelect={setSelectedMoto}
              selectedMoto={selectedMoto}
            />
            <InputItem
              tipo="text"
              texto="Ingresos mensuales"
              value={salary}
              onChange={handleSalaryChange}
              minValue={1300000}
            />
            <div className="flex flex-col gap-3">
              <p>¿En cuántos meses planeas pagarla?</p>
              <LabelItem
                value="3"
                texto="3"
                checked={months === "3"}
                onChange={handleMonthsChange}
              />
              <LabelItem
                value="6"
                texto="6"
                checked={months === "6"}
                onChange={handleMonthsChange}
              />
              <LabelItem
                value="12"
                texto="12"
                checked={months === "12"}
                onChange={handleMonthsChange}
              />
              <LabelItem
                value="24"
                texto="24"
                checked={months === "24"}
                onChange={handleMonthsChange}
              />
            </div>
            <InputItem
              tipo="text"
              texto="Cuota inicial"
              value={initialPayment}
              onChange={handleInitialPaymentChange}
            />
            {error && (
              <p className="text-red-500 text-lg font-medium">{error}</p>
            )}
            <button className="px-6 py-2 font-medium text-lg bg-blue-600 border-2 border-blue-600 hover:bg-white hover:text-blue-600 duration-200 text-white rounded-full">
              Simular crédito
            </button>
          </form>
          <div className="xl:w-[40%] h-[50vh] flex justify-center items-center">
            {selectedMoto && (
              <img
                src={selectedMoto.imagen}
                alt={selectedMoto.nombre}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="xl:w-[25%]">
            {selectedMoto && (
              <div className="mb-6">
                <h2 className="font-bold text-xl mb-2">Detalles de la moto</h2>
                <p>Modelo: {selectedMoto.nombre}</p>
                <p>Precio: {selectedMoto.precio}</p>
                <p>Marca: {selectedMoto.marca}</p>
                <p>Cilindraje: {selectedMoto.cilindraje}</p>
              </div>
            )}
            {simulationResult && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h2 className="font-bold text-xl mb-2">
                  Resultado de la simulación
                </h2>
                <p>Monto del préstamo: {simulationResult.loanAmount}</p>
                <p>Plazo: {simulationResult.months} meses</p>
                <p>Tasa de interés mensual: {simulationResult.interestRate}</p>
                <p className="font-bold mt-2">
                  Cuota mensual: {simulationResult.monthlyPayment}
                </p>
                <p className="font-bold">
                  Total a pagar: {simulationResult.totalPayment}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Financiacion;
