import { Link } from "react-scroll";
import Sunflower from "../assets/twemoji/1f33b.svg";
import Container from "./Container";
import Divider from "../components/Divider";

const Header = () => {
  return (
    // Container
    <Container id="header" className="">
      <div className="min-h-[70dvh] mt-28 mb-8 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold mb-2 leading-snug">
          Hei, mitt navn er{" "}
          <span className="underline underline-offset-6 decoration-yellow-500 decoration-4">
            Daniel
          </span>
          !
          <img
            src={Sunflower}
            alt="Sunflower emoji"
            className="inline-block h-10 w-10 ml-2 mb-1"
          />
        </h1>

        <p className="text-2xl">
          Jeg er en <strong className="font-bold">engasjert</strong> designer
          med solid kompetanse innen UX/UI-design og god frontend-forståelse.
          Min drivkraft er å utvikle meningsfulle løsninger som er
          <strong className="font-bold ml-2">
            strategisk forankret, brukervennlige
          </strong>
          <span className="ml-2">og</span>
          <strong className="font-bold ml-2">teknisk realiserbare.</strong>
        </p>

        <div className="flex">
          <Link
            className="flex items-center w-fit my-8 cursor-pointer text-lg font-semibold px-6 py-3 rounded-full border
            dark:bg-zinc-800 bg-[#fffefb]  dark:border-white border-[#2f2f2f]  
            dark:hover:shadow-[4px_4px_white,_4px_4px_0_1px_white] hover:shadow-[4px_4px_#2f2f2f,_4px_4px_0_1px_#2f2f2f] 
            transition-all duration-200 ease-linear "
            to="arbeid"
            offset={-148}
            smooth={true}
            duration={500}
          >
            Se utvalgt arbeid
          </Link>
        </div>
      </div>
      <Divider />
    </Container>
  );
};

export default Header;
