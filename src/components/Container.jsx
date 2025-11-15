import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full py-10 px-4 lg:px-8 xl:px-0 max-w-[1140px] ${className}`}
    >
      {children}
    </div>
  );
}
