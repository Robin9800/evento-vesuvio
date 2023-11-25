// import React, { useState, useEffect } from "react";
// import { useTransition, animated } from "react-spring";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import styled from "styled-components";

// import Jumbotron from "./Jumbotron";
// import ScintillaJumbotron from "./ScintillaJumbotron";

// const HoverableFontAwesomeIcon = styled(FontAwesomeIcon)`
//   font-size: 1.25rem; /* Regola la dimensione dell'icona a tuo piacimento */
//   cursor: pointer;
//   color: black;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: yellow;
//   }
// `;

// const Carousel = () => {
//   const [current, setCurrent] = useState(1);
//   const [lastClickTime, setLastClickTime] = useState(0);
//   const intervalDelay = 15000; // 15 secondi

//   const components = [
//     { type: "jumbotron", props: { title: "Titolo Jumbotron", description: "Descrizione Jumbotron" } },
//     { type: "scintilla", props: { title: "Titolo Scintilla", description: "Descrizione Scintilla" } },
//     // Aggiungi altri tipi di componenti qui
//   ];

//   const nextComponent = () => {
//     setCurrent((prev) => (prev + 1) % components.length);
//     setLastClickTime(Date.now());
//   };

//   const prevComponent = () => {
//     setCurrent((prev) => (prev - 1 + components.length) % components.length);
//     setLastClickTime(Date.now());
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const timeSinceLastClick = currentTime - lastClickTime;

//       // Cambia slide solo se è passato almeno un intervallo di 15 secondi dall'ultimo clic sulla freccia
//       if (timeSinceLastClick >= intervalDelay) {
//         setCurrent((prev) => (prev + 1) % components.length);
//       }
//     }, intervalDelay);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [lastClickTime, intervalDelay, components.length]);

//   const transitions = useTransition(current, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     reset: true,
//     onRest: () => {},
//   });

//   return (
//     <div className="relative overflow-hidden">
//       <div className="flex">
//         {transitions((style, index) => (
//           <animated.div
//             key={index}
//             className="w-full flex-shrink-0"
//             style={{ ...style }}
//           >
//             {components[index].type === "jumbotron" && <Jumbotron {...components[index].props} />}
//             {components[index].type === "scintilla" && <ScintillaJumbotron {...components[index].props} />}
//           </animated.div>
//         ))}
//       </div>

//       <div className="absolute top-20 right-14">
//         <HoverableFontAwesomeIcon
//           icon={faChevronLeft}
//           onClick={prevComponent}
//           className="mx-3 p1"
//         />
//         <HoverableFontAwesomeIcon
//           icon={faChevronRight}
//           onClick={nextComponent}
//           className="mx-3 p1"
//         />
//       </div>
//     </div>
//   );
// };

// export default Carousel;
