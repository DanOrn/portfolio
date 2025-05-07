import React from "react";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";
import bannerstrom from "../assets/bannerstrom.png";
import ikonbruk from "../assets/ikonbruk.png";
import skriftbruk from "../assets/skriftbruk.png";
import fargebruk from "../assets/fargebruk.png";
import losning1 from "../assets/styrditthjem.png";
import losning2 from "../assets/minstrom.png";
import losning3 from "../assets/uavhengig.png";

const Casestudy = () => {
  return (
    <div className="w-full text-lg ">
      <img className="rounded-b-md h-1/4 " alt="alttekst" src={bannerstrom} />
      <div className="h-full max-w-[1080px] my-6 mx-auto text-[#202020] dark:text-white ">
        <h1 className="my-12 text-5xl font-bold">
        Elektrond - Smarthus og strøm i én app
        </h1>
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold">Prosjekt type</h2>
            <ul className="list-disc pl-6">
              <li>Eksamen Interaksjons Design 2</li>
            </ul>
          </div>
          <div>
            <h2 className=" font-bold">Min rolle</h2>
            <ul className="list-disc pl-6">
              <li className="pb-1">UX/UI, Interaksjons design</li>
              <li>Brukerintervjuer/tester</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Tidsramme</h2>
            <ul className="list-disc pl-6">
              <li>ca. 4mnd</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Verktøy</h2>
            <ul className="list-disc pl-6">
              <li className="pb-1">Figma</li>
              <li>FigJam</li>
            </ul>
          </div>
        </div>
        <div className="my-24 font-robotoserif">
          <h1 className=" text-3xl font-bold my-4">Oppgaven vi fikk</h1>
          <p className=" text-xl italic">
            Lag en «strøm-smartapp/tjeneste», som gjør det enklere for folk å ha
            oversikt eller <br></br> kontroll over ting som har med strøm og
            strømforbruk å gjøre.
          </p>
        </div>
        <div className="my-8 font-robotoserif flex flex-col justify-center">
          <h1 className=" text-3xl font-bold mb-4">Løsningen</h1>
          <p className="text-base">
            Du finner en klikkbar prototype i Figma på bunnen av denne siden.
          </p>
          <div className="flex mt-12 gap-6">
            <img className="w-80" alt="alttekst" src={losning1} />

            <div className="flex items-center">
              <div className="flex-col w-full">
                <h1 className=" text-2xl font-bold mb-6">
                  #1 Smarthus kontroll
                </h1>
                <h2 className=" text-lg font-bold mb-2">Scener</h2>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    <p className="mb-4">
                      Ved å lage egne scener, kan brukere enkelt skru av og på
                      flere <br /> enheter i hjemmet sitt samtidig.
                    </p>
                  </li>
                </ul>
                <h2 className=" text-lg font-bold mb-2">Enheter</h2>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    <p className="pb-2">
                      Elektrond stenger ikke ute noen, og det er akkturat det
                      som gjør den unik.
                    </p>
                  </li>
                  <li>
                    <p className="pb-2">
                      Ved å tillate ALLE bedrifters enheter å kobles opp i mot
                      appen, vil brukerne få de mest tilpassede opplevelsene.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex mt-12 gap-6">
            <div className="flex items-center">
              <div className="flex-col w-full">
                <h1 className="text-2xl font-bold mb-6">
                  #2 Alt om ditt strømforbruk
                </h1>
                <h2 className="text-lg font-bold mb-2">Ovesikt strøm</h2>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    <p className="pb-4">
                      I strømoversikten for brukere fort oversikt over dagens,
                      månedens forbruk og samtidig mulighet til å se nåværende
                      strømpris og prisen gjennom dagen.
                    </p>
                  </li>
                </ul>
                <h2 className="text-lg font-bold mb-2">
                  Forutsigbarhet og nyttige verktøy
                </h2>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    <p className="pb-2">
                      Videre kan man dykke dypere i forbruket sitt, og lære seg
                      om sitt eget strømforbruk ved å tappe på forbruk,
                      prognose, fordeling eller din avtale.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <img className="w-80 mr-12" alt="alttekst" src={losning2} />
          </div>

          <div className="flex mt-12 gap-6">
            <img className="w-80" alt="alttekst" src={losning3} />

            <div className="flex items-center">
              <div className="flex-col w-full">
                <h1 className="text-2xl font-bold mb-6">
                  #3 Den eneste uavhengige
                </h1>
                <h2 className=" text-lg font-bold mb-2">Helt uavhengig</h2>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    <p className="pb-4">
                      Ved bytte av strømleverandør kan det fort oppstå
                      frustrasjon ved å måtte bytte app. Denne appen løser det,
                      og lar deg ha hvilken som helst strømleverandør.
                    </p>
                  </li>
                </ul>
                <h2 className=" text-lg font-bold mb-2">Lett å velge best</h2>
                <ul className="text-lg list-disc pl-6">
                  <li>
                    <p className="pb-2">
                      Topplisten hjelper brukere å til en hver tid ha oversikt
                      over hvilke leverandører som har billigst pris, best
                      omtaler eller som er mest populær.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h1 className="mb-4 mt-24 text-3xl font-robotoserif font-bold">
          Research
        </h1>
        <div className="flex gap-12">
          <div className="w-1/2">
            <h2 className="mb-4 text-xl font-bold font-robotoserif">
              &#9732;&#65039; Konkurentanalyse
            </h2>
            <p className="mb-4">
              Da teamet ikke hadde god erfaring med strøm/smartapp-tjenester,
              begynte naturligvis researchen våres her. Vi lastet ned flere av
              dagens mest populære løsninger, og så nærmere på hvilke styker og
              svakheter de hadde.
              <br />
            </p>
            <Modal1 />
          </div>

          <div className="w-1/2">
            <h2 className="mb-4 text-xl font-bold font-robotoserif">
              &#128760; Spørreundersøkelse
            </h2>
            <p className="mb-4">
              Videre etter å ha ansaffet oss god kunnskap om hvordan disse
              appene fungerer i dag, gikk vi videre for å prøve å forstå de
              aktuelle brukerne. Dette er viktig da det er dem som skal bruke
              løsningen til slutt.
            </p>
            <Modal2 />
          </div>
        </div>
        <div className="my-16">
          <h2 className="pt-12 text-3xl font-bold mb-4">
            🔎 Funn etter research
          </h2>
          <p className="my-4">
            Resultatene fra spørreundersøkelsen viser at det er et visst
            atferdsmønster knyttet til kontroll av strømforbruk, der deltakerne
            har en tendens til å slå av lyset eller varmen etter seg. Deltakerne
            har en positiv tilnærming til teknologi, og de kan gjerne tenke seg
            at smart hjem applikasjoner kan forbedre hverdagen deres, eller
            bidra når de selv ikke strekker til (glemmer). For noen brukere var
            motivasjonen knyttet til strømprisene, enn selve forbruket. Det
            kommer også frem at samtlige leverandører låser brukerne deres til
            deres merkevare og gjør det tungtvindt å skifte.
          </p>
          <p>
            Dette ga oss grunnlag til å utvikle en personas og en overordnet
            sitemap av sidene til vår tenkte løsning
          </p>
        </div>
        <div className="flex py-12 gap-12">
          <div className="w-1/2">
            <h2 className="text-xl font-bold font-robotoserif">🧑 Personas</h2>
            <p className="my-4">
              I interaksjonsdesign er persona mye brukt, og fungerer som et
              verktøy ved utvikling av løsninger. Hensikten med å utvikle
              personas er at de vil bidra til å utvikle en løsning til en
              spesifikk, og ikke en generisk sluttbruker. Bruker man dette
              verktøyet riktig vil det være til stor hjelp i designprosessen.
            </p>
            <Modal3 />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold font-robotoserif">🗺️ Sitemap</h2>
            <p className="my-4">
              Site Map ser følgende ut. Denne er basert på den første User-Flow
              skissen som vi har laget der vi prøvde å tegne fram de
              funksjonalitetene vi ønsker å ha med. Noen endringer er blitt
              gjort på bakgrunn av nye ideer og noe kompromisser vi måtte ta.
            </p>
            <Modal4 />
          </div>
        </div>

        <div className="flex gap-12 py-12">
          {" "}
          <div className="w-1/2">
            <h2 className=" text-xl font-bold font-robotoserif">
              📱 Low-Mid Wireframe
            </h2>
            <p className="my-4">
              Wireframes brukes tidlig i interaksjonsprosessen for å utforske
              konsepter, og vise hvordan løsninger kan imøtekomme potensielle
              klienter. Det sparer tid og tilpasning senere for teamet, og gir
              en grunnleggende struktur før visuell design legges til.
            </p>
            <Modal5 />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold font-robotoserif">
              👥 Brukertest
            </h2>
            <p className="my-4">
              Formålet med å gjennomføre brukertesting er å få tilbakemeldinger
              på løsningen fra eventuelle sluttbrukere. Selv om vi tar
              utgangspunkt i prinsipper som er forankret i teori ved utviklingen
              av løsningen – vil det være stor verdi ved å se på løsningen
              gjennom brukerens øyne
            </p>
            <Modal6 />
          </div>
        </div>
        <div className="py-16">
          {" "}
          <h1 className=" text-3xl font-bold mb-4">↩️ Iterasjoner</h1>
          <p className="my-4">
            Basert på tilbakemeldinger og resultater fra brukerundersøkelsen,
            har vi endret og forbedret løsningens funksjonalitet.
          </p>
          <ul className="list-decimal pl-6">
            <li className="pb-2">
              Vi har økt størrelsen på ikonene og økt klikkeflaten til 44x44px.
              Og gjevnt over forbedret UI, slik at det er lettere for brukere å
              gjennkjenne hovedfunksjonalitet.
            </li>
            <li className="pb-2">
              Vi har hatt noen iterasjoner alene på legg til flow, og har kommet
              frem til en trinnvis flow der brukeren enkelt og kjapt kan legge
              til scene eller enthet.
            </li>
            <li className="pb-2">
              Vi valgte å fjerne "grønn-modus-knapp" da den skapte mer
              forvirring enn glede. Vi valgte heller å gi brukeren mulighet til
              å legge til strømsparing som et scenario i smarthjem-panelet.
            </li>
          </ul>
        </div>
        <div className="py-8">
          <h1 className=" text-3xl font-bold mb-4">🎨 Visuell design</h1>

          <p className="my-4">
            For å oppnå et bra visuelt design har vi gått ut i fra 8pt-grid og
            sørger for at alle størrelser passer i hverandre. Vi har også valgt
            ut standar farge, skrift og ikoner. Dette skaper struktur og
            trygghet i designprosessen. Løsningen er i tillegg testet i forhold
            til WCAG.2.1 standaren, og oppfyller krav til kontrast på farger,
            tekst og bakgrunn.
          </p>
          <div className="flex gap-12">
            <div>
              <h2 className=" text-2xl font-bold mb-4">Farge</h2>
              <img className="" src={fargebruk} alt="tibber-logo" />
            </div>
            <div>
              <h2 className=" text-2xl font-bold mb-4">Skrift</h2>
              <img className="" src={skriftbruk} alt="tibber-logo" />
            </div>
          </div>
          <div>
            <h2 className=" text-2xl font-bold mb-4">Ikoner</h2>
            <img className="" src={ikonbruk} alt="tibber-logo" />
          </div>
        </div>
        <div className="py-12">
          <h1 className=" text-3xl font-bold mb-4">🔮 Konklusjon</h1>
          <div className="grid gap-x-4 grid-cols-2 justify-end">
            <div>
              <p className="my-4">
                Å designe for en strøm applikasjon har definitivt utvidet vår
                forståelse av strøm industrien med all dets utfordring. Det var
                lærerikt og viktig for oss å utføre en undersøkelse og
                spørreundersøkelse, for å identifisere de problemene og
                utfordringene vi møtte på og designe en løsning utfra noen
                smertepunkter brukerne har. Det finnes for eksempel mange
                applikasjoner som styrer strøm og enheter hjemme, men det finnes
                ikke en applikasjon som tilbyr det sammen. Ofte er disse
                applikasjonene eksklusivt knyttet til spesifikke varemerker. Vår
                løsning utfordrer flere av smertepunkter innen smart-home
                applikasjon og strøm applikasjoner. Dette har gjort at vi har
                utfordret våre design ferdigheter til det ytterste, der hvor vi
                måtte være nøye med informasjonsarkitekturen til en slik
                omfattende applikasjon. Brukerundersøkelsene vi gjorde og de
                tilbakemeldingene vi fikk gir oss viktig innsyn i hvordan vi
                kunne forhindre å skremme brukerne våre med for altfor mye
                kompleksitet og legge inn praktiske funksjonaliteter på en
                enklest mulig måte.
              </p>
            </div>
            <iframe
              title="finalversion"
              className=" border-solid border-2 border-neutral-400 w-full h-[700px]"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F74MmSd8GnLqfBh7aWcAucS%2FWireframe%3Fpage-id%3D450%253A3211%26node-id%3D450-3257%26viewport%3D609%252C186%252C0.26%26scaling%3Dscale-down%26starting-point-node-id%3D450%253A3212"
              allowfullscreen
            ></iframe>
          </div>

          <h1 className=" text-3xl font-bold my-12">🛣️ Veien videre</h1>

          <p className="my-4">
            Hvis prosjektet hadde hatt en lengre tidshorisont, hadde jeg ønsket
            å jobbe videre med:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Å skape en dypere forståelse av brukere og finne flere smertepunkt
              å løse ut i fra
            </li>
            <li>
              Lage en aktuell og tidsriktig logo og identiet til oppgavens
              strømbedrift "Elektrond"
            </li>
            <li>Teste, iterere og repitere!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
