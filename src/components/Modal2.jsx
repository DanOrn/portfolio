import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import sporreundersokelse from "../assets/sporreundersokelse.png";
import pro60 from "../assets/60prosent.png";
import pro90 from "../assets/90prosent.png";
import pro50 from "../assets/50prosent.png";
import pro5050 from "../assets/5050prosent.png";

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
          Spørreundersøkelse
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
                  <h3 className="text-3xl font-semibold">Spørreundersøkelse</h3>
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
                    <div className="flex gap-12">
                      <p className="my-8 text-lg">
                        Vi lagde en spørreundersøkelse og delte den med 10
                        forskjellige menn og kvinner i aldersgruppen 23-35år.
                        Deltakerene kom fra forskjellige yrkesbakgrunner, disse
                        var bla. studenter, advokat, akademiker,
                        lege/sykepleier, salg og konsulent. Dette er en variert
                        testgruppe med forskjellige personligheter og vi tror
                        det kan gi oss et godt resultat.
                        <br />
                        <br /> Målet med spørreundersøkelsen var å kunne få en
                        dypere forståelse av atferden til individer når de
                        forlater hjemmet, og finne ut av deres relasjon til
                        teknologi, smarthjem og strøm-applikasjoner.
                      </p>
                      <img
                        className="my-8 h-full"
                        alt="testgruppe-bilde"
                        src={sporreundersokelse}
                      />
                    </div>
                    <div className="my-6">
                      <h1 className="font-medium text-lg pb-2">
                        Funn fra spørreundersøkelse:
                      </h1>
                      <div className="grid grid-cols-4 gap-6 text-base">
                        <div>
                          <img
                            className="my-8 "
                            alt="testgruppe-bilde"
                            src={pro5050}
                          />
                          <p className="text-center">
                            Tenker ofte på strømforbruket sitt
                          </p>
                        </div>
                        <div>
                          <img
                            className="my-8 "
                            alt="testgruppe-bilde"
                            src={pro90}
                          />
                          <p className="text-center">
                            Betaler strømregningene sine gjennom mobiltelefonen
                          </p>
                        </div>
                        <div>
                          <img
                            className="my-8 "
                            alt="testgruppe-bilde"
                            src={pro50}
                          />{" "}
                          <p className="text-center">
                            Tenker at en smarthjem og strøm app ville
                            effektivisert hverdagen deres
                          </p>
                        </div>
                        <div>
                          <img
                            className="my-8 "
                            alt="testgruppe-bilde"
                            src={pro60}
                          />
                          <p className="text-center">
                            Slår av varmen når de skal være borte i lengre
                            perioder
                          </p>
                        </div>
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
