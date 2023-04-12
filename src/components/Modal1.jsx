import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import tibber from "../assets/tibber.png";
import lyse from "../assets/lyselogo.png";
import applehome from "../assets/applehome.png";
import alexa from "../assets/amazonalexa.png";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="  modal-open modal-open bg-neutral-500 hover:bg-neutral-400 text-white font-bold py-2 px-4 border-b-4 border-neutral-700 hover:border-neutral-500 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-center items-center">
          Konkurrentanalyse
          <BiLinkExternal className="ml-2" size={20} />
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed w-full h-full inset-0 z-50 bg-neutral-50 dark:bg-neutral-900 text-[#202020] dark:text-white">
            <div className="h-screen max-w-[1140px] mx-auto">
              <div className=" relative flex flex-col w-full ">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Konkurrentanalyse</h3>
                  <button
                    className="p-1 ml-auto float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-neutral-800 dark:text-neutral-300  h-6 w-6 text-2xl block">
                      <RiCloseCircleFill className="mr-4" size={35} />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="w-auto">
                  <div className="h-full max-w-[1140px] my-6 mx-auto px-4 text-[#202020] dark:text-white ">
                    <div className="grid grid-cols-2 my-8">
                      <p className=" text-xl">
                        Vi undersøkte Apple Home, Amazon Alexa, Lyse Strøm og
                        Tibber, da samtlige hadde en plass på topplisten i
                        AppStore og gode ratings.
                      </p>
                      <div className="grid grid-cols-2 grid-rows-2">
                        <img
                          className="flex justify-center items-center pl-16"
                          src={tibber}
                          alt="tibber-logo"
                        />
                        <img
                          className="flex justify-center items-center pl-16"
                          src={alexa}
                          alt="tibber-logo"
                        />
                        <img
                          className="flex justify-center items-center pl-16 pt-4"
                          src={lyse}
                          alt="tibber-logo"
                        />
                        <img
                          className="flex justify-center items-center pl-16 pt-4"
                          src={applehome}
                          alt="tibber-logo"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <div className="p-4 positive">
                        <h2 className="pb-2 text-3xl font-bold  text-green-600">
                          👍 Positivt
                        </h2>
                        <h3 className="font-medium pb-2">Begge appene</h3>
                        <ol className="list-disc pl-6">
                          <li>
                            Minimalistisk design, ren UI og flittig ikonbruk for
                            enklere forståelse av funksjonalitet.
                          </li>
                        </ol>
                        <br />

                        <h3 className="font-medium pb-2">Smarthjem-appene</h3>
                        <ol className="list-disc pl-6">
                          <li>
                            Funksjonalitet som gjør det mulig å stille inn eller
                            skru av og på enheter direkte i appen.
                          </li>
                          <li>
                            Det er enkelt å legge til enheter og tildele dem til
                            forskjellige rom.
                          </li>
                          <li>
                            Gir mulighet til å lagre og aktivere egne scenarioer
                            for å forenkle og automatisere f.eks. morgenrutine
                            eller kveldsrutine.
                          </li>
                        </ol>
                        <br />
                        <h3 className="font-medium pb-2">Strømappene</h3>
                        <ol className="list-disc pl-6">
                          <li>
                            Har detaljert oversikt over strømpris og
                            strømforbruk.
                          </li>
                          <li>
                            Lar brukeren planlegge lading og annen strømbruk ut
                            i fra når strømprisen er lavest på døgnet.
                          </li>
                          <li>Mulighet til å betale faktura i app.</li>
                        </ol>
                        <br />
                      </div>

                      <div className="p-4 ">
                        <h2 className="pb-2 text-3xl font-bold  text-red-600">
                          👎 Negativt
                        </h2>
                        <h3 className="font-medium pb-2 ">Begge appene</h3>
                        <ol className="list-disc pl-6">
                          <li>
                            Ingen av dem kombinerer strømapp og smarthjemapp.
                          </li>
                          <li>
                            Appene binder brukeren til deres selskap ved å gjøre
                            tjenester og produkter eksklusive til deres app.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end bg-neutral-50 dark:bg-neutral-900 p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-neutral-800 dark:text-neutral-300 font-bold uppercase px-6 py-2 text-sm  mr-1 mb-1 rounded-md border-2 border-neutral-300 dark:border-neutral-500"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
