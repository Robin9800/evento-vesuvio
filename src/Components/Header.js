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
`;
const Hamburger = styled(MDBNavbarToggler)`
  color: white;
`;
const Li = styled(MDBNavbarItem)`
  margin-right: 20px;
  margin-left: 20px;
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 50% !important;
    height: auto !important;
  }

  /* Stile per schermi con larghezza compresa tra 768px e 902px */
  @media (min-width: 768px) and (max-width: 902px) {
    max-width: 40% !important;
    height: auto !important;
  }

  /* Stile per schermi con larghezza superiore a 903px */
  @media (min-width: 903px) {
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
  height: 45px !important;
  object-fit: cover;
  animation: slideInAndFade 1s ease-in-out;

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
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
    max-width: 60% !important;
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 576px) and (max-width: 767.98px) {
    max-width: 50%;
  }

  /* Stile per schermi con larghezza compresa tra 768px e 902px */
  @media (min-width: 768px) and (max-width: 902px) {
    max-width: 40% !important;
  }

  /* Stile per schermi con larghezza superiore a 903px */
  @media (min-width: 903px) {
    max-width: 50%;
  }
`;
const Container = styled(MDBContainer)`
  margin-right: 20px;
  margin-left: 20px;
`;
const HeaderContainer = styled(MDBContainer)`
  margin-right: 20px;
  margin-left: 20px;
  width: 45%;
  /* Stile per schermi con larghezza inferiore a 576px */
  @media (max-width: 575.98px) {
    width: 100%;
  }

  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }

  /* Stile per schermi con larghezza compresa tra 768px e 902px */
  @media (min-width: 768px) and (max-width: 902px) {
    width: 100%;
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
