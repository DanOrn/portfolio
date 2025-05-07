import React from "react";

const HorizontalScroll = ({ imgUrls }) => {
  return (
   // <div className="bg-blue-400p-4">
   <div className="overflow-x-scroll whitespace-nowrap">
        <img
          className="max-w-full h-auto"
          src={url}
          draggable={false}
          width={8000}
        />

    </div>
  );
};

export default HorizontalScroll;
