import React, { useState, useEffect } from "react";
import InternationalArtists from "./Immagini/International Artists.jpeg";
import Parcovesuvio from "./Immagini/Parco Vesuvio.jpeg";
import Napoli from "./Immagini/Napoli.png";
import Vigama from "./Immagini/Vigama.jpeg";
import Mav from "./Immagini/mav.jpeg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import styled from "styled-components";

const Navbar = styled(MDBNavbar)`
  padding: 1rem;
  background-color: transparent;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: none;
  transition: all 0.3s ease-in-out;

  &.scrolled {
    background-color: #852211;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;

    a {
      color: white;
      &:hover {
        color: #ffde14;
      }
    }
  }

  .navbar-collapse {
    justify-content: flex-end;
    margin-top: 1rem;

    &.show {
      background-color: black;
    }
  }
`;

const Hamburger = styled(MDBNavbarToggler)`
  color: white;
`;
const Ul = styled(MDBNavbarNav)`
  justify-content: end;
`;

const Link = styled(MDBNavbarLink)`
  text-decoration: none;
  color: white;
  font-size: 1.1em;
  position: relative;

  &:hover {
    color: #ffde14;
  }

  &.active {
    background-color: transparent !important;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #ffde14;
    width: 0;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 992px) and (max-width: 1170px) {
    font-size: 0.7rem;
  }
`;
const Img = styled.img`
  height: 45px;
  animation: slideInAndFade 1s ease-in-out;
  width: 100%;

  @keyframes slideInAndFade {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  /* Stile per schermi con larghezza inferiore a 390px */
  @media (max-width: 390px) {
    margin-right: 0 !important;
    height: 10px;
  }
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 473px) {
    height: 15px;
  }
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
    height: 25px;
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 35px;
  }

  /* Stile per schermi con larghezza compresa tra 768px e 902px */
  @media (min-width: 768px) and (max-width: 902px) {
    height: 40px;
  }

  /* Stile per schermi con larghezza superiore a 903px */
  @media (min-width: 903px) and (max-width: 1440px) {
    height: 50px;
  }

  /* Stile per schermi con larghezza superiore a 1440px */
  @media (min-width: 1441px) {
    height: 45px;
  }
`;
const Container = styled(MDBContainer)`
  margin-right: 20px;
  margin-left: 20px;
  /* Stile per schermi con larghezza inferiore a 390px */
  @media (max-width: 390px) {
    display: flex;
    
  }
  /* Stile per schermi con larghezza inferiore a 576px */

  }
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
    margin: 0 10px 0 10px;
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 576px) and (max-width: 767.98px) {
  }

  /* Stile per schermi con larghezza compresa tra 768px e 902px */
  @media (min-width: 768px) and (max-width: 902px) {
  }

  /* Stile per schermi con larghezza superiore a 903px */
  @media (min-width: 902px) and (max-width: 1000px) {
  }
`;
const HeaderContainer = styled(MDBContainer)`
  margin-right: 20px;
  margin-left: 20px;
  width: 45%;
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 400px) {
    .navbar-nav > .nav-item:not(:first-child) {
      display: none;
    }
    .navbar-brand {
      display: block !important;
      width: 100%;
      text-align: center;
    }
  }
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
    width: 20%;
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 60%;
  }

  /* Stile per schermi con larghezza compresa tra 768px e 902px */
  @media (min-width: 768px) and (max-width: 902px) {
    width: 80%;
  }

  /* Stile per schermi con larghezza superiore a 903px */
  @media (min-width: 902px) and (max-width: 1000px) {
    width: 100%;
  }
`;

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavSecond, setShowNavSecond] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Img src={InternationalArtists} />
          <Img style={{ backgroundColor: "white" }} src={Napoli} />
          <Img src={Vigama} />
          <Img src={Parcovesuvio} />
          <Img src={Mav} />
        </MDBNavbarBrand>
        <Hamburger
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </Hamburger>
        <MDBCollapse navbar show={showNavSecond}>
          <Ul>
            <Link className="mx-2" href="/">
              Home
            </Link>
            <Link className="mx-2" href="/chi-siamo">
              Chi siamo
            </Link>
            <Link className="mx-2" href="/aues-eus">
              Aues Eus
            </Link>

            <Link className="mx-2" href="/patrocini">
              Patrocini
            </Link>
            <Link className="mx-2" href="#">
              News
            </Link>

            <Link className="mx-2" href="/contatti">
              Contatti
            </Link>
          </Ul>
        </MDBCollapse>
      </MDBContainer>
    </Navbar>
  );
}
