import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1, { state: { prevScrollPosition: window.scrollY } });
    };

    return (
        <button
            className="cursor-pointer  text-gray-100 "
            onClick={handleGoBack}
        >
            <div
                className="flex justify-center items-center
                    bg-neutral-100
                    text-neutral-900
                    dark:bg-neutral-800
                    dark:text-neutral-100 py-2  px-4 rounded-3xl "
            >
                <IoMdArrowRoundBack size={24} className="" />
                <span className="ml-2  font-medium ">Tilbake</span>
            </div>
        </button>
    );
};

export default BackButton;