import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1, { state: { prevScrollPosition: window.scrollY } });
  };

  return (
    <div className="fixed left-0 z-10">
      <div className="flex items-start justify-between pt-12 pl-24  rounded-t">
        <button onClick={handleGoBack}>
          <div
            className="    items-center justify-center my-8 cursor-pointer text-medium font-medium px-6 py-3 rounded-full
    bg-[#fffefb] text-zinc-800 
    dark:bg-zinc-800 dark:text-white
    border 
    dark:border-white 
    border-[#2f2f2f] 
    dark:hover:shadow-[4px_4px_#fffefb,_4px_4px_0_1px_#fffefb] 
    dark:shadow-none
    shadow-none
    hover:shadow-[4px_4px_#2f2f2f,_4px_4px_0_1px_#2f2f2f] 
    transition-all !duration-200 !ease-linear"
          >
            <div className="flex justify-center items-center">
              <RiArrowLeftLine className="mr-2" size={24} />
              Tilbake
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BackButton;
