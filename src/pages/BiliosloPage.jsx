import React from "react";
import Casestudy from "../components/Casestudy2";
import BackButton from "../components/BackButton";
import BildeSeksjon from '../components/BildeSeksjon';

export default function BiliosloPage() {

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto w-full h-full bg-neutral-50 dark:bg-neutral-900 text-[#202020] dark:text-white">
      <div className="h-screen  mx-auto">
        <div className=" relative flex flex-col w-full ">
          {/*header*/}
          <div className="fixed left-0 z-10">
            <div className="flex items-start justify-between pt-12 pl-24  rounded-t">
             <BackButton />
            </div>
          </div>

          {/*body*/}
          <BildeSeksjon />
          <Casestudy />

          {/*footer*/}
 
        </div>
      </div>
    </div>
  );
}
{
  /*     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
   */
}
