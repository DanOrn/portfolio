import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

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
          Low-Mid Wireframe
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
                  <h3 className="text-3xl font-semibold">Low-Mid Wireframe</h3>
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
                  <div className="h-full max-w-[1140px] my-6 mx-auto px-4  dark:text-white ">
                    <div className="grid gap-x-4 grid-cols-2 justify-end ">
                      <p className="text-lg">
                        Vi har lagd tilsammen 16 frames til denne prototypen,
                        hensikten er å fremstille de viktigste funksjonalitetene
                        i appliksjonen. Den er lagd i svart/hvit for å ikke
                        distrahere testere, slik at de kan fokusere på å
                        fullføre oppgavene de får presentert.
                        <br />
                        <br /> Målet vårt er å presentere en vanskelig
                        Informasjonsarkitektur på en enklest mulig måte, slik at
                        brukeren kan bli presentert et komplekst system uten å
                        bli overbelastet eller stresset.
                      </p>

                      <iframe
                        title="wireframe"
                        className=" border-solid border-2 border-neutral-400 w-full h-[800px]"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F74MmSd8GnLqfBh7aWcAucS%2FWireframe%3Fpage-id%3D366%253A1098%26node-id%3D366%253A1550%26viewport%3D195%252C91%252C0.18%26scaling%3Dscale-down%26starting-point-node-id%3D366%253A1550"
                        allowfullscreen
                      ></iframe>
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
