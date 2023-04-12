import React from "react";
import { SiStarship } from "react-icons/si";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="z-10 flex justify-between items-center h-24 max-w-[1140px] mx-auto text-dark dark:text-white sticky top-0 ">
      <div className="items-center w-full text-3xl font-bold text-[#202020] dark:text-amber-300">
        <h1 className="font-robotoserif font-black text-3xl dark:text-amber-300 text-[#202020]">
          <Link
            className="flex items-center w-full text-3xl font-black text-[#202020] dark:text-amber-300"
            to="home"
            offset={-96}
            smooth={true}
            duration={500}
          >
            <SiStarship className="mr-4" size={50} />
            DANIEL.
          </Link>
        </h1>
      </div>

      <ul className="flex">
        <li className="p-4">
          <Link to="home" offset={-96} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="portfolio" offset={-96} smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>

      <div className="">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
