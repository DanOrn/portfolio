import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import Sitemap from "../assets/sitemap1.png";

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
          Sitemap
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
                  <h3 className="text-3xl font-semibold">Sitemap</h3>
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
                    <p className="text-lg">
                      Sitemap ser følgende ut. Denne er basert på den første
                      User-Flow skissen som vi har laget der vi prøvde å tegne
                      fram de funksjonalitetene vi ønsker å ha med. Endringer er
                      blitt gjort på bakgrunn av nye ideer og noe kompromisser
                      vi måtte ta.
                    </p>
                    <div className="flex justify-around p-8 ">
                      <img className="h-[500px] " src={Sitemap} alt="sitemap" />
                    </div>

                    <div className="mt-2 grid gap-x-4 grid-cols-2 grid-rows-2 text-lg"></div>
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
