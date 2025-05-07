import React from "react";
import { RiArrowLeftLine, RiArrowRightUpLine } from "react-icons/ri";
import Lottie from "lottie-react";

import Ladeflyt from "../assets/ladeflyt.json";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <a
        className="modal-open w-80 h-8 hover: text-neutral-900 hover:font-medium  border-b-4 border-b-[#F9C66B] hover:border-[#FFAE1E]
                    dark:text-neutral-100"
        onClick={() => setShowModal(true)}
        style={{ cursor: "pointer" }} // For å indikere at det er klikkbart
      >
        <div className="flex justify-center items-center leading-[.5]">
        Se hele flyten for ladeparkering
          <RiArrowRightUpLine className="ml-2" size={24} />
        </div>
      </a>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed h-screen inset-0 z-50 bg-neutral-50 dark:bg-neutral-900 text-[#202020] dark:text-white">
            <div className=" max-w-[1140px] mx-auto">
                {/*header*/}

                {/*body*/}
                <div className="h-full flex flex-col justify-center">
                <a
        className="modal-open w-44 h-8 hover: text-neutral-900 hover:font-medium  border-b-4 border-b-[#F9C66B] hover:border-[#FFAE1E]
                    dark:text-neutral-100"
        onClick={() => setShowModal(false)}
        style={{ cursor: "pointer" }} // For å indikere at det er klikkbart
      >
        <div className="flex justify-center items-center">
        <RiArrowLeftLine className="mr-2" size={24} />
          Tilbake til case
          
        </div>
      </a>
                  <div className=" gap-8 flex ">
                    
                    <div className="w-full flex flex-col justify-center">

                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">
                          Ladeparkeringsflyt
                        </h3>
                      </div>

                      <p className="mb-3">
                        <strong>1. Parkeringsinformasjonskort</strong>
                        <br />
                        Brukeren får et kjapt overblikk over ladeparkeringen som
                        er valgt. De kan velge å få veibeskrivelse til
                        parkeringen, eller trykke "Parker her".
                      </p>

                      <p className="mb-3">
                        <strong>2. Start parkering og lading</strong> <br />
                        Her får brukeren mer detaljert prisinformasjon, samt
                        mulighet til å lese mer om hva ladingen koster. Deretter
                        må brukeren velge en spesifikk ladestolpe, kjøretøy og
                        betalingskort før ladeparkeringen kan starte.
                      </p>
                      <p className="mb-3">
                        <strong>3. Aktiv parkering og lading</strong> <br />
                        Nå har parkering og lading startet, og brukeren får en
                        minimert header som teller opp fra 0. Når den ønsker å
                        avslutte parkeringen, klikker man på headeren og får en
                        utvidet utgave og muligheten til å avslutten økten.
                      </p>
                      <p className="mb-3">
                        <strong>4. Oppsummering/kvittering</strong> <br />
                        Etter økten er avsluttet, kommer automatisk
                        oppsummering/kvittering opp, her får brukeren opp alle
                        kostnadene som ledet til sluttsummen. De kan så lukke
                        vinduet eller sende kvittering på e-post.
                      </p>
                    </div>
                    <div className="w-full max-w-[320px]">
                      <Lottie animationData={Ladeflyt} loop={true} />
                    </div>
                  </div>

                </div>

                {/*footer*/}

              </div>
          </div>
        </>
      ) : null}
    </>
  );
}
