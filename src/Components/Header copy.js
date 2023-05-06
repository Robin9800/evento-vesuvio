import React, { useState, useEffect } from "react";
import InternationalArtists from "./Immagini/International Artists.jpeg";
import Parcovesuvio from "./Immagini/Parco Vesuvio.jpeg";
import Napoli from "./Immagini/Napoli.png";
import Vigama from "./Immagini/Vigama.jpeg";
import Mav from "./Immagini/mav.jpeg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import styled from "styled-components";

const Navbar = styled(MDBNavbar)`
  padding: 1rem;
  background-color: transparent;
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
  }
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
    padding: 0.5rem 0 0 0;
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

const Hamburger = styled(MDBNavbarToggler)`
  color: white;

  /* Aggiunto questo stile */
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='30' height='30' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cspan class='sr-only'%3eToggle navigation%3c/span%3e%3cpath d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

const Li = styled(MDBNavbarItem)`
  margin-right: 20px;
  margin-left: 20px;
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
    font-size: calc(
      18px * 0.6
    ); /* diminuisce del 40% rispetto alla dimensione di base */
    max-width: 100% !important;
    height: auto !important;
    margin-bottom: 10px;
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 576px) and (max-width: 767.98px) {
    font-size: calc(
      18px * 0.7
    ); /* diminuisce del 30% rispetto alla dimensione di base */
    max-width: 50% !important;
    height: auto !important;
  }

  /* Stile per schermi con larghezza compresa tra 768px e 902px */
  @media (min-width: 768px) and (max-width: 902px) {
    font-size: calc(
      18px * 0.8
    ); /* diminuisce del 20% rispetto alla dimensione di base */
    max-width: 40% !important;
    height: auto !important;
  }

  @media (min-width: 902px) and (max-width: 1024px) {
    margin-right: 0;
    margin-left: 0;
    .container-fluid {
      margin: 0 !important;
    }
  }
  /* Stile per schermi con larghezza superiore a 903px */
  @media (min-width: 1024px) {
    font-size: 18px; /* dimensione del testo di base */
    max-width: 50%;
    height: auto;
  }
`;
const Link = styled(MDBNavbarLink)`
  text-decoration: none;
  color: white;
  padding: 1em;
  font-size: 1.1em;
  position: relative;
  white-space: nowrap; /* Aggiunto questa riga */

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
const Ul = styled(MDBNavbarNav)`
  justify-content: end;
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
      <Container fluid>
        <HeaderContainer>
          <Img
            className="img-fluid my-1 mr-3 rounded-1"
            src={InternationalArtists}
          />
          <Img
            className="img-fluid my-1 mr-3 rounded-1"
            src={Napoli}
            style={{ backgroundColor: "white" }}
          />
          <Img className="img-fluid my-1 mr-3 rounded-1" src={Vigama} />
          <Img className="img-fluid my-1 mr-3 rounded-1" src={Parcovesuvio} />
          <Img
            className="img-fluid my-1 rounded-3"
            style={{ backgroundColor: "white" }}
            src={Mav}
          />
        </HeaderContainer>
        <Hamburger
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </Hamburger>
        <MDBCollapse navbar show={showNav}>
          <Ul>
            <Li>
              <Link active aria-current="page" href="/">
                Home
              </Link>
            </Li>
            <Li>
              <Link href="/chi-siamo">Chi siamo</Link>
            </Li>
            <Li>
              <Link href="/aues-eus">Aues Eus</Link>
            </Li>
            <Li>
              <Link href="/patrocini">Patrocini</Link>
            </Li>
            <Li>
              <Link href="#">News</Link>
            </Li>
            <Li>
              <Link href="/contatti">Contatti</Link>
            </Li>
          </Ul>
        </MDBCollapse>
      </Container>
    </Navbar>
  );
}
