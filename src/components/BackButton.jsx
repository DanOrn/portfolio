import React from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1, { state: { prevScrollPosition: window.scrollY } });
    };

    return (
        <button
            onClick={handleGoBack}
        >
            <div
                className="flex justify-center items-center
                font-medium
                    bg-neutral-200
                    hover:cursor-pointer
                    hover:text-neutral-700 
                    text-neutral-900
                    dark:bg-neutral-800
                    dark:text-neutral-100 py-2  px-4 rounded-3xl
                    dark:hover:text-neutral-300 "
            >
        <div className="flex justify-center items-center">
        <RiArrowLeftLine className="mr-2" size={24} />
          Tilbake
          
        </div>
            </div>
        </button>
    );
};

export default BackButton;