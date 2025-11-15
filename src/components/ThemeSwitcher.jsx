import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeSwitch = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="cursor-pointer font-medium hover:font-semibold"
    >
      {theme === "dark" ? (
        <div className="bg-zinc-800 px-4 py-2 rounded-full border border-white flex items-center w-fit hover:shadow-[4px_4px_white,_4px_4px_0_1px_white] transition-all duration-200 ease-linear">
          <span className="mr-3">Lys modus</span>
          <BsSunFill size={24} className="text-white" />
        </div>
      ) : (
        <div className="bg-[#fffefb] px-4 py-2 rounded-full border border-[#2f2f2f] flex items-center w-fit hover:shadow-[4px_4px_#2f2f2f,_4px_4px_0_1px_#2f2f2f] transition-all duration-200 ease-linear">
          <span className="mr-3 ">Mørk modus</span>
          <FaMoon size={24} className="" />
        </div>
      )}
    </button>
  );
};

export default ThemeSwitcher;
