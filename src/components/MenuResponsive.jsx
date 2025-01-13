import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const NavItem = ({ children, href, handleOpenMenu }) => (
  <a
    className=" flex items-center gap-1 text-sm"
    href={href}
    onClick={handleOpenMenu}
  >
    {children}
  </a>
);

const MenuResponsive = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    if (openMenu == false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  }

  return (
    <>
      <div className="relative lg:hidden ">
        <div>
          <IoMdMenu className="text-4xl" onClick={handleOpenMenu} />
        </div>
        {openMenu ? (
          <div className="flex flex-col absolute w-[50vh] -top-3 bg-white shadow-md items-end py-4 px-8   -right-10 justify-end gap-8">
            <IoMdClose className="text-4xl" onClick={handleOpenMenu} />
            <NavItem href={"/"}>INICIO</NavItem>
            <NavItem href={"/catalogo"}>MOTOCICLETAS</NavItem>
            <NavItem href={"/financiacion"}>FINANCIACIÓN</NavItem>
            <NavItem href={"/servicio-cliente"}>SERVICIO AL CLIENTE</NavItem>
            <NavItem href={"/puntos-atencion"}>PUNTOS DE ATENCIÓN</NavItem>
            <NavItem href={"/axis-member"}>AXIS MEMBER</NavItem>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default MenuResponsive;
