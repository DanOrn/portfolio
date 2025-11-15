import { Routes, Route } from "react-router-dom";
import Index from "./pages/LandingPage";
import ElektrondPage from "./pages/ElektrondPage";
import BiliosloPage from "./pages/BiliosloPage";
import SkilteffektueringPage from "./pages/SkilteffektueringPage";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import ScrollManager from "./components/ScrollManager";

function App() {
  return (
    <div className="bg-[#fffefb] dark:bg-zinc-800">
      <ScrollManager />

      <Routes>
        <Route index element={<Index />} />
        <Route path="elektrond" element={<ElektrondPage />} />
        <Route path="bilioslo" element={<BiliosloPage />} />
        <Route path="skilteffektuering" element={<SkilteffektueringPage />} />
      </Routes>

      <ScrollToTop
        smooth
        className="hidden sm:flex items-center justify-center !h-12 !w-12 mr-12 !rounded-full !bg-[#fffefb] !text-zinc-800 dark:!bg-zinc-800 dark:!text-white !border dark:!border-white !border-[#2f2f2f] dark:hover:!shadow-[4px_4px_#fffefb,_4px_4px_0_1px_#fffefb] dark:!shadow-none !shadow-none hover:!shadow-[4px_4px_#2f2f2f,_4px_4px_0_1px_#2f2f2f] !transition-all !duration-200 !ease-linear"
        component={<FaArrowUp size={24} />}
      />
    </div>
  );
}

export default App;
