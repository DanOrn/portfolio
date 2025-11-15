import React, { useRef } from "react";
import SkilFlyt from "../assets/prosjektbilder/skiltbestillingsflyt.png";

function ScrollableImage() {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Juster hastigheten her
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <div
        ref={scrollRef}
        className="scrollbar-visible w-full overflow-x-scroll cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="min-w-[2000px]">
          <img
            src={SkilFlyt}
            draggable={false}
            className="h-full w-auto"
            alt="Brukerreise flyt"
          />
        </div>
      </div>

      <p>Klikk og dra mot venstre, eller bruk scroll for å se hele flyten.</p>
    </div>
  );
}

export default ScrollableImage;
