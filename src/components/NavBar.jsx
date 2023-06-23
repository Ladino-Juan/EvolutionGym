import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={
        !nav
          ? "w-full h-[80px] bg-transparent fixed top-0 z-50"
          : "bg-amarillo w-full h-[80px] fixed top-0 z-50"
      }
    >
      <div className="px-2 flex justify-around items-center w-full h-full">
        <Link to="/">
          <img
            className="pt-2 w-[80px] -rotate-[18deg]"
            src="assets/images/evolutionGymLogo.png"
            alt="gimnasio evolution fit logo"
          ></img>
        </Link>
        <div className="hidden md:flex text-white font-roboto">
          <ul className="hidden md:flex">
            <a href="/#nosotros">
              <li className="pr-4 relative group">
                NOSOTROS
                <span className="absolute left-0 bottom-0 w-[90%] h-0.5 bg-amarillo rounded-t transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </li>
            </a>
            <a href="/#servicios">
              <li className="pr-4 relative group">
                SERVICIOS
                <span className="absolute left-0 bottom-0 w-[90%] h-0.5 bg-amarillo rounded-t transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </li>
            </a>
          </ul>
        </div>
        <a href="#contacto">
          <button className="hidden md:flex px-8 py-3 bg-white hover:bg-oscuro text-oscuro font-semibold hover:text-white border border-white hover:border-transparent rounded transition-all duration-300">
            CONTACTO
          </button>
        </a>
        <div className="md:hidden ml-16 text-white" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5" />
          ) : (
            <XIcon className="w-5 text-oscuro" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-amarillo w-full px-8 py-12 rounded-b-xl font-roboto"
        }
      >
        <a href="/#nosotros">
          <li className="pr-4 relative group">
            NOSOTROS
            <span className="absolute left-0 bottom-0 w-[90%] h-0.5 bg-amarillo rounded-t transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </li>
        </a>
        <a href="/#servicios">
          <li className="pr-4 relative group">
            SERVICIOS
            <span className="absolute left-0 bottom-0 w-[90%] h-0.5 bg-amarillo rounded-t transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
