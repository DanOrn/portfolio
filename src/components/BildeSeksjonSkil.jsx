import React from 'react';
import FinnBestilling from "../assets/finnbestilling.png";
import Klartilbestilling from "../assets/klartilbestilling.png";
import EnSak from "../assets/ensak.png";
import Retur from "../assets/returnering.png";

function BildeSeksjonSkil() {
  return (
<section className="flex justify-center items-center gap-24 w-screen h-[800px] overflow-hidden bg-[#D1F9FF]">
  <div className="rotate-[30deg] pb-96">
    
    <img src={Klartilbestilling} alt="onboarding1" className="w-[2000px] h-auto" />
    <img src={EnSak} alt="startparkering" className="w-[2000px] h-auto  pb-8" />
    <img src={Retur} alt="varsling" className="w-[2000px] h-auto " />
   
  </div>

  <div className="rotate-[30deg] pb-80">
   
    <img src={EnSak} alt="parkeringsinfo" className="w-[2000px] h-auto" />
    <img src={FinnBestilling} alt="kartmedpins" className="w-[2000px] h-auto" />
    <img src={Klartilbestilling} alt="registrer" className="w-[2000px] h-auto" />
  </div>

  <div className="rotate-[30deg] pt-72">


  </div>
</section>

  );
}

export default BildeSeksjonSkil;