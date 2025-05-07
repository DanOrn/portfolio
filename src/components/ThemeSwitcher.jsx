import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className=" cursor-pointer"
    >
      {theme === "dark" ? (
        <>
          <div className="flex justify-center items-center bg-neutral-800   text-gray-100 py-2  px-4 rounded-3xl w-40">
            <span className="mr-3">Lys modus</span>
            <BsSunFill size={24} className="text-[#F9C66B]"/>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center bg-gray-200 text-gray-800 py-2  px-4 rounded-3xl w-40">
            <span className="mr-3  font-medium ">Mørk modus</span>
            <FaMoon size={20} className="" />
          </div>
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;