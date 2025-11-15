import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

const ProjectPurple = ({
  title,
  description,
  image,
  linkTo,
  linkText,
  children,
}) => {
  return (
    <div className="mx-8">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full mb-12 object-cover box-border overflow-hidden border border-[#111] rounded-xl shadow-[12px_12px_0_#AA9EFF]   dark:bg-neutral-800 dark:border-neutral-700"
        />
      )}

      {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
      {description && <p className="text-xl font-light mb-4">{description}</p>}
      {children}
      {linkTo && (
        <Link
          to={linkTo}
          className="cursor-pointer font-medium hover:font-semibold dark:bg-zinc-800 bg-[#fffefb] px-6 py-3 rounded-full border dark:border-white border-[#2f2f2f] flex items-center w-fit dark:hover:shadow-[4px_4px_#AA9EFF,_4px_4px_0_1px_#AA9EFF] hover:shadow-[4px_4px_#AA9EFF,_4px_4px_0_1px_#2f2f2f] transition-all duration-200 ease-linear"
        >
          {linkText || "Les mer"}
          <RiArrowRightLine className="ml-2" size={24} />
        </Link>
      )}
    </div>
  );
};

export default ProjectPurple;
