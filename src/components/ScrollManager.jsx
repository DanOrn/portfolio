import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function ScrollManager() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const path = location.pathname;

    // Hvis vi kommer tilbake til en tidligere side, gjenopprett scroll
    if (scrollPositions[path] != null) {
      window.scrollTo(0, scrollPositions[path]);
    } else {
      window.scrollTo(0, 0); // standard: topp
    }

    return () => {
      // Lagre scroll-posisjon for tidligere side
      scrollPositions[prevPath.current] = window.scrollY;
      prevPath.current = path;
    };
  }, [location]);

  return null;
}
