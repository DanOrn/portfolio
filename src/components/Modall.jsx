import React from "react";
import Casestudy2 from "./Casestudy2";
import { RiCloseCircleFill } from "react-icons/ri";

export default function Modall() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="mt-4 modal-open bg-neutral-500  text-white font-bold py-2 px-4 border-b-4 border-neutral-700  rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Under kreasjon...
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed w-full h-full inset-0 z-50 bg-neutral-50 dark:bg-neutral-900  dark:text-white">
            <div className="h-screen  mx-auto">
              <div className=" relative flex flex-col w-full ">
                {/*header*/}
                <div className="fixed right-0">
                  <div className="flex items-start justify-between py-6 pr-12 rounded-t">
                    <button
                      className="p-1 ml-auto float-right text-3xl leading-none font-semibold"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" text-neutral-800 dark:text-white   h-6 w-6 text-2xl block ">
                        <RiCloseCircleFill
                          className="border-4 border-solid border-neutral-900 bg-neutral-900 rounded"
                          size={50}
                        />
                      </span>
                    </button>
                  </div>
                </div>

                {/*body*/}
                <Casestudy2 />

                {/*footer*/}
                <div className="flex items-center justify-end bg-neutral-50 dark:bg-neutral-800 p-6 border-t border-solid border-slate-200 rounded-b">
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
