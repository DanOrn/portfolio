import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import Brukertest from "../assets/brukertest.png";

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
          Brukertest
          <BiLinkExternal className="ml-2" size={20} />
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed w-full h-full inset-0 z-50 bg-neutral-50 dark:bg-neutral-900  dark:text-white">
            <div className="h-screen max-w-[1140px] mx-auto">
              <div className=" relative flex flex-col w-full ">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Brukertest</h3>
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
                  <div className="h-full max-w-[1140px] mx-auto px-4  dark:text-white ">
                    <div className="my-6 grid grid-cols-2 gap-4">
                      <div>
                        <p className="my-6 text-lg">
                          Tabellen under viser hvilke funn som ble gjort, hvor
                          kritiske de er vurdert til å være og frist for å
                          korrigere ferdigstilt løsning. De funn som er markert
                          med «nei» er begrunnet med at selv om testdeltageren
                          brukte noe lenger tid enn ellers – oppfattes det ikke
                          som kritisk å endre på med det samme – da det ikke tok
                          flere sekunder før brukeren oppfattet hva som var
                          riktig. Det vil derfor vurderes hva som kan endres
                          uten at det eventuelt vil føre til enda større
                          forvirringer.
                        </p>
                        <div>
                          <table class="w-[620px] table-fixed box-border border-4 border-neutral-600 mb-6 text-base">
                            <thead>
                              <tr>
                                <th className="text-left pl-2">Funn</th>
                                <th className=" py-2 pl-8 w-24">Kritisk</th>
                                <th className="text-left pl-16 ">
                                  Frist for endring
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className=" bg-neutral-600">
                                <td className="pl-2 w-full">For små ikoner</td>
                                <td className="py-2 pl-14">Ja</td>
                                <td className="pl-16 pr-1">
                                  Før endelig innlevering
                                </td>
                              </tr>
                              <tr>
                                <td className="pl-2">
                                  Legg til ny scene, rom, enhet fører til
                                  kognitiv belastning
                                </td>
                                <td className="py-2 pl-14">Ja</td>
                                <td className="pl-16 pr-1">
                                  Før endelig innlevering
                                </td>
                              </tr>

                              <tr className="bg-neutral-600">
                                <td className="pl-2">
                                  Forvirring rundt "grønn-modus-knapp"
                                </td>
                                <td className="py-2 pl-14">Ja</td>
                                <td className="pl-16 pr-1">
                                  Før endelig innlevering
                                </td>
                              </tr>
                              <tr>
                                <td className="pl-2">
                                  Varierende UI fører til en tregere UX
                                </td>
                                <td className="py-2 pl-14">Ja</td>
                                <td className="pl-16 pr-1">
                                  Før endelig innlevering
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <img
                        className="pl-24 pr-12 w-full"
                        src={Brukertest}
                        alt="dame og mann"
                      />
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
