import React from "react";
import ReactCompareImage from "react-compare-image";
import Lottie from "lottie-react";
import BackButton from "../components/BackButton";
import BildeSeksjon from "../components/BildeSeksjonSkil";
import ProjectFull from "../components/ProjectFull";
import scope1 from "../assets/prosjektbilder/scope1.png";
import Container from "../components/Container";
import Divider from "../components/Divider";
import CardBlue from "../components/CardBlue";
import BorderedImage from "../components/BorderedImage";
import Personas from "../assets/prosjektbilder/personas.png";
import ScrollableImage from "../components/ScollableImage";
import Klartilbestilling from "../assets/prosjektbilder/klartilbestilling.png";
import Innepåensak from "../assets/prosjektbilder/innepåensak.png";
import Before from "../assets/prosjektbilder/beforeexcel.png";
import After from "../assets/prosjektbilder/bestillingsskjema.png";
import Finnbestilling from "../assets/prosjektbilder/finnbestilling.png";
import Padden from "../assets/padden.json";
import Map from "../assets/twemoji/1f5fa.svg";
import MagnifyingGlass from "../assets/twemoji/1f50e.svg";
import TestTube from "../assets/twemoji/1f9ea.svg";
import TriangularFlag from "../assets/twemoji/1f6a9.svg";
import ThinkingFace from "../assets/twemoji/1f914.svg";

