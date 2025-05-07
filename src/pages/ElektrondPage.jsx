import React from "react";
import Casestudy from "../components/Casestudy";
import BackButton from "../components/BackButton";

export default function ElektrondPage() {

  return (
    
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto w-full h-full bg-neutral-50 dark:bg-neutral-900 text-[#202020] dark:text-white">
      <div className="h-screen  mx-auto">
        <div className=" relative flex flex-col w-full ">
          {/*header*/}
          <div className="fixed left-0">
            <div className="flex items-start justify-between pt-12 pl-24  rounded-t">
             <BackButton />
            </div>
          </div>

          {/*body*/}
          <Casestudy />

          {/*footer*/}
          <div className="flex items-center justify-end bg-neutral-50 dark:bg-neutral-800 p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="cursor-pointer text-neutral-800 dark:text-neutral-300 font-bold uppercase px-6 py-2 text-sm  mr-1 mb-1 rounded-md border-2 border-neutral-300 dark:border-neutral-500"
              to="/"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
   */
}
