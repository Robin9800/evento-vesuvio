import React from "react";
import styled from "styled-components";
import EnzoMarino from "./Immagini/EnzoMarino.jpeg";
import AnnaMarino from "./Immagini/AnnaMarino.jpeg";
import ImmaGatto from "./Immagini/ImmaGatto.jpeg";
import RedentaVitulano from "./Immagini/RedentaVitulano.jpeg";

const SpeakerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; // aggiunto per centrare in verticale
`;

const SpeakerColumn = styled.div`
  flex-basis: 100%;
  margin-bottom: 30px;
  margin: 0 auto; // aggiunto per centrare in orizzontale
`;

const Img = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const SpeakerCaption = styled.figcaption`
  h3 {
    text-align: start;
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
    color: #212529;
  }

  p {
    text-align: start;
    font-size: 1.2rem !important;
    font-weight: bolder;
    margin-bottom: 30px;
    color: #868g99;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        display: block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        border-radius: 50%;
        transition: transform 0.2s ease-out;

        &:hover {
          transform: translateY(-3px);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 2px #ffc107;
        }
      }

      .fab {
        font-size: 18px;
      }

      .fa-twitter {
        background-color: #1da1f2;
      }

      .fa-linkedin {
        background-color: #0077b5;
      }

      .fa-github {
        background-color: #333;
      }
    }
  }
