import React from "react";
import { Link } from "react-router";
import portfolio2 from "../assets/biothumbnail.png";
import portfolio1 from "../assets/portfoliocard-elektrond.png";
import Skilthumb from "../assets/skilthumb1.png";



const PortfolioSection = () => {
  return (
    <div
      name="portfolio"
      className=" h-full max-w-[1140px]   mx-auto  text-[#202020] dark:text-white"
    >
      <div className=" max-w-[1140px] mx-auto text-[#202020] dark:text-white ">
        <h1 className="my-6 text-4xl font-robotoserif font-bold">
          Utvalgte prosjekter
        </h1>
        <div className="grid gap-y-8">

        <div className=" h-full flex border-4 border-solid border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700  ">
              <img
                className="  h-[400px]"
                src={Skilthumb}
                alt="tibber-logo"
              />
              <div className="flex-col self-center pl-8 p-4">
                <h1 className="text-2xl pb-4">
                  Skilteffektuering: Bestill skilt på 1, 2, 3!
                </h1>
                <p className="pb-6">
                En intern webapplikasjon utviklet for å forenkle en personavhengig og tidkrevende prosess. 
                Med færre manuelle steg og en smartere flyt, gjør løsningen det mulig å bestille, følge opp og kvalitetssikre trafikkskilt – raskt og effektivt.
                </p>
    
     
                <Link
                  className="mt-4  bg-[#FFE7BC] hover:bg-[#F9C66B]  text-neutral-900 font-bold py-2 px-4 border-4 border-[#F9C66B] "
                  to="skilteffektuering"
                >
                  Les mer
                </Link>


              </div>
            </div>

        <div className="h-full flex border-4 border-solid border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700  ">
              <img
                className="  h-[400px]"
                src={portfolio2}
                alt="tibber-logo"
              />
              <div className="flex-col self-center pl-8 p-4">
                <h1 className="text-2xl pb-4">
                  Bil i Oslo: Parkering for alle, uten unntak
                </h1>
                <p className="pb-6">
                  Oslo kommunes offisielle parkeringsapp utviklet for å gjøre
                  hverdagen enklere for bilister i byen. Styr parkeringen med
                  god prisinformasjon, betal elbillading, kjøp piggdekkoblat og
                  finn HC-parkeringsplasser på en effektiv måte.
                </p>
                <Link
                  className="mt-4  bg-[#FFE7BC] hover:bg-[#F9C66B]  text-neutral-900 font-bold py-2 px-4 border-4 border-[#F9C66B] "
                  to="bilioslo"
                >
                  Les mer
                </Link>
              </div>
            </div>

         

          <div className="mb-24">
          <div className="h-full flex border-4 border-solid border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700  ">
            <img
              className="  h-[400px]"
              src={portfolio1}
              alt="tibber-logo"
            />
            <div className="flex-col self-center pl-8 p-4">
              <h1 className="text-2xl pb-4">
                Elektrond: Smarthus og strøm i én app
              </h1>
              <p className="pb-6">
                En strøm-app som er designet for å gi deg enkel oversikt og full
                kontroll over ditt strømforbruk. I tillegg til detaljert
                informasjon om strømmen din, lar appen deg også styre smarte
                enheter i hjemmet ditt – for en smartere hverdag.
              </p>
              <Link
           className="mt-4  bg-[#FFE7BC] hover:bg-[#F9C66B]  text-neutral-900 font-bold py-2 px-4 border-4 border-[#F9C66B] "
                to="elektrond"
              >
                Les mer
              </Link>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
