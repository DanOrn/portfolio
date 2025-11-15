import React from "react";
import ReactCompareImage from "react-compare-image";
import Lottie from "lottie-react";
import losning1 from "../assets/infoomapp.png";
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

const Casestudy2 = () => {
  return (
    <div className="w-full text-xl leading-[1.5] dark:text-white">
      {/* Seksjon: Prosjektbeskrivelse */}
      <section className="px-8 pt-12 mx-auto max-w-[1024px]">
        <h1 className="mb-10 text-5xl font-bold">
          Bil i Oslo - Parkering for alle
        </h1>
        <div className="flex justify-between gap-8 flex-wrap">
          {[
            {
              title: "Prosjekttype",
              items: ["App for iOS og Android", "Publikumsløsning"],
            },
            {
              title: "Tidsramme",
              items: ["1,5 år fast designer", "6 mnd designkontakt"],
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

      <section className="px-8 py-12 mx-auto max-w-[1024px]">
        <h2 className="text-4xl font-bold mb-6">Utfordringer</h2>
        <div className="space-y-6 text-xl">
          <p className="mb-2">Appen hadde flere sammensatte utfordringer som bidro til en svekket brukeropplevelse – noe som også ble gjenspeilet i nedgangen i brukervurderingene i App Store og Google Play. </p>
          <p className="mb-2">Det visuelle uttrykket var utdatert, og mangelen på et helhetlig designsystem førte til et fragmentert grensesnitt på tvers av flater. 
          Som offentlig tjeneste måtte løsningen også tilpasses strenge krav til universell utforming, noe som ikke var godt ivaretatt i tidligere versjoner.</p>

          <p className="mb-2">Samtidig opplevde brukerne frustrasjon knyttet til mangelfull parkeringsinformasjon – både før, under og etter parkering – noe som skapte usikkerhet. </p>
          <p className="mb-2">I tillegg medførte endringer i markedet behov fra fagavdelingen om å utvikle en ny funksjonalitet som kunne håndtere en mer kompleks prismodell for lading, basert på kWt og tilpasset varierende strømpriser.</p>
    
        </div>
      </section>

      {/* Seksjon: Utvalgte Prosjekter */}
      <section className="px-8 py-12 mx-auto max-w-[1024px]">
        <h2 className="text-4xl font-bold mb-8 ">Utvalgt arbeid</h2>
        {/* Del1: Innledning */}
        <div className="pb-12">
          <h3 className="text-2xl font-bold mb-4">
            Visuelt design, designsystem og universell utforming
          </h3>
          <p className="mb-8">
            Appens visuelle uttrykk var utdatert og det var en prioritet å
            implementere designsystem for å styrke tilknytningen til Oslo
            kommune og sikre universell utforming. Det eksisterende
            designsystemet var ikke tilpasset mobil, noe som krevde utvikling av
            nye og tilpasning av eksisterende komponenter og ikoner.
          </p>
          <h4 className="text-xl font-bold mb-2">Nye ikoner</h4>
          <p className="mb-4">
            Ettersom flere ikoner ikke var tilgjengelige i det nåværende
            designsystemet, måtte jeg designe nye.
          </p>
          <div className="flex flex-wrap gap-4">
            {Object.entries(icons).map(([path, Icon], index) => (
              <Icon
                key={index}
                className=" w-12 h-12  dark:text-white"
              />
            ))}
          </div>
        </div>
  {/* Del2: Velkomstskjerm */}
        <div className="h-full py-12 flex flex-col justify-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Velkomstskjerm</h3>
            <p>
              Brukerne møtes av en visuell og informativ velkomst, der
              appens funksjonalitet forklares kort ved hjelp av illustrasjoner
              og enkel tekst.
            </p>
          </div>

          <img
            className="my-8"
            alt="Fire bilder med informasjon om appen"
            src={losning1}
          />
        </div>

        <div className="h-full py-24">
          <div className="gap-8 flex items-center">
            <div className="w-full max-w-[320px]">
              <Lottie animationData={ladefilter} loop={true} />
            </div>
            <div className="w-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                Appens kart - Filter, driftstatus og navigasjon
              </h3>
              <p className="mb-3">
                <strong>Forbedret filtrering</strong> <br />
                Brukertester avdekket behov for bedre filtrerings muligheter
                etter implementeringen av ladefunksjonalitet i appen. Jeg laget
                derfor skisser og prototype på et nytt filter som skulle gjøre
                det enklere å finne riktig parkering.
              </p>
              <p className="mb-3">
                <strong>Tilgjengeliggjøring av driftstatus</strong> <br />
                Misfornøyde brukere tok kontakt med servicedesken via e-post og
                telefon, noe som etter hvert ble et voksende problem. Jeg
                foreslo å tilgjengeliggjøre informasjon om driftstatus direkte i
                appen, et tiltak som viste seg å være både raskt og effektivt.
                Dette resulterte i en betydelig reduksjon i innkommende
                henvendelser, fra 20–30 per måned til 2–4.
              </p>
              <p className="mb-3">
                <strong>UI justeringer</strong> <br />
                Som del av et større løft av det visuelle designet i appen, ble
                også hovednavigasjon og andre elementer i kart endret. <br />
              </p>
            </div>
          </div>
        </div>

        <div className="h-full py-24 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Deler av parkeringsflyten</h2>
            <Ladeparkeringsflyt />
          </div>

          <div className=" gap-8 flex pb-24">
            <div className="w-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">
              Informasjonskort for ladeparkering
              </h3>
              <p className="mb-3">
                Brukerne fikk begrenset informasjon før de startet en
                ladeparkering, og det eksisterende informasjonskortet var ikke
                tilpasset ny funksjonalitet eller fagavdelingens behov for å
                endre prismodellen. For å utvikle en skalerbar løsning som ga
                bedre informasjon til brukerne, tok jeg utgangspunkt i{" "}
                <strong>Jakobs lov</strong>– en UX-heuristikk som vektlegger
                betydningen av kjente designmønstre. Målet var å designe et
                grensesnitt som umiddelbart føles kjent og dermed ble enkelt å
                navigere.
              </p>
              <table className="table-fixed w-full mb-4">
                <thead>
                  <tr className="bg-[#FFFFFF] dark:bg-neutral-800 ">
                    <th className="w-2/3 py-1 px-4 text-start">Informasjonstype</th>
                    <th className="w-1/6 px-8">Før</th>
                    <th className="w-1/6 px-8">Etter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFE7BC]">
                    <td className="px-4 py-1 dark:text-neutral-900">
                      Takstgruppe
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF] dark:bg-neutral-800">
                    <td className="px-4 py-1 ">Antall ledige ladestolper</td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxUnchecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="bg-[#FFE7BC]">
                    <td className="px-4 py-1 dark:text-neutral-900">
                      Ladeeffekten til ladestolper
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxUnchecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                    <td className="px-4 py-1 text-center">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF] dark:bg-neutral-800">
                    <td className="px-4 py-1">Knapp for veibeskrivelse</td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="bg-[#FFE7BC]">
                    <td className="px-4 py-1 dark:text-neutral-900">
                      Ladekostnader
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxUnchecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                    <td className="px-4 py-1 text-center">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF] dark:bg-neutral-800">
                    <td className="px-4 py-1">Parkeringsavgift</td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                  </tr>
                  <tr className="bg-[#FFE7BC]">
                    <td className="px-4 py-1 dark:text-neutral-900">
                      Tabell med detaljer om parkeringsavgift
                    </td>
                    <td className="px-4 py-1">
                      <img
                        src={checkboxUnchecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                    <td className="px-4 py-1 text-center">
                      <img
                        src={checkboxChecked}
                        alt="Valgt"
                        className="h-5 w-5 mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full max-w-[320px]">
              <Lottie animationData={ladekort} loop={true} />
            </div>
          </div>

          <div className=" gap-8 flex pb-24">
            
            <div className="w-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold pb-4">
                Informasjonskort for gateparkering og varslinger
              </h3>
              <p className="mb-4">
              Det samme designet ble brukt for både lade- og gateparkering for å sikre et gjenkjennelig og enhetlig brukergrensesnitt.
               Dette forenklet også utviklingsarbeidet ved å redusere behovet for unik kode.              
               </p>
               <p className="mb-2">
                <strong>Behov om varslinger ved spesifikke parkeringer</strong>   </p>
                <p className="mb-2">Ved kraftig snøfall i Oslo ble flere biler brøytet inne fordi brukerne ikke ble varslet om nattlig snøfall og behovet for brøyting.</p>
                <p className="mb-2">Mange parkerte også for nær trikkespor, noe som hindret trikken, og førte til forsinkelser i kollektivtrafikken.</p> 
                <p className="mb-2">Dette avdekket et klart behov for å varsle brukere som valgte utsatte parkeringsplasser – og i enkelte tilfeller hindre dem i å starte parkering i appen.</p>
                <p className="mb-2">Etter at varslingene ble innført, rapporterte Sporveien AS om færre parkerte biler som hindret trikken, og brøytemannskapet opplevde at gatene var betydelig enklere å rydde for snø. </p>
            

            </div>
            <div className="w-full max-w-[320px]">
              <Lottie animationData={Gatevarsling} loop={true} />
            </div>
          </div>

          <div className=" gap-8 flex pb-24">
            <div className="w-full max-w-[320px]">
              <Lottie animationData={Infokort} loop={true} />
            </div>
            <div className="w-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold pb-4">
                Start parkering og lading
              </h3>
              <p className="mb-3">
                Her får brukerne en kjapp oversikt over hva parkeringen kommer
                til å koste, de får også muligheten til å sette seg dypere inn i
                prisinformasjon.
              </p>
              <p className="mb-3">
                <strong>Frem og tilbake med fagavdelingen</strong> <br />
                Ladeparkering i Oslo kommune gikk med underskudd i 2022 og 2023
                fordi den daværende prismodellen ikke tok høyde for de høye
                strømprisene. Fagavdelingen jobbet derfor med flere ulike
                prismodeller for å håndtere utfordringen, og jeg måtte tilpasse
                designet i takt med de løpende endringene. Til slutt designet
                jeg et fleksibelt grensesnitt som kunne romme alle prismodellene
                avdelingen foreslo – på en visuell måte som både var presis og
                brukervennlig.
              </p>

              <p className="mb-3">
                <strong>Brukertesting</strong> <br />
                Jeg tok med produktleder og QA-tester ut i felt for å
                gjennomføre brukertesting. Vi valgte et område med mange
                ladeplasser for å sikre tilgang på nok relevante brukere. Til
                tross for at den nye prismodellen er betydelig mer kompleks,
                viste testen at 9 av 10 brukere forstod og aksepterte løsningen.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-8 gap-8 flex justify-between">
            <div className="w-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold pb-4">
                Min side - Min profil og kvitteringer
              </h3>
              <p className="mb-3">
                <strong>Designsystem + UU = Sant</strong> <br />
                Mange av appens sider fremsto som umoderne og brøt med flere
                etablerte estetiske prinsipper. Jeg tok utgangspunkt i
                dropdown-komponenten fra navigasjonsmenyen i designsystemet
                (tilpasset desktop), og videreutviklet den for mobil. Løsningen
                ble optimalisert med touchflater, tekststørrelser og kontraster
                som oppfyller kravene til universell utforming.
              </p>

              <p className="mb-3">
                <strong>Estetikk forbedrer brukeropplevelsen</strong> <br />
                Jeg tok i bruk det veldokumenterte prinsippet{" "}
                <strong>Aesthetic-Usability Effect</strong>, som viser at
                brukere ofte oppfatter estetisk tiltalende design som mer
                brukervennlig. Med dette som utgangspunkt laget jeg en fargerik
                illustrasjon og la til ikoner som balanserer det ellers litt
                "kjedelige" designet. For å sikre et harmonisk og visuelt
                tiltrekkende UI benyttet jeg et 8-pt gridsystem, noe som ledet
                til god symmetri.
              </p>
            </div>
            <div className="w-full max-w-[320px]">
              <Lottie animationData={Minside} loop={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Seksjon: Strømappen */}
     
      <section className="p-8 mx-auto max-w-[1024px] ">
        <div className="mb-8 gap-8 flex justify-between">
          <div className="flex items-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">
                Oppsummering og veien videre
              </h4>
              <p className="mb-3">
              Appen har fått et tydelig løft i både funksjon og form, med nytt designsystem, bedre tilgjengelighet og mer presis informasjon for brukerne.</p>
               <p className="mb-3">Resultatene har vært merkbare – færre henvendelser, bedre forståelse av prismodeller og en økning i vurderingene både i App Store (4,2 til 4,6) og Google Play (4,0 til 4,2).</p>

              <p className="mb-3">Veien videre handler om kontinuerlig forbedring ved å brukerteste, overvåke effekten av varslinger og prismodeller, samt utvikle designsystemet i takt med nye behov.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Casestudy2;
