import Phoenix from "../assets/twemoji/1F426.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 z-50 backdrop-blur-[2px] py-8 px-6">
      <nav className="flex items-center justify-between mx-auto xl:max-w-[1280px]">
        <Link
          to="/"
          className="flex items-center text-3xl font-black dark:text-white no-underline"
        >
          <img src={Phoenix} alt="Phoenix emoji" className="h-10 w-10 mr-4" />
          daniel ørnevik.
        </Link>

        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Navbar;
