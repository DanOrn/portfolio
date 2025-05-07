import React from "react";
import ReactCompareImage from "react-compare-image";
import Lottie from "lottie-react";
import Klartilbestilling from "../assets/klartilbestilling.png";
import EnSak from "../assets/ensak.png";
import BestillingsSkjema from "../assets/bestillingsskjema.png";
import Padden from "../assets/padden.json";
import losning2 from "../assets/minsidegammel.png";
import losning3 from "../assets/minsideny.png";
import checkboxChecked from "../assets/check-box-checked.png";
import checkboxUnchecked from "../assets/check-box-unchecked.png";
import losning4 from "../assets/ladeinfo.json";
import ladefilter from "../assets/ladefilter.json";
import ladekort from "../assets/ladekort.json";
import Ladeparkeringsflyt from "./LadeparkeringModal";
import Infokort from "../assets/ladeinfo.json";
import Gatevarsling from "../assets/gatevarsling.json";
import Minside from "../assets/minside.json";
const icons = import.meta.glob("../assets/ikonerbio/*.svg", {
  eager: true,
  import: "ReactComponent",
});

const CaseSkilt = () => {
  return (
    <div className="w-full font-robotoserif text-xl leading-[1.5] text-[#202020] dark:text-white">
      {/* Seksjon: Prosjektbeskrivelse */}
      <section className="px-8 pt-12 mx-auto max-w-[1024px]">
        <h1 className="mb-10 text-5xl font-bold">
          Skilteffektuering - Bestill skilt på 1, 2, 3!
        </h1>
        <div className="flex justify-between gap-8 flex-wrap">
          {[
            {
              title: "Prosjekttype",
              items: ["Webapplikasjon", "Intern løsning"],
            },
            {
              title: "Tidsramme",
              items: ["4 mnd konsept utvikling", "1,2 år forvaltning"],
            },
            {
              title: "Min rolle",
              items: [
                "UX/UI, Interaksjonsdesign",
                "Universell utforming",
                "Designsystem",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="font-bold mb-2">{section.title}</h2>
              <ul className="list-none">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="font-robotoserif px-8 py-12 mx-auto max-w-[1024px]">
        <h2 className="text-4xl font-bold mb-6">Utfordring</h2>
        <h4 className="text-2xl font-bold mb-2">Bakgrunn</h4>
        <p className="mb-8 ">
          Det er i dag to interne saksbehandlere som har ansvaret for bestilling
          og oppfølging av mellom 750 og 1 000 trafikkskilt årlig i Oslo
          kommune. Prosessen håndteres manuelt, med Excel-lister og
          kommunikasjon via e-post og telefon, noe som gjør den sterkt
          personavhengig.
        </p>
        <h4 className="text-2xl font-bold mb-2">Problemstilling</h4>
        <p className="mb-8 italic">
          Hvordan kan vi utvikle en helhetlig digital løsning som effektiviserer
          prosessen, reduserer personavhengigheten, og sikrer bedre oversikt,
          sporbarhet og dokumentasjon?
        </p>
        <h4 className="text-2xl font-bold mb-2">Mål</h4>
        <p className="mb-2">
          Redusere manuelle arbeidsprosesser og etablere en robust løsning som
          begrenser feil og forsinkelser, samtidig som den sikrer kontinuitet i
          prosessen uavhengig av hvem som utfører oppgavene.
        </p>
      </section>

      {/* Seksjon: Utvalgte Prosjekter */}
      <section className="px-8 py-12 mx-auto max-w-[1024px]">
        <h2 className="text-4xl font-bold mb-12 ">Løsningen</h2>
        {/* Del 1: Innledning */}
        <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
            Slutt på leting etter bestillinger
          </h3>
          <p className="">
            Ved å automatisere overføringen fra STR Sak (et verktøy for
            opprettelse av skiltforskrifter) til Skilteffektuering, slipper
            bestillerne nå å manuelt identifisere hvilke saker som er vedtatt og
            klare for bestilling. <br />
            <br />
            Når en sak vedtas, overføres den automatisk til Skilteffektuering
            under fanen "Klar til bestilling/Venter handling", der den videre
            bestillingen kan gjennomføres. <br />
            Dette har fjernet et av flere tunge manuelle ledd i
            bestillingsprosessen.
          </p>
          <img
            className="mb-8"
            alt="Skjermbilde av siden Klar til bestilling"
            src={Klartilbestilling}
          />
        </div>

        {/* Del 2: Innledning */}
        <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
            Brukerfokusert saksoversikt
          </h3>
          <h4 className="text-xl font-bold mb-2">Bestillerne i sentrum</h4>
          <p className="mb-8">
            For å sikre at løsningen traff reelle behov, var det avgjørende å
            involvere de to saksbehandlerne som håndterer bestillinger. Gitt
            deres travle hverdag, var det spesielt viktig å ta hensyn til deres
            tid. Jeg planla derfor møtene i god tid, gjennomførte egen
            forberedende research, observerte dem i arbeid med bestillinger, og
            utarbeidet en tydelig agenda med relevante spørsmål. Dette la
            grunnlaget for effektive intervjuer, workshops og gruppearbeid.
          </p>
          <h4 className="text-xl font-bold mb-2">
            Bruk av UX-prinsipper i design av saksoversikten
          </h4>
          <p className="mb-4 text-lg">
            Skjermbildet under viser hvordan jeg har brukt sentrale UX-lover for
            å gjøre et komplekst saksbehandlingsverktøy enklere og mer effektivt
            i bruk:
          </p>
          <ul className="space-y-3 list-disc pl-6 text-lg">
            <li className="ml-2">
              <strong>Hick’s Law:</strong> Antall synlige valg er redusert til
              det nødvendige – f.eks. "Bestill" og "Returner STR Sak" – dette
              for å gjøre hovedhandlingene enkle å velge mellom.
            </li>
            <li className="ml-2">
              <strong>Fitts’s Law:</strong> Viktige handlingsknapper er plassert
              nederst til høyre, lett tilgjengelig og med god størrelse for rask
              interaksjon.
            </li>
            <li className="ml-2">
              <strong>Jakob’s Law:</strong> Layouten følger etablerte mønstre
              fra lignende forvaltningssystemer (venstremeny for navigasjon,
              detaljpanel i midten, metadata til høyre), noe som gjør
              grensesnittet lett gjenkjennelig.
            </li>
            <li className="ml-2">
              <strong>Law of Proximity:</strong> Relatert informasjon er
              gruppert i egne seksjoner som "Oppdragsbeskrivelse", "Grunnlag fra
              forskrift", og "Vedlegg", noe som gir en logisk
              informasjonsstruktur.
            </li>
            <li className="ml-2">
              <strong>Aesthetic-Usability Effect:</strong> Et ryddig og nøytralt
              visuelt uttrykk med god typografi, fargebruk og ikonografi gjør
              systemet mer brukervennlig og tillitvekkende.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Dette bidrar til en arbeidsflate som hjelper brukeren å fokusere,
            navigere raskt og ta informerte beslutninger uten unødvendig
            kognitiv belastning.
          </p>
          <img
            className="mb-8"
            alt="Skjermbilde av siden Saksinformasjon"
            src={EnSak}
          />
        </div>

 {/* Del 3: Innledning */}
        <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
          Fra Excel-kaos til tydelige roller og ansvar
          </h3>
          <p className="">
          Etter at den nye løsningen ble tatt i bruk, slipper saksbehandlerne å bruke tid på å samle og sende informasjon manuelt til entreprenøren. 
          Nå kan de heller fokusere på å legge inn presis bestillingsinformasjon, som navn og telefonnummer til prosjektansvarlig, 
          og bruke mer tid på å kontrollere at skilt er satt ut som de skal i kvalitetskontrollen. 
           I tillegg får andre avdelinger som ikke har bestilt skilt før, veiledning underveis – slik at de etter hvert kan gjøre det selv.
          </p>
          <img
            className="mb-8"
            alt="Skjermbilde av siden Klar til bestilling"
            src={BestillingsSkjema}
          />
        </div>

         {/* Del 3: Innledning */}
         <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
          Fra Excel-kaos til tydelige roller og ansvar
          </h3>
          <p className="">
          Etter at den nye løsningen ble tatt i bruk, slipper saksbehandlerne å bruke tid på å samle og sende informasjon manuelt til entreprenøren. 
          Nå kan de heller fokusere på å legge inn presis bestillingsinformasjon, som navn og telefonnummer til prosjektansvarlig, 
          og bruke mer tid på å kontrollere at skilt er satt ut som de skal i kvalitetskontrollen. 
           I tillegg får andre avdelinger som ikke har bestilt skilt før, veiledning underveis – slik at de etter hvert kan gjøre det selv.
          </p>
          <img
            className="mb-8"
            alt="Skjermbilde av siden Klar til bestilling"
            src={BestillingsSkjema}
          />
        </div>

        <div className="pb-12">
          <h4 className="text-xl font-bold mb-2">Nye ikoner</h4>
          <p className="mb-4">
            Ettersom flere ikoner ikke var tilgjengelige i det nåværende
            designsystemet, måtte jeg designe nye.
          </p>
          <div className="flex flex-wrap gap-4">
            {Object.entries(icons).map(([path, Icon], index) => (
              <Icon
                key={index}
                className=" w-12 h-12 text-[#202020] dark:text-white"
              />
            ))}
          </div>
        </div>
        {/* Del2: Velkomstskjerm */}
        <div className="h-full py-12 flex flex-col justify-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tablet ute i felt for montørene</h3>
            <p>
              Brukerne møtes av en visuell og informativ velkomst, der appens
              funksjonalitet forklares kort ved hjelp av illustrasjoner og enkel
              tekst.
            </p>
          </div>

          <div className="w-full max-w-[800px]">
              <Lottie animationData={Padden} loop={true} />
            </div>
        </div>
        </section>

      <section className="p-8 mx-auto max-w-[1024px] ">
        <div className="mb-8 gap-8 flex justify-between">
          <div className="flex items-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">
                Oppsummering og veien videre
              </h4>
              <p className="mb-3">
                <strong>Helhetlig og bra</strong> <br />
                Mange av appens sider fremsto som umoderne og brøt med flere
                etablerte estetiske prinsipper. Jeg tok utgangspunkt i
                dropdown-komponenten fra navigasjonsmenyen i designsystemet
                (tilpasset desktop), og videreutviklet den for mobil. Løsningen
                ble optimalisert med touchflater, tekststørrelser og kontraster
                som oppfyller kravene til universell utforming.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseSkilt;
