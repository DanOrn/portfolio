import React from "react";
import Modal from "./Modal";
import Modall from "./Modall";
import portfolio1 from "../assets/elektrond-portfolio2.png";

const portfolio = () => {
  return (
    <div
      name="portfolio"
      className=" h-full max-w-[1140px]  px-4 mx-auto  text-[#202020] dark:text-white"
    >
      <div className=" max-w-[1140px] mx-auto px-4 text-[#202020] dark:text-white ">
        <h1 className="my-6 text-4xl font-robotoserif font-bold">Portfolio</h1>
        <div className="grid gap-y-8">
          <div className="">
            <div className="rounded-md h-full flex  bg-neutral-200 dark:bg-neutral-800  ">
              <img
                className=" rounded-md h-[400px]"
                src={portfolio1}
                alt="tibber-logo"
              />
              <div className="flex-col self-center p-4">
                <h1 className="text-2xl pb-4">Smartstrøm-app</h1>
                <p>
                  En uavhenig smartstrøm-app som har til hensikt å gjøre det
                  lettere for brukere å få oversikt og kontroll over strømbruk.
                  Den er smart ved at du i tillegg til å kunne få info om strøm,
                  kan styre enheter i huset ditt.
                </p>
                <Modal />
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="rounded-md h-full flex  bg-neutral-200 dark:bg-neutral-800  ">
              <img
                className=" rounded-md h-[400px]"
                src={portfolio1}
                alt="tibber-logo"
              />
              <div className="flex-col self-center p-4">
                <h1 className="text-2xl pb-4">
                  Modelleringsverktøy for databasestudenter
                </h1>
                <p>
                  Studenter ved HK går første året gjennom faget databaser, i
                  dette faget skal de lære seg å tegne Entieter og diagramer.
                  Læreboken i faget har allerede en læringsplattform, men denne
                  er ikke veldig inbydende. Casen går ut på redesign av
                  nåværende løsning.
                </p>
                <Modall />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
