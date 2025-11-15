import { Link } from "react-scroll";
import Email from "../assets/twemoji/1F48C.svg";
import Divider from "./Divider";
import Container from "./Container";

const Footer = () => {
  return (
    <Container>
      <Divider />
      <h1 className="text-2xl font-semibold mt-16 mb-6">
        Ta gjerne kontakt om du vil ta en prat om design, klarting, eller god
        mat!
        <img
          src={Email}
          alt="Email emoji"
          className="inline-block h-7 w-7 align-text-bottom ml-2"
        />
      </h1>

      <div>
        <ul className="flex gap-3 font-medium text-lg ">
          <li>
            <a
              className="hover:font-bold underline underline-offset-6 decoration-red-500 decoration-3"
              href="mailto: daniel.s.ornevik@gmail.com"
            >
              Epost
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              className=" hover:font-bold underline underline-offset-6 decoration-red-500 decoration-3"
              href="https://www.linkedin.com/in/danielornevik/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <p className="my-6 text-sm">
        Porteføljen er designet & kodet av meg selv ✿
      </p>
    </Container>
  );
};

export default Footer;
