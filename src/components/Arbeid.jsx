import Elektrondthumb from "../assets/Elektrondthumb.png";
import Skilthumb from "../assets/skilthumb1.png";
import Biothumb from "../assets/Biothumb.png";
import ProjectBlue from "./ProjectBlue";
import ProjectYellow from "./ProjectYellow";
import ProjectPurple from "./ProjectPurple";

const Arbeid = () => {
  return (
    <div name="arbeid" className=" mx-auto  dark:text-white  ">
      <h2 className="mx-4 mb-12 text-xl font-bold">
        <span>Utvalgt arbeid, </span>
        <span className="text-zinc-400">
          ta kontakt for å se hele porteføljen min!
        </span>
      </h2>

      <div className="flex flex-col gap-20 pb-24">
        <ProjectBlue
          image={Skilthumb}
          title=" Skilteffektuering: Bestill skilt på 1, 2, 3!"
          description="En intern webapplikasjon utviklet for å forenkle en personavhengig
            og tidkrevende prosess. Med færre manuelle steg og en smartere flyt,
            gjør løsningen det mulig å bestille, følge opp og kvalitetssikre
            trafikkskilt – raskt og effektivt."
          linkTo="/skilteffektuering"
        />

        <ProjectYellow
          image={Biothumb}
          title="Bil i Oslo: Parkering for alle, uten unntak"
          description="Oslo kommunes offisielle parkeringsapp utviklet for å gjøre
                hverdagen enklere for bilister i byen. Styr parkeringen med god
                prisinformasjon, betal elbillading, kjøp piggdekkoblat og finn
                HC-parkeringsplasser på en effektiv måte."
          linkTo="/bilioslo"
        />

        <ProjectPurple
          image={Elektrondthumb}
          title="Elektrond: Smarthus og strøm i én app"
          description="En strøm-app som er designet for å gi deg enkel oversikt og
                  full kontroll over ditt strømforbruk. I tillegg til detaljert
                  informasjon om strømmen din, lar appen deg også styre smarte
                  enheter i hjemmet ditt – for en smartere hverdag."
          linkTo="/elektrond"
        />
      </div>
    </div>
  );
};

export default Arbeid;
