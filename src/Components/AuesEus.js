import React from "react";
import aueseusvesuvio from "./Immagini/aueseusvesuvio.png";
import cratere from "./Immagini/Cratere.jpeg";

import styled from "styled-components";

const Container = styled.div`
  margin: 0 !important;
  padding: 0 !important;
`;
const PatrociniSection = styled.section`
  font-size: 1rem !important;
`;
const TitoloSezione = styled.h1`
  animation: slideInAndFade 1s ease-in-out;

  @keyframes slideInAndFade {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
const Descrizione = styled.p`
  font-size: 1.1rem ;

  text-align: start;
  margin-bottom: 30px;
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 485px) and (max-width: 571px) {
    text-align: center !important;
    font-size 1.4rem !important;
    margin-left: 0 !Important;
  } 
  @media (max-width: 485px) {
    font-size: 0.7rem;
    padding: 20px 0 0 0 !important;

  } 


`;
const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .container-imamgine-descrizione {
    padding-right: 0;

    @media (max-width: 991px) {
      padding-right: 0 !important;
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;

    .descrizioni {
      text-align: center;
      margin-top: 20px;
    }
  }
`;
const Sezione = styled.div`
  margin: 5rem 10rem !important;
  @media (max-width: 487px) {
    h3,
    h2,
    h5 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 1060px) {
    margin: 5rem 4rem !important;
  }
  @media (max-width: 570px) {
    margin: 5rem 2rem !important;
  }
`;

