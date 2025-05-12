import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/LandingPage";
import ElektrondPage from "./pages/ElektrondPage";
import BiliosloPage from "./pages/BiliosloPage";
import SkilteffektueringPage from "./pages/SkilteffektueringPage";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.hj) {
      hj('stateChange', location.pathname);
    }
  }, [location]);

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 ">
      <Routes>
        <Route index element={<Index />} />
        <Route path="elektrond" element={<ElektrondPage />} />
        <Route path="bilioslo" element={<BiliosloPage />} />
        <Route path="skilteffektuering" element={<SkilteffektueringPage />} />
      </Routes>
              <ScrollToTop
        className="mr-12   flex justify-center items-center   !bg-neutral-900 text-neutral-50 dark:!bg-white dark:text-neutral-900 "
        smooth
        component={<FaArrowUp size={30} />}
      />

    </div>
  );
}

export default App;