import React from "react";
import Arbeid from "../components/Arbeid";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div id="about" name="about" className="  dark:text-white  ">
      <div className="max-w-[1140px] mx-auto">
        <Navbar />
        <Header />
        <Arbeid />

        <Footer />
      </div>
    </div>
  );
};

export default Index;
