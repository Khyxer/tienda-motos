import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import logoMain from "/public/logo-main.svg";
import { Link } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";

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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed w-full z-50">
      <div className="flex px-10 md:p-1 items-center h-[5vh] justify-between md:justify-around sm:h-[7vh] bg-white md:h-[7vh]">
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
                  <a
                    href="/catalogo"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Ver todas
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Deportivas
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Adventure
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Urban
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Scooter
                  </a>
                </div>
              </div>
            )}
          </div>
          <NavItem href={"#"}>FINANCIACIÓN</NavItem>
          <NavItem href={"#"}>SERVICIO AL CLIENTE</NavItem>
          <NavItem href={"/puntos-atencion"}>
            PUNTOS DE ATENCION <FaLocationDot />
          </NavItem>
          <NavItem href={"#"}>
            AXIS MEMBER <MdWorkspacePremium />
          </NavItem>
        </nav>
        <div className="border-2 border-gray-500 rounded-lg overflow-hidden 2xl:flex hidden items-center">
          <FaSearch className="ml-2 cursor-pointer text-gray-600 hover:text-gray-800" />
          <input
            type="text"
            className="outline-none p-1 border-none focus:ring-0 focus:outline-none"
            placeholder="Buscar"
          />
        </div>
        <IoMdMenu className="lg:hidden block text-4xl" />
      </div>
    </div>
  );
};

export default Header;
