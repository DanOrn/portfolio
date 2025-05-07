import React from 'react';
import FinnBestilling from "../assets/finnbestilling.png";

function BildeSeksjonSkil() {
  return (
      <section className="flex justify-center items-center gap-28  w-screen   h-[800px] overflow-hidden bg-[#D1F9FF]  ">

        <div className=''>
        <img src={FinnBestilling} alt="kvittering" className="w-4xl h-auto pb-8" />
        </div>


      </section>
  );
}

export default BildeSeksjonSkil;