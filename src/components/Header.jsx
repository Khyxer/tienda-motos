import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import logoMain from "/public/logo-main.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";
import MenuResponsive from "./MenuResponsive";
import BarraBusqueda from "./BarraBusqueda";
import motos from "../data/motos";

const NavItem = ({ children, href, onMouseEnter, onMouseLeave }) => (
  <a
    className="animation-nav flex items-center gap-1 2xl:text-base text-xs xl:text-sm "
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    href={href}
  >
    {children}
  </a>
);

const Header = () => {
  const [showMenuMotos, setShowMenuMotos] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (tipo) => {
    if (!tipo) {
      navigate("/catalogo");
      return;
    }

    navigate(`/catalogo?tipo=${tipo}`);
    setShowMenuMotos(false);
  };

  const motorcycleCategories = [
    { name: "Ver todas", tipo: "" },
    { name: "Deportivas", tipo: "Deportiva" },
    { name: "Adventure", tipo: "Adventure" },
    { name: "Urban", tipo: "Urban" },
    { name: "Scooter", tipo: "Scooter" },
  ];

  return (
    <div className="fixed w-full z-50">
      <div className="flex px-10 p-2 shadow-md md:p-1 items-center h-[7vh] justify-between xl:justify-evenly sm:h-[7vh] bg-white md:h-[7vh]">
        <Link to="/" className="h-full" onClick={scrollToTop}>
          <img src={logoMain} alt="Logo" className="h-full" />
        </Link>
        <nav className="hidden lg:flex items-center gap-20 justify-center h-full relative">
          <div
            className="relative"
            onMouseEnter={() => setShowMenuMotos(true)}
            onMouseLeave={() => setShowMenuMotos(false)}
          >
            <NavItem href={"/catalogo"}>
              MOTOCICLETAS
              <IoIosArrowDown />
            </NavItem>

            {showMenuMotos && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] debug bg-white shadow-lg rounded-b-lg">
                <div className="absolute w-full h-4 -top-4" />
                <div className="py-2">
                  {motorcycleCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryClick(category.tipo)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavItem href={"/financiacion"}>FINANCIACIÓN</NavItem>
          <NavItem href={"/servicio-cliente"}>SERVICIO AL CLIENTE</NavItem>
          <NavItem href={"/puntos-atencion"}>
            PUNTOS DE ATENCION <FaLocationDot />
          </NavItem>
          <NavItem href={"/axis-member"}>
            AXIS MEMBER <MdWorkspacePremium />
          </NavItem>
        </nav>
        <div className="2xl:flex hidden">
          <BarraBusqueda motos={motos} />
        </div>
        <div className="flex lg:hidden"> 
          <BarraBusqueda motos={motos} />
        </div>

        <MenuResponsive className="lg:hidden block text-4xl" />
      </div>
    </div>
  );
};

export default Header;