export default function Patrocini() {
  return (
    <PatrociniSection
      style={{
        backgroundColor: "#181818",
      }}
    >
      <Container
        class=" px-5 py-5 mt-5 rounded-5"
        style={{ backgroundColor: "#f4f1ee" }}
      >
        <div
          className="p-5 d-flex justify-content-start align-items-center text-center bg-image"
          style={{
            backgroundImage: `url(${aueseusvesuvio})`,
            height: "60vh",
          }}
        >
          <TitoloSezione
            style={{ borderLeft: "2px solid white" }}
            className="ml-5 pl-5"
          >
            <h1
              className="mb-0"
              style={{ color: "white", fontWeight: "bolder" }}
            >
              AUES EUS
            </h1>
          </TitoloSezione>
        </div>
        <CenteredDiv class="row align-items-center justify-content-center">
          <Sezione class="col-xl-12 col-lg-12 col-md-10">
            <div className="d-flex flex-column">
              <h2 className="text-center">
                PRIMA LETTERA DI PLINIO IL GIOVANE A TACITO
              </h2>
              <p>
                "Mio zio si trovava a Miseno dove comandava la flotta. Il 24
                agosto, nel primo pomeriggio, mia madre attirò la sua attenzione
                su una nube di straordinaria forma e grandezza. Egli aveva fatto
                il bagno di sole, poi quello d'acqua fredda, si era fatto
                servire una colazione a letto e in quel momento stava studiando.
                Fattesi portare le scarpe si recò su un luogo elevato da dove si
                poteva benissimo contemplare il fenomeno. Una nube si levava in
                alto, ed era di tale forma ed aspetto da non poter essere
                paragonata a nessun albero meglio che a un pino. Infatti,
                drizzandosi come su un tronco altissimo, si allargava poi in una
                specie di ramificazione; e questo perché, suppongo io, sollevata
                dal vento proprio nel tempo in cui essa si formava, poi, al
                cedere del vento, abbandonata a sé o vinta dal suo stesso peso,
                si diffondeva ampiamente per l'aria dissolvendosi a poco a poco,
                ora candida, ora sordida e macchiata, secondo che portasse con
                sé terra o cenere. A mio zio, che era uomo dottissimo, tutto ciò
                parve un fenomeno importante e degno di essere osservato più da
                vicino, per cui ordinò che si preparasse una liburnica
                offrendomi se volevo, di andare con lui. Risposi che preferivo
                studiare: era stato lui stesso, infatti, ad assegnarmi qualcosa
                da scrivere. Mentre usciva di casa gli venne consegnato un
                biglietto di Retina, moglie di Casco, la quale, spaventata
                dall'emminente pericolo (perché la sua villa stava in basso e
                ormai non v'era altra via di scampo che montare su una nave), lo
                supplicava di liberarla da una situazione così tremenda. Mio zio
                allora modificò il suo piano e compì con eroico coraggio quel
                che si era accinto a fare per ragioni di studio. Diede ordine di
                mettere in mare le quadriremi e vi salì egli stesso con
                l'intenzione di correre in aiuto non solo di Retina, ma di molti
                altri, perchè quell'amenissima costa era fittamente popolata. In
                gran fretta si diresse là, da dove gli altri fuggivano,
                navigando diritto tenendo il timone verso il luogo del pericolo
                con animo così impavido da dettare o annotare egli stesso ogni
                nuova fase e ogni aspetto di quel terribile flagello, come gli
                si veniva presentando allo sguardo. Già la cenere cadeva sulle
                navi tanto più calda e fitta quanto più esse si avvicinavano;
                già cadevano anche pomici e pietre nere, arse e frantumate dal
                fuoco; poi improvvisamente si trovarono in acque basse e il lido
                per i massi rotolati giù dal monte era divenuto inaccessibile.
                Egli rimase un momento incerto se dovesse tornare indietro. Poi,
                al pilota che lo consigliava, disse:"La fortuna aiuta gli
                audaci; drizza la prora verso la villa di Pomponiano a
                Stabiae!". Questa località era sull'altra parte del golfo
                (perché la costa, girando e incurvandosi gradatamente, forma
                un'insenatura che il mare invade con le sue acque). Ivi, quando
                il pericolo non era ancora imminente, ma era stato veduto e,
                crescendo, s'era fatto più vicino, Pomponiano aveva imbarcato i
                suoi bagagli, deciso a fuggire nel caso il vento contrario si
                quietasse. Il vento favoriva in sommo grado la navigazione di
                mio zio, il quale, appena giunto, abbraccia l'amico tremante, lo
                conforta, lo incoraggia e, per calmare l'agitazione con
                l'esempio della propria tranquillità d'animo, si fa portare nel
                bagno; dopo essersi lavato, si mette a tavola e pranza
                tranquillamente o, cosa egualmente grande, in aspetto di persona
                serena. Intanto su più parti del Vesuvio risplendevano larghe
                strisce di fuoco e alti incendi, il cui bagliore e la cui luce
                venivano aumentati dall'oscurità della notte. Lo zio, per
                liberare gli animi dalla paura, andava dicendo che quelli che
                ardevano erano fuochi lasciati accesi dai contadini nella loro
                fuga precipitosa, e ville abbandonate che bruciavano nella
                solitudine. Poi si mise a dormire, e dormì veramente poiché la
                respirazione, molto grave e sonora per la grossezza del corpo,
                era udita da tutti coloro che passavano davanti alla porta della
                sua camera. Ma il piano del cortile, a causa della grande
                quantità di cenere mista a pietre pomici da cui era stato
                riempito, si era talmente innalzato che lo zio, se fosse rimasto
                più a lungo nella camera da letto, non avrebbe potuto uscirne.
                Svegliato venne fuori e si unì a Pomponiano e agli altri che
                avevano trascorso tutta la notte senza chiudere occhio. Si
                consultarono se dovessero rimanere in casa o tentare di uscire
                all'aperto: infatti per frequenti e lunghi terremoti la casa
                traballava e dava l'impressione di oscillare in un senso o
                nell'altro come squassata dalle fondamenta. Stando però
                all'aperto v'era da temere la caduta delle pietre pomici, anche
                se queste sono leggere e porose. Alla fine confrontati i
                pericoli, fu scelto quest'ultimo partito. Prevalse in mio zio la
                più ragionevole delle due soluzioni, negli altri invece il più
                forte dei timori. Si misero dei cuscini sul capo e li legarono
                con fazzoletti: e questo servì loro per protezione contro le
                pietre che cadevano dall'alto. Mentre altrove faceva giorno,
                colà era notte, più oscura e più fitta di tutte le altre notti,
                sebbene fosse rischiarata da fiamme e bagliori. Fu deciso di
                recarsi alla spiaggia per vedere da vicino se fosse possibile
                mettersi in mare; ma il mare era ancora pericoloso perché
                agitato dalla tempesta. Allora fu steso un lenzuolo per terra e
                mio zio vi si adagiò sopra, poi chiese più volte acqua fresca da
                bere. In seguito le fiamme e un odor di zolfo annunciatore del
                fuoco costrinse agli altri di fuggire e a lui di alzarsi. Si
                tirò su appoggiandosi a due schiavi, ma ricadde presto a terra.
                Secondo me, l'aria troppo impregnata di cenere deve avergli
                impedito il respiro ostruendogli la gola, che per natura era
                debole, angusta e soggetta a frequenti infiammazioni. Quando il
                giorno dopo tornò a risplendere (era il terzo da quello che egli
                aveva visto per l'ultima volta), il suo corpo fu trovato
                intatto, illeso, coperto dalle medesime vesti che aveva indosso
                al momento della partenza; l'aspetto era quello di un uomo
                addormentato, piuttosto che d'un morto." Versione tradotta dal
                latino di Plinio Caio Gracco (da Pompei Online)
              </p>
            </div>
            <div class=" d-flex justify-content-center p-0 mt-5">
              <div className=" d-flex flex-column justify-content-center text-center">
                <h3
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  className="col-12"
                >
                  BIMILLENNARIO DELLA NASCITA DI PLINIO IL VECCHIO (Como 23-
                  Stabia 79)
                </h3>
                <h5
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  className="col-12"
                >
                  Quando la storia finisce …inizia la creatività
                </h5>
                <h2
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                  className="col-12"
                >
                  “Aues Eus. Vesuvio luce che brucia“
                </h2>
                <h2
                  style={{
                    fontStyle: "italic",
                    color: "black",
                  }}
                  className="col-12"
                >
                  Plinio intuisce/scolpisce il magma{" "}
                </h2>
              </div>
            </div>
            <Descrizione
              className="pt-5 col-12 text-center"
              style={{ color: "black" }}
            >
              È un’incursione di Enzo Marino nell’animo e nell’esperienza
              trascendente di Gaius Plinius Secundus mentre lascia l’ "ager
              stabianus” per inoltrarsi nel mondo dell’Ade.
            </Descrizione>
            <Descrizione style={{ color: "black" }}>
              &lt;&lt; È la rievocazione/restauro degli ultimi pensieri di
              Plinio, mentre transita dal sopore, provocato dai gas del cratere,
              verso il regno delle ombre. Il desiderio estremo di comprendere il
              fenomeno eruttivo, che Plinio stava vivendo sulla sua pelle e a
              lui sconosciuto, si trasforma in un eccezionale prodigio che va
              oltre il sentire umano ma che fa ancora provare cose
              impercettibili ma stupefacenti. Plinio contesta duramente gli dei
              che gli hanno riservato una fine così poco onorevole, non solo
              come ammiraglio ma essenzialmente come uomo del discernimento e
              del libero pensiero e lo fa con tale veemenza da mettere in
              difficoltà le divinità. E così l’eterno buio, per volere divino,
              non avanza più ma rimane fermo per far vivere l’incanto di un
              tempo sospeso e permettere a Plinio di scoprire la realtà
              eruttiva. Enzo Marino, artista inquieto, annullando l’intervallo
              di duemila anni, s’insinua in questo mistero, ospita in se lo
              spirito di Plinio, acquisisce l’antica smania, attizza la sua
              follia e insieme scolpiscono il magma. È la compenetrazione di due
              personalità differenti, è la fusione di due esperienze estreme, è
              il legame tra due contesti dissimili eppure tanto vicini. È la
              continuità del modus operandi umano che fin dai tempi primigeni ha
              permesso all’uomo di ricercare “nell’antica memoria”, elaborare i
              ricordi, superare i suoi stessi traguardi e ricominciare così
              tutto daccapo. Semmai scavando nell’assurdo. In concreto è la
              smania dell’uomo di ieri e di oggi che non accetta le imposizioni,
              le prepotenze, le falsità, il comando assurdo, le decisioni
              altrui. E detesta la cieca obbedienza. Tutto questo sarà
              raccontato attraverso una performance multidisciplinare di gruppo
              in cui sarà realizzata la scultura performativa “scolpire il
              magma” come gesto allegorico della voglia di libertà assoluta
              &gt;&gt;
            </Descrizione>
            <div className="col-12 d-flex justify-content-center mt-2">
              <img
                className="img-fluid col-xl-5 col-lg-6 col-md-5 rounded-3 mb-5"
                src={cratere}
              />
            </div>
          </Sezione>
        </CenteredDiv>
      </Container>
    </PatrociniSection>
  );
}