`;

function EnzoInfo() {
  return (
    <SpeakerWrapper>
      <SpeakerColumn>
        <div className="d-flex justify-content-center flex-column mx-5">
          <div class="col-xl-12 col-lg-7 col-md-10 d-flex justify-content-center p-0">
            <div className="col-4 col-md-12">
              <Img
                style={{ height: "auto", width: "auto" }}
                className="img-fluid rounded-1"
                src={EnzoMarino}
                alt="Enzo"
              />
            </div>
          </div>

          <SpeakerCaption>
            <h3>
              Enzo Marino (1945 Casoria – Napoli) pittore, scultore italiano.
              Cavaliere della Repubblica Italiana.
            </h3>
            <p className="m-0">
              Frequenta la Scuola Libera del Nudo all’AA.BB.AA. di Napoli ma in
              effetti è allievo e maestro di se stesso. Nel 1975 produce la
              cartella serigrafica “Sedie” presente in vari musei del mondo.
              Organizza il “teatro d’azione” con studenti del rione “Fuori
              Porta” al Carnevale di Capua del 1977 Nel 1983 progetta il
              monumento al lavoro “θηρίο εργατικός”/”la bestia industriosa” per
              l’Alfa Romeo – Alfasud di Pomigliano d’arco. È capo delegazione
              degli artisti italiani al X Kongresses des Verbandes Bildender
              Kunstler 1988 der Deutsche Demokratische Republik (DDR) a Berlino
              Est. Conosce Erich Honecker, cancelliere della DDR, Ronald Paris
              co-fondatore della "Intergrafik Treinnale", e Willi Sitte,
              presidente del VBK. Vive personalmente la storica caduta della
              nomenklatura artistica tedesco orientale. Fa parte dei Comitati
              Scientifici “Progetto: Napoli 50/80”; “G. Garibaldi: uomo di
              libertà, uomo dell’umanità” Bergamo/Montevideo 2007/8;
              “Antifascismo e resistenza tra Acerra e Pomigliano d’Arco” - Liceo
              Imbriani 1984/85; “La Ruta de Quetzalcòatl en los Metros del
              Mundo” Tula de Allende México 2004; “Fetzen im Wind II- magie”
              Botanischen Gartens der Karl-Franzens-Universität Graz Austria
              2007; "2 Paìses 1 Tiempo China-México" Olimpiadi di Pechino 2008;
              Rags in the wind III” Mozirski Gaj - Park Cvetja -Mozirje
              (Slovenia) 2009. È menbro della commissione ministeriale per
              l’attribuzione di opere d’arte nel Palazzo di Giustizia di
              Palmi–Reggio Calabria. Gli viene conferito il premio “Virgilio “–
              UNESCO Napoli 1984 . Dal 1985 al 1998 è impegnato nel sindacato
              per la tutela delle arti e degli artisti; dal 1988 al 1993 fa
              parte della redazione della rivista “Arti Visive” di Roma mentre
              nel 2002 collabora con il periodico “Novus Campus” dell’IRES. Dal
              2002 è responsabile culturale dell’Istituto Fernando Santi di
              Roma. Nel 1995 inizia il percorso di performer producendo tra
              l’altro le -sculture performative- “Fetzen im WindII” UNI Graz
              2007,“Scolpisce l’aria” Mozirje Slovenia 2009, “Scolpisce il
              fuoco” Torino Italia 2010, “Scolpisce il canto” Napoli Italia
              2010, “scolpisce i Continenti” Civitella d’Agliano Italia 2015.
              Vive spesso in Germania dove allestisce diverse mostre: “Mythos
              Eros Magie”- Gallerie des Polnischen Kulturinstituts Berlin Mitte
              1998 patrocinata dal Cancelliere Helmut Kohl e delle Presidenze
              del Senato e della Camera della Repubblica Italiana; “I Tempi
              Mitici/ Die Mythishe Zeit” Stadtmuseum Erlangen 2011 Nel 1999
              allestisce la prima mostra di graffisculture “Graffi atavici”
              nelle Grotte di Pertosa (SA). Nel 2002 fonda il movimento Liberi
              Artisti Europei (TO), poi tramutato in Free International Artists
              (Parma 2003). Nel 2004 organizza “Graffi sull’Eden/Scratches on
              the Eden”nell’Orto Botanico UNI Napoli. 2005 -Gli viene conferito
              il premio dr. Miguel León Portilla" dall’Universidad Autonoma
              Metropolitana Ciudad de México. È tra gli artisti alle Olimpiadi
              di Pechino - CONI Casa Italia 2008. . Nel 2013 è direttore
              artistico e curatore dell’evento “Michelangelo abita a Casavatore”
              - Istituto A. De Curtis, un’opera di Michelangelo esposta per la
              prima volta al sud come azione anticamorra. È autore e regista del
              documentario “Stupro” (2014) sul set del Tamarìn Arte Gallery
              Marcianise Caserta. Il 10 ottobre 2015, al Teatro del Kulturni
              Center Lojze Bratuž di Gorizia gli viene assegnato il “Premio
              Franz Kafka Italia” per il libro “Belle pazzie e Bugiarde aurore”.
              Dal 2017 al 2018 allestisce la mostra “Permanente Storia e
              internazionalità” nel quadro del progetto Scuola/lavoro
              dell’Istituto Turistico/Tamarin Marcianise. Nel 2017 stabilisce il
              record mondiale per il dipinto più lungo realizzato nel Thar
              Desert Rajiastan India. Il “Bikaner Art Festival 2018 India” gli
              conferisce il Golden Plate alla carriera- 60 Years of Art. Nel
              2019 espone “…SAO KO KELLE TERRE...” nella Chiesa Longobarda di
              San Michele a Corte di Capua patrocinata dal Touring Club Italiano
              e la città di Capua. È presente come “star internazionale”
              all’evento Collecto’s Art Fair 2020 – India. Nel 2020 gli viene
              assegnato per la seconda volta il “Premio d’operosità” del Fondo
              PSMSAD/INPS. Nel 2021 produce la 5ta edición de “Trapos al Viento”
              es organizada en Miramar por el Ministerio de Cultura de
              Argentina. 2022 con l’avvento della guerra Russia-Ucraina
              organizza la V edizione di “Stracci al vento …di pace” al Parco
              Taglia di Cardito Italia e la VI edizione in piazza DI Capua a
              Bagnoli Irpino Italia Ha condotto per 5 anni, a cadenza mensile,
              il “Caffè artistico letterariodi E.M” al Caffè Sgambati. Ogni anno
              conferisce “La scintilla dell’ingegno” (VIII edizione) a studenti
              provetti e a personalità italiane esempi di integrità morale e
              professionale. Sue opere fanno parte di musei e collezioni
              pubbliche e private tra cui Stadtmuseum Erlangen D, Jordan
              National Gallery of Fine Arts, Cairo Amman Bank, Musei Lombardi.
            </p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>
    </SpeakerWrapper>
  );
}

export default EnzoInfo;
