import React from "react";
import { Link } from "react-scroll";

const AboutSection = () => {
  return (
      <div className="mt-24 flex h-screen justify-center items-center sm:p-2">
        <div>
        <h1 className="text-4xl font-robotoserif font-bold pb-8">
            Hei, mitt navn er Daniel! &#128075;
          </h1>
          <p className="font-robotoserif text-2xl">
            Jeg er en <strong className="font-bold">engasjert</strong> designer med solid kompetanse innen UX/UI-design og god frontend-forståelse.


            <br></br>Min drivkraft er å utvikle meningsfulle løsninger som er <strong className="font-bold">strategisk forankret, brukervennlige</strong> og<br></br> <strong className="font-bold">teknisk realiserbare.</strong>
          </p>
          <p className="mt-6">
          I min nåværende stilling hos Bymiljøetaten i Oslo kommune har jeg ansvaret for designprosesser og leverer design for tre ulike team. 
          Gjennom tett samarbeid med interne saksbehandlere, eksterne entreprenører og innbyggere sikrer jeg at våre digitale løsninger er brukervennlige og treffsikre.
             </p>

          <div className="flex max-w-[230px] justify-between mt-4 font-robotoserif text-lg  text-white dark:text-[#202020] ">
            <Link className="mt-4 cursor-pointer bg-[#FFE7BC] hover:bg-[#F9C66B]  text-neutral-900 font-bold py-2 px-4 border-4 border-[#F9C66B] " to="portfolio" offset={-48} smooth={true} duration={500}>
            Se utvalgte prosjekter

            </Link>
          </div>
        </div>
          

    </div>
        

    
    
  );
};

export default AboutSection;
