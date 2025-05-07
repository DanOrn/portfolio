import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import trond from "../assets/trond-personas.png";
import maria from "../assets/personas-maria.png";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="modal-open modal-open bg-neutral-500 hover:bg-neutral-400 text-white font-bold py-2 px-4 border-b-4 border-neutral-700 hover:border-neutral-500 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-center items-center">
          Personas
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
                  <h3 className="text-3xl font-semibold">Personas</h3>
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
                  <div className="h-full max-w-[1140px] my-12 mx-auto px-4 text-[#202020] dark:text-white ">
                    <div className="grid grid-rows-2 gap-4">
                      <div className="flex gap-12">
                        <img
                          className="rounded-full h-[300px] w-[300px]"
                          alt="Trond 56år"
                          src={trond}
                        />
                        <div>
                          <h2 className="mb-4 text-2xl font-semibold">
                            Trond 56år
                          </h2>
                          <p className="my-4">
                            Er en oljeplattform arbeider og jobber turnus. Han
                            er borte fra hjemmet sitt over lengre perioder av
                            gangen. Før han reiser på jobb må han gå over alt
                            det elektriske i hjemmet sitt for å sjekke at
                            strømmen er avslått og at det ikke er brannfare mens
                            han er borte. Dette har blitt en tidskrevende
                            oppgave og Trond begynner å bli lei, men kan ikke
                            slutte da det ofte bekymrer han da han reiser på
                            jobb.
                          </p>
                          <div className="pb-4">
                            <h3 className="font-medium">Vaner</h3>
                            <ol className="list-disc pl-6">
                              <li>
                                Skrur regelmessig av lys og varme for å redusere
                                strømkostnaddene.
                              </li>
                              <li>
                                Går over samtlige enheter for å se at alt er
                                avslått før han reiser på jobb.
                              </li>
                            </ol>
                          </div>
                          <div>
                            <h3 className="font-medium">Pain Points</h3>
                            <ol className="list-disc pl-6">
                              <li>
                                Bekymrer seg ofte over om han har slått av alt
                                det nødvendige.
                              </li>
                              <li>Bekymringer rundt brannfare.</li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-12 pb-6">
                        <div>
                          <h2 className="mb-4 text-2xl font-semibold">
                            Maria 29år
                          </h2>
                          <p className="my-4">
                            Er utvikler i et internasjonalt selskap. Siden hun
                            trives godt på arbeidsplassen og har hyggelige
                            kollegaer, tilbringer hun mesteparten av sin tid
                            der. I sin daglige rutine pleier hun å slå av alle
                            lysene og varmeovnene mens hun er borte. På den
                            måten sparer hun strøm. Men hun syns den nåværende
                            rutinen er noe tungvind, da det tar lang tid å få
                            varmet opp leiligheten til hun er tilbake fra
                            jobben. Andre ganger har hun dårlig tid og får ikke
                            tid til å slå av alt, hun ender da opp med å tenke
                            på det resten av arbeidsdagen.
                          </p>
                          <div className="pb-4">
                            <h3 className="font-medium">Vaner</h3>
                            <ol className="list-disc pl-6">
                              <li>
                                Skrur regelmessig av lys og varme for å redusere
                                strømkostnaddene.
                              </li>
                              <li>
                                Går over samtlige enheter for å se at alt er
                                avslått før hun reiser på jobb.
                              </li>
                            </ol>
                          </div>
                          <div>
                            <h3 className="font-medium">Pain Points</h3>
                            <ol className="list-disc pl-6">
                              <li>
                                Bruker mye tid på å slå av alle enhetene sine.
                              </li>
                              <li>Bekymringer rundt brannfare.</li>
                              <li>Oppvarming av leilighet tar lang tid.</li>
                            </ol>
                          </div>
                        </div>
                        <img
                          className="rounded-full h-[300px] w-[300px]"
                          alt="Maria 29år"
                          src={maria}
                        />
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
