import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";

import { BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

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
      className="bg-neutral-800 p-2 rounded-3xl text-amber-300 "
    >
      {theme === "dark" ? <BsSunFill size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
