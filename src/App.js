import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

function App() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 h-full w-screen ">
      <Navbar />
      <About />
      <Portfolio />

      <ScrollToTop
        className="flex justify-center items-center   !bg-neutral-900 text-neutral-50 dark:!bg-white dark:text-neutral-900 "
        smooth
        component={<FaArrowUp size={30} />}
      />
    </div>
  );
}

export default App;
