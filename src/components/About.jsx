import React from "react";
import Lottie from "react-lottie-player";
import Whale1 from "../assets/kjorendebil.json";
import { Link } from "react-scroll";

const about = () => {
  return (
    <div name="home" className="  text-[#202020] dark:text-white  ">
      <div className="z-1 mt-[-4rem] max-w-[1140px] mx-auto ">
        <div className=" z-0 top-[-40rem] right-[-10rem] opacity-50">
          <Lottie
            loop
            animationData={Whale1}
            speed={0.8}
            play
            style={{ width: 1125, height: 168 }}
          />
        </div>
        <div className=" p-4 ">
          <h1 className="text-4xl font-robotoserif font-bold pb-8">
            Hei, mitt navn er Daniel! &#128075;
          </h1>
          <p className="font-robotoserif text-2xl">
            Jeg er en <span className="font-bold">engasjert </span>
            interaksjonsdesign-student med solide UI & UX egenskaper &#129668;
            <br />
            &#128293; Brenner for å lage løsninger som er
            <span className="font-bold"> meningsfulle</span> for
            <span className="underline"> sluttbrukere og bedrifter! </span>
          </p>
          <p className="mt-6">
            Jobber for tiden med bacheloroppgave hos Nav IT, der vi forsker på
            hvordan en tolkningsdatabase <br />
            med tilhørende brukergrensesnitt kan være en støtte i
            regelspesifisering &#10084;&#65039;
          </p>

          <div className="flex max-w-[230px] justify-between mt-4 font-robotoserif text-lg  text-white dark:text-[#202020] ">
            <Link to="portfolio" offset={-96} smooth={true} duration={500}>
              <button className=" mt-4  bg-yellow-300 hover:bg-yellow-200 hover:text-neutral-700 text-neutral-900 font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-300 rounded">
                Portfolio
              </button>
            </Link>
          </div>
        </div>
        <div className=" z-0 top-[-40rem] right-0 opacity-50">
          <Lottie
            loop
            animationData={Whale1}
            play
            style={{ width: 1125, height: 168 }}
          />
        </div>
      </div>
    </div>
  );
};

export default about;
