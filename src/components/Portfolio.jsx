import React from "react";
import Modal from "./Modal";
import Modall from "./Modall";

import portfolio2 from "../assets/portfoliocard-database.png";
import portfolio1 from "../assets/portfoliocard-elektrond.png";

const portfolio = () => {
  return (
    <div
      name="portfolio"
      className=" h-full max-w-[1140px]   mx-auto  text-[#202020] dark:text-white"
    >
      <div className=" max-w-[1140px] mx-auto px-4 text-[#202020] dark:text-white ">
        <h1 className="my-6 text-4xl font-robotoserif font-bold">Portfolio</h1>
        <div className="grid gap-y-8">
          <div className="modal-open">
            <div className="rounded-sm h-full flex  bg-neutral-200 dark:bg-neutral-800  ">
              <img
                className=" rounded-md h-[400px]"
                src={portfolio1}
                alt="tibber-logo"
              />
              <div className="flex-col self-center p-4">
                <h1 className="text-2xl pb-4">Smartstrøm-app</h1>
                <p className="pb-4">
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
                src={portfolio2}
                alt="tibber-logo"
              />
              <div className="flex-col self-center p-4">
                <h1 className="text-2xl pb-4">
                  Modelleringsverktøy for databasestudenter
                </h1>
                <p>
                  Studenter som går IT-bachelor på Høyskolen Kristiania, skal på
                  sitt første år ta faget databaser. I dette faget skal de bla.
                  lære å lage entiteter og diagrammer. Faget har allerede en
                  læringsplattform, men denne plattformen er ikke spesielt
                  brukervennlig. Derfor går casen ut på å redesigne den
                  nåværende løsningen.
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
