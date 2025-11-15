import { Link } from "react-scroll";
import Bird from "../assets/twemoji/2728.svg";

const Divider = () => {
  return (
    <div class="my-4 relative overflow-hidden w-full flex items-center justify-center">
      <span
        class="absolute left-0 top-[12px] w-[calc(50%-32px)] border-t 
      border-[#2f2f2f]
      dark:border-[#fffefb]
      "
      ></span>

      <div class="mx-auto">
        <img src={Bird} alt="Sunflower emoji" className="h-6 w-6" />
      </div>

      <span
        class="absolute right-0 top-[12px] w-[calc(50%-32px)] border-t 
      border-[#2f2f2f]
      dark:border-[#fffefb]
      "
      ></span>
    </div>
  );
};

export default Divider;
