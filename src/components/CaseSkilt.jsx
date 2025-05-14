import React from "react";
import Lottie from "lottie-react";
import ReactCompareImage from "react-compare-image";
import Klartilbestilling from "../assets/klartilbestilling.png";
import EnSak from "../assets/ensak.png";
import BeforeExcel from "../assets/beforeexcel.png";
import BestillingsSkjema from "../assets/bestillingsskjema.png";
import Padden from "../assets/padden.json";
import ScrollableImage from "./ScollableImage";
import FinnBestilling from "../assets/finnbestilling.png";


const CaseSkilt = () => {
  return (
    <div className="mx-auto w-[1024px] font-robotoserif text-lg leading-[1.5] text-[#202020] dark:text-white">
      {/* Seksjon: Prosjektbeskrivelse */}
      <section className="px-8 pt-12  ">
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
              items: ["4 mnd konsept utvikling", "1,2 år videreutvikling"],
            },
            {
              title: "Min rolle",
              items: [
                "UX/UI, Interaksjonsdesign",
                "Universell utforming",
                "Kartlegge flyt",
              ],
            },
          ].map((section, index) => (
            <div className="text-xl" key={index}>
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

      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">Utfordring</h2>
        <h4 className="text-2xl font-bold mb-2">Bakgrunn</h4>
        <p className="mb-6 ">
          Det er i dag to interne saksbehandlere som har ansvaret for bestilling
          og oppfølging av mellom 750 og 1 000 trafikkskilt årlig i Oslo
          kommune. Prosessen håndteres manuelt, med Excel-lister og
          kommunikasjon via e-post og telefon, noe som gjør den sterkt
          personavhengig.
        </p>
        <h4 className="text-2xl font-bold mb-2">Problemstilling</h4>
        <p className="mb-6 italic">
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
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 ">Løsningen</h2>

        <div className="pb-24">
          <h3 className="text-2xl font-bold mb-4">
            Brukerfokusert tilnærming skaper de beste resultatene
          </h3>
          <p className="mb-2">
            <strong>
              For å sikre at løsningen møtte reelle behov, var det viktig å
              involvere nøkkelpersonene i prosessen – de to saksbehandlerne som
              håndterer bestillingene, samt entreprenøren og montørene som
              utfører dem.
            </strong>
          </p>
          <p className="mb-8">
            Gitt deres travle hverdag, var det spesielt viktig å ta hensyn til
            deres tid. Jeg planla derfor møtene i god tid, gjennomførte egen
            forberedende research, observerte dem i arbeid med bestillinger, og
            utarbeidet en tydelig agenda med relevante spørsmål. Dette la
            grunnlaget for effektive og målrettede intervjuer, gruppearbeid og
            workshops.
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Kartlegging av flyt
          </h3>
          <p className="mb-2">
            En av de første oppgavene jeg tok tak i da prosjektet startet, var å
            kartlegge den eksisterende bestillingsflyten.{" "}
          </p>
          <p className="mb-2">
            Dette var for å få oversikt over hele bestillingsprosessen –
            fra saksbehandler mottar bestilling, via entreprenør og montør som fysisk setter opp skiltet,
             til det avsluttes med at saksbehandler kvalitetssikrer og godkjenner arbeidet.
          </p>

          <p className="mb-4">
            Ved å visualisere denne prosessen tidlig, fikk hele teamet en felles
            forståelse av hva som faktisk skjer underveis. Det gjorde det
            enklere å identifisere mulige utfordringer og finne konkrete
            forbedringspunkter vi kunne utforske.
          </p>
          <h4 className="text-2xl font-bold mb-2">Ny og forbedret arbeidsflyt</h4>
          {/* Scrollable flyt */}
          <ScrollableImage />

          <p className="text-base">
            <strong>Klikk og dra mot venstre, eller bruk scroll for å se hele flyten.</strong>
          </p>
        </div>

        {/* Del 1: Innledning */}
        <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
          Automatisk overføring fra vedtak til bestilling
          </h3>
          <p className="">
            Ved å automatisere overføring fra STR Sak – systemet som brukes til å opprette skiltforskrifter 
            – slipper bestillerne nå å manuelt finne ut hvilke saker som er vedtatt og klare for bestilling.<br />
            <br />
            Når en sak er vedtatt, sendes den automatisk inn i Skilteffektuering under fanen "Klar til bestilling / Venter handling", 
            hvor den videre bestillingen kan gjennomføres. <br />
            Dette har fjernet et tidkrevende og sårbart manuelt ledd i prosessen.
          </p>
          <img
            className="mb-8"
            alt="Skjermbilde av siden Klar til bestilling"
            src={Klartilbestilling}
          />
        </div>
        {/* Del 2: Innledning */}
        <div className="pb-12">
          <h4 className="text-2xl font-bold mb-2">Inne på en bestilling</h4>

          <h4 className="text-xl font-bold mb-2">
            Bruk av UX-prinsipper på design av én bestilling
          </h4>
          <p className="mb-4">
            På skjermbildet under, har jeg brukt sentrale UX-prinsipper for å gjøre et komplekst saksbehandlingsverktøy enklere og mer effektivt å bruke.</p>
            <p className="mb-4">Ved å følge <strong>Fitts’s Law</strong> har jeg plassert viktige handlingsknapper nederst til høyre, der de er lett tilgjengelige og har riktig størrelse for rask interaksjon. 
            Layouten er bygget i tråd med <strong>Jakob’s Law</strong>, og følger etablerte mønstre fra lignende forvaltningssystemer, 
            som venstremeny for navigasjon, detaljpanel i midten og metadata til høyre. Dette skaper et grensesnitt som er lett gjenkjennelig for brukeren.
             Jeg har også brukt <strong>Aesthetic-Usability Effect</strong> for å sikre et rent og nøytralt visuelt uttrykk, med god typografi, fargevalg og ikonografi, som både forbedrer systemets brukervennlighet og øker tilliten til løsningen.</p>

<p className="mb-4">Denne helhetlige tilnærmingen gir en arbeidsflate som gjør det lettere for brukeren å fokusere, navigere raskt og ta informerte beslutninger, samtidig som den reduserer kognitiv belastning.</p>
          <img
            className="mb-8"
            alt="Skjermbilde av siden Saksinformasjon"
            src={EnSak}
          />
        </div>

        {/* Del 3: Innledning */}
        <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
          Fra Excel-kaos til effektiv bestilling
          </h3>
          <p className="mb-4">
          Med den nye løsningen slipper saksbehandlerne å samle og sende informasjon manuelt. 
          I stedet kan de fokusere på presise bestillinger og sikre kvalitet i oppfølgingen. 
          Samtidig får andre avdelinger god veiledning, og kan etter hvert bestille skilt på egen hånd.
          </p>
          <h3 className="text-xl font-bold">
          Før og etter bilde av bestillingsskjema
          </h3>
          <div className="relative w-full h-fit overflow-hidden">
            <ReactCompareImage
              leftImage={BeforeExcel}
              rightImage={BestillingsSkjema}
              alt="Sammenligning av før- og etterbilde"
              sliderLineColor="#38363D"
              sliderPositionPercentage={0.5}
              sliderLineHeight="100px"
            />
          </div>
        </div>

        {/* Del 3: Innledning */}
        <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
            Finn bestilling - raskt og effektivt
          </h3>
          <p className="">
          I stedet for å lete gjennom e-poster eller ringe kolleger, kan saksbehandlere nå søke,
           filtrere og sortere for raskt å finne akkurat den bestillingen de trenger. Det sparer tid og gir bedre kontroll.
          </p>
          <img
            className="mb-8"
            alt="Skjermbilde av siden Klar til bestilling"
            src={FinnBestilling}
          />
        </div>

        {/* Del2: Velkomstskjerm */}
        <h3 className="text-2xl font-bold mb-6">
        Enkel og tilpasset løsning for montører i felt
            </h3>
        <div className="pb-12 flex items-center justify-between">
        
          <div className="max-w-[380px]">
          <h3 className="text-xl font-bold mb-2">
          Adaptivt design for nettbrett
            </h3>
            <p className="mb-8">
            Montørene i felt får en forenklet versjon av løsningen, tilpasset deres arbeidssituasjon og enhet.
            Denne er designet på prinsipper fra adaptivt design, der unødvendige komponenter fra PC-versjonen er fjernet for å redusere kognitiv
             belastning. Montørene får kun den informasjonen de trenger for å utføre oppgavene sine – presentert i en oversiktlig og handlingsorientert visning. <br/>
            Med store klikkeflater blir det enkelt å navigere og utføre bestillinger effektivt, selv ute i felt.
            </p>
          </div>
          <div className="w-full max-w-[600px] pl-8">
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
                
                Gjennom utviklingen av Skilteffektuering har vi forvandlet en manuell og fragmentert prosess til en effektiv digital løsning. 
                Ved å redusere manuelle oppgaver <strong>fra 48 til 16</strong>, har bestillere gått <strong>fra å bruke 29 timer per måned på bestillinger til kun 3,5 timer. </strong>
                Dette har frigjort tid og økt effektiviteten betydelig.</p>

<p className="mb-3">Løsningen gir også bestillere full oversikt, montører en forenklet versjon og andre avdelinger mulighet til å bestille skilt på egen hånd med veiledning. Designet er brukervennlig og tilpasset ulike enheter og brukergrupper.</p>

<p className="mb-3">Veien videre innebærer kontinuerlig forbedring basert på tilbakemeldinger, med fokus på ytterligere automatisering og integrasjon med andre interne verktøy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseSkilt;
