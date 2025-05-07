import React, { useState, useEffect } from "react";
import { SiStarship } from "react-icons/si";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollPosition && currentScrollPos > 100) {
        // Scroller nedover og forbi 100px
        setIsVisible(false);
      } else if (currentScrollPos < scrollPosition) {
        // Scroller oppover
        setIsVisible(true);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav
      className={`z-10 fixed top-0 left-0 w-full  bg-neutral-50 dark:bg-neutral-900 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-label="Hovednavigasjon"
    >
      <div className="h-24 max-w-[1140px] mx-auto flex justify-between items-center text-dark dark:text-white">
        <div className="text-3xl font-bold dark:text-amber-300">
          <h1 className="font-robotoserif font-black text-3xl dark:text-amber-300 text-[#202020]">
            <Link
              className="flex items-center text-3xl font-black text-neutral-800 dark:text-[#F9C66B] no-underline"
              to="/"
            >
              <SiStarship className="mr-4" size={50} />
              DANIEL.
            </Link>
          </h1>
        </div>

        <ul className="flex items-center">
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;