import React from "react";

const Promocion = () => {
  return (
    <>
      <div className=" relative">
        <img className="w-full " src="/promocion.svg" alt="" />
        <button className="outline-none 2xl:px-4 2xl:py-2 px-2 py-1 absolute text-[1vh] md:text-base xl:text-2xl bg-[#017CE1] text-white transition-all duration-300 hover:bg-[#013de1] hover:scale-105 rounded-full top-1/2 -right-10 transform -translate-x-1/2">
          COMPRAR AHORA
        </button>
      </div>
    </>
  );
};

export default Promocion;
