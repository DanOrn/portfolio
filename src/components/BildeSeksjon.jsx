import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

function BildeSeksjon() {
  return (
    <section className="flex justify-center items-center gap-28  w-screen   max-h-[800px] overflow-hidden bg-[#FFDE92]  ">
      <div className="rotate-30 pb-52">
        <img src={image6} alt="varsling" className="w-96 h-auto pb-8" />
        <img src={image2} alt="onboarding1" className="w-96 h-auto" />
      </div>
      <div className="rotate-30 pb-96">
        <img src={image3} alt="kartmedpins" className="w-96 h-auto pb-8" />
        <img src={image4} alt="parkeringsinfo" className="w-96 h-auto pb-12" />
      </div>
      <div className="rotate-30 pt-72">
        <img
          src={image5}
          alt="startparkering"
          className="w-96 h-auto pt-20 pb-8"
        />
        <img src={image1} alt="registrer" className="w-96 h-auto " />
      </div>
      <div className="rotate-30 pt-12 ">
        <img src={image8} alt="kvittering" className="w-96 h-auto pb-8" />
        <img src={image7} alt="menu" className="w-96 h-auto" />
      </div>
    </section>
  );
}

export default BildeSeksjon;
