import React from "react";
import PortfolioSection from "../components/Portfolio";
import AboutSection from "../components/About";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div id="about" name="about" className="  text-neutral-800 dark:text-white  ">
      <div className="mt-[-4rem] max-w-[1140px] mx-auto ">
        <Navbar />
        <AboutSection />
        <PortfolioSection />  
      </div>
    </div>
    
    
  );
};

export default Index;