export default function SkilteffektueringPage() {
  return (
    <div className=" relative flex flex-col w-full  dark:text-white">
      {/*header*/}

      <BackButton />

      {/*body*/}
      <BildeSeksjon />
      <Container>
        <div className=" lg:mx-8 tracking-wide">
          <h1 className="text-4xl font-semibold my-8">
            Skilteffektuering - Bestill skilt på 1, 2, 3!
          </h1>
          <p className="text-2xl mb-8">
            Hjelpe erfarne og uerfarene saksbehandlere med å håndtere
            skiltbestillingsprosessen fra A til Å gjennom en splitter ny
            bestillings portal opplevelse.
          </p>

          <Divider />
          <div className="flex flex-col gap-8 mb-12 lg:flex-row">
            <div className="">
              <h2 className="text-3xl font-medium my-5">Bakgrunn</h2>
              <p className="text-lg font-normal ">
                Bymiljøetaten har ansvar for skilting på alle kommunale veier i
                Oslo, fra planlegging til fysisk oppsetting, vedlikehold og
                videre håndheving. <br /> <br /> Uten en velfungerende
                skiltmyndighet ville byen raskt blitt kaotisk! <br />
                Der trafikanter hadde hatt store utfordringer med
                fremkommelighet.
                <br /> <br /> Det er i dag to interne saksbehandlere som har
                ansvaret for bestilling og oppfølging av rundt 1000 nye
                trafikkskilt årlig i byen.
              </p>
            </div>
            <CardBlue
              items={[
                {
                  title: "Min rolle",
                  description: "UX/UI-desiger, Interaksjonsdesigner",
                },
                {
                  title: "Tidslinje",
                  description:
                    "4 mnd konsept utvikling\n14 mnd videreutvikling",
                },
                {
                  title: "Skills",
                  description:
                    "Innsikt, Brukermedvirkning, Prototyping, Testing, UU, Designsystem, Hifi-skisser",
                },
              ]}
            />
          </div>

          <div className="mb-12 ">
            <h2 className="text-3xl font-medium my-5">Problem</h2>
            <p className="text-lg font-normal">
              Dagens skiltbestillingsprosess består av flere manuelle steg, med
              personlige Excel- og huskelister for oversikt, og kommunikasjon
              over e-post og telefon. Dette gjør prosessen både tidkrevende,
              sterkt personavhengig, og tidvis redusert i kvalitet, som videre
              fører til frustrasjon hos intressenter både i og utenfor
              Bymiljøetaten. <br />
              Med et økende antall skiltbestillinger, er det et tydelig behov
              for en bærekraftig løsning.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-medium my-5">Mål</h2>
            <p className="text-lg font-normal">
              Gi saksbehandlerne en løsning som effektiviserer hele
              skiltbestilingsprosessen fra start til slutt, med redusert
              personavhengighet og økt kvaliteten i deres arbeid.
            </p>
          </div>
          <BorderedImage image={Personas} />
        </div>
      </Container>

      <ProjectFull image={scope1} />
      <Container>
        <div className=" lg:mx-8 tracking-wide">
          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">
              Brukerfokusert tilnærming skaper de beste resultatene
            </h2>
            <p className="text-lg font-normal">
              <strong>
                For å sikre at løsningen møtte reelle behov, var det viktig å
                involvere nøkkelpersonene i prosessen – de to saksbehandlerne
                som håndterer bestillingene, samt entreprenøren og montørene som
                utfører dem.
              </strong>
              <br /> Gitt deres travle hverdag, var det spesielt viktig å ta
              hensyn til deres tid. Jeg planla derfor møtene i god tid,
              gjennomførte egen forberedende research, observerte dem i arbeid
              med bestillinger, og utarbeidet en tydelig agenda med relevante
              spørsmål. Dette la grunnlaget for effektive og målrettede
              intervjuer, gruppearbeid og workshops.
            </p>
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">Kartlegging av flyt</h2>
            <p className="text-lg font-normal mb-4">
              En av de første oppgavene jeg tok tak i da prosjektet startet, var
              å kartlegge den eksisterende bestillingsflyten. Dette var for å få
              oversikt over hele bestillingsprosessen – fra saksbehandler mottar
              bestilling, via entreprenør og montør som fysisk setter opp
              skiltet, til det avsluttes med at saksbehandler kvalitetssikrer og
              godkjenner arbeidet. <br /> Ved å visualisere denne prosessen
              tidlig, fikk hele teamet en felles forståelse av hva som faktisk
              skjer underveis. Det gjorde det enklere å identifisere mulige
              utfordringer og finne konkrete forbedringspunkter vi kunne
              utforske.
            </p>
            <ScrollableImage />
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">
              Automatisk overføring fra vedtak til bestilling
            </h2>
            <p className="text-lg font-normal mb-4">
              Ved å automatisere overføring fra STR Sak (systemet som brukes til
              å opprette skiltvedtak), slipper bestillerne nå å manuelt finne ut
              hvilke saker som er vedtatt og klare for bestilling. Når en sak er
              vedtatt, sendes den automatisk inn i Skilteffektuering under fanen
              "Klar til bestilling / Venter handling", hvor den videre
              bestillingen kan gjennomføres. Dette har fjernet et tidkrevende og
              sårbart manuelt ledd i prosessen.
            </p>
            <BorderedImage image={Klartilbestilling} />
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">Inne på en bestilling</h2>
            <p className="text-lg font-normal mb-2">
              Jeg tok i bruk sentrale <strong>UX-prinsipper</strong> for å gjøre
              løsningen enklere og mer effektivt å bruke. Denne tilnærmingen gir
              en arbeidsflate som gjør det lettere for brukeren å fokusere,
              navigere raskt og ta informerte beslutninger.
            </p>
            <div className="text-lg font-normal flex flex-col gap-4 mb-8">
              <div>
                <strong>Fitts’s law</strong>

                <ul className="list-disc list-outside ml-5">
                  <li className="">
                    Handlingsknapper er plassert nederst til høyre, der de er
                    lett tilgjengelige og har riktig størrelse for rask
                    interaksjon.
                  </li>
                </ul>
              </div>

              <div>
                <strong>Jakob’s Law</strong>

                <ul className="list-disc list-outside ml-5">
                  <li>
                    Layouten er basert på etablerte mønstre fra lignende
                    forvaltningssystemer, som venstremeny for navigasjon,
                    detaljpanel i midten og metadata til høyre. Dette fører til
                    et grensesnitt som er lett gjenkjennelig for brukeren.
                  </li>
                </ul>
              </div>

              <div>
                {" "}
                <strong>Aesthetic-Usability Effect</strong>
                <ul className="list-disc list-outside ml-5">
                  <li>
                    Sikrer et rent og nøytralt visuelt uttrykk, med hierarkisk
                    typografi, logisk whitespace, fargevalg og ikonografi.
                  </li>
                  <li>
                    Med på å forbedre løsningens brukervennlighet, samtidig som
                    at den reduserer kognitiv belastning og øker tilliten.
                  </li>
                </ul>
              </div>
            </div>
            <BorderedImage image={Innepåensak} />
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">
              Fra Excel-kaos til effektiv bestilling
            </h2>
            <p className="text-lg font-normal mb-4">
              Tidligere måtte bestiller og entreprenør
              <br /> Fylle ut Excel-skjema → sende via epost → printe ut → fylle
              inn → signere → scanne → sende tilbake via epost. <br />
              <br />
              I dag skjer hele prosessen digitalt, uten å måtte forlate
              løsningen. <br />
              Dette har frigjort tid, og brukerne kan nå prioritere kvalitet
              fremfor tidskrevende administrasjon.
            </p>
            <div className="border border-[#111] rounded-[10px] overflow-hidden lg:py-4 lg:px-48 lg:bg-[#D4EEFF]">
              <div className="w-auto h-auto max-w-fill">
                <ReactCompareImage
                  leftImage={Before}
                  rightImage={After}
                  alt="Sammenligning av før- og etterbilde"
                  sliderLineColor="#38363D"
                  sliderPositionPercentage={0.5}
                  sliderLineHeight="100px"
                />
              </div>
            </div>
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">
              Finn bestillinger - oversiktlig og effektivt
            </h2>
            <p className="text-lg font-normal mb-4">
              I stedet for å lete gjennom eposter eller ringe kolleger, kan
              bestillere og entreprenører nå søke, filtrere og sortere effektivt
              for å finne akkurat den bestillingen de trenger.
            </p>
            <BorderedImage image={Finnbestilling} />
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">
              Adaptivt design for montørene ute i felt
            </h2>
            <p className="text-lg font-normal mb-4">
              Montørene i felt får en forenklet versjon av løsningen, tilpasset
              deres arbeidssituasjon og enhet. Denne er designet på prinsipper
              fra adaptivt design, der unødvendige komponenter fra PC-versjonen
              er fjernet. Montørene får kun den informasjonen de trenger for å
              utføre oppgavene sine. Med store klikkeflater blir det enkelt å
              navigere og utføre bestillinger effektivt, selv ute i felt.
            </p>
            <div className="border border-[#111] rounded-[10px] overflow-hidden lg:py-4 lg:px-48 lg:bg-[#D4EEFF]">
              <div className="w-auto h-auto max-w-fill">
                <Lottie animationData={Padden} loop={true} />
              </div>
            </div>
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-medium my-5">
              Høydepunkter etter lansering
            </h2>
            <p className="text-lg font-normal mb-6">
              Vi klarte å levere en digital løsning som tar for seg de mest
              sentrale delene av skiltbestilingsprosessen!
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 border-1 rounded-2xl border-[#111] text-[#177de3]">
                <h2 className="text-5xl font-bold mb-4">14/14</h2>
                <p className="text-lg ">
                  Fullførte onboarding og bruker løsningen aktivt{" "}
                </p>
              </div>

              <div className="p-8 border-1 rounded-2xl border-[#111] text-[#177de3]">
                <h2 className="text-5xl font-bold mb-4 ">100%</h2>
                <p className="text-lg ">
                  Opplever en bedre arbeidsflyt med ny løsning{" "}
                </p>
              </div>
              <div className="p-8 border-1 rounded-2xl border-[#111] text-[#177de3]">
                <div className="flex items-baseline gap-2">
                  <h2 className="text-5xl font-bold mb-4">↓ 86%</h2>
                  <h3 className="text-lg font-medium text-zinc-400">
                    (29t → 4t per mnd)
                  </h3>
                </div>

                <p className="text-lg ">
                  Reduksjon i tiden brukt på skiltbestillinger{" "}
                </p>
              </div>
              <div className="p-8 border-1 rounded-2xl border-[#111] text-[#177de3]">
                <div className="flex items-baseline gap-2">
                  <h2 className="text-5xl font-bold mb-4">↓ 70%</h2>
                  <h3 className="text-lg font-medium text-zinc-400">
                    (48 → 16)
                  </h3>
                </div>
                <p className="text-lg ">Reduksjon av manuelle oppgaver </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-medium my-5">Refleksjoner & læring</h2>
            <div className="flex flex-col gap-6 text-lg font-medium">
              <div className="flex gap-4">
                <img
                  src={Map}
                  alt="Map emoji"
                  className="inline-block h-7 w-7"
                />
                <h4>Når man er i tvil, kartlegg flyten!</h4>
              </div>
              <div className="flex gap-4">
                <img
                  src={MagnifyingGlass}
                  alt="Magnifyingglass emoji"
                  className="inline-block h-7 w-7"
                />
                <h4>Innsikt kan avdekke muligheter</h4>
              </div>
              <div className="flex gap-4">
                <img
                  src={TestTube}
                  alt="Testtube emoji"
                  className="inline-block h-7 w-7"
                />
                <h4>Test hypoteser tidlig i prosessen</h4>
              </div>
              <div className="flex gap-4">
                <img
                  src={TriangularFlag}
                  alt="Triangular flag emoji"
                  className="inline-block h-7 w-7"
                />
                <h4>Alt er ikke like viktig → MVP</h4>
              </div>
              <div>
                <div className="flex gap-4">
                  <img
                    src={ThinkingFace}
                    alt="  Thinking face emoji"
                    className="inline-block h-7 w-7"
                  />
                  <h4>I en ideell verden...</h4>
                </div>

                <p className="ml-11 font-normal ">
                  Hadde jeg dykket dypere inn i skiltbestillingsprosessen med
                  mål om å identifisert flere edge cases for å gjøre løsningen
                  fullstendig. Og videre utforske muligheten for å tilpasse den
                  til mobil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/*footer*/}
    </div>
  );
}
{
}
