import React from "react";
import FinnBestilling from "../assets/prosjektbilder/finnbestilling.png";
import Klartilbestilling from "../assets/klartilbestilling.png";
import EnSak from "../assets/prosjektbilder/innepåensak.png";
import Retur from "../assets/returnering.png";

function BildeSeksjonSkil() {
  return (
    <section className="flex justify-center items-center lg:gap-24 gap-8 w-screen lg:h-[600px] overflow-hidden bg-[#92d9ff]">
      <div className="rotate-[30deg] lg:pb-96">
        <img
          src={Klartilbestilling}
          alt="onboarding1"
          className="w-auto h-auto"
        />
        <img
          src={EnSak}
          alt="startparkering"
          className="w-auto h-auto  lg:pb-8"
        />
        <img src={Retur} alt="varsling" className="w-auto h-auto " />
      </div>

      <div className="rotate-[30deg] lg:pb-80">
        <img src={EnSak} alt="parkeringsinfo" className="w-auto h-auto" />
        <img src={FinnBestilling} alt="kartmedpins" className="w-auto h-auto" />
        <img
          src={Klartilbestilling}
          alt="registrer"
          className="w-auto h-auto"
        />
      </div>

      <div className="rotate-[30deg] lg:pt-72"></div>
    </section>
  );
}

export default BildeSeksjonSkil;
