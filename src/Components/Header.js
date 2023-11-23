import React, { useState, useEffect } from "react";
import InternationalArtists from "./Immagini/International Artists.jpeg";
import Parcovesuvio from "./Immagini/Parco Vesuvio.jpeg";
import Napoli from "./Immagini/Napoli.png";
import Vigama from "./Immagini/Vigama.jpeg";
import Mav from "./Immagini/mav.jpeg";
import BccNapoli from "./Immagini/bcc.jpg";

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
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import styled from "styled-components";

const Navbar = styled(MDBNavbar)`
  background-color: ${({ bgColor }) =>
    bgColor ||
    "transparent"}; /* set background color based on passed prop or default to transparent */
  color: white;
  position: fixed;
  padding: 1rem 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: none;
  transition: all 0.3s ease-in-out;

  &.scrolled {
    background-color: #852211;
    padding: 0.4rem 0;
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
    background-color: #852211;
  }

  /* Stile per schermi con larghezza inferiore a 390px */
`;

const Hamburger = styled(MDBNavbarToggler)`
  color: white;
`;
const Ul = styled(MDBNavbarNav)`
  justify-content: end;
`;

const LinkAnnidato = styled(MDBDropdownItem)`text-decoration: none;
color: white;
font-size: 1.1em;
position: relative;

&:hover {
  color: #ffde14;
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
}`

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
  width: auto;
  margin: 0 6px;
  opacity: 1;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }

  &:nth-child(1) {
    transition-delay: 0.1s;
  }

  &:nth-child(2) {
    transition-delay: 0.2s;
  }

  &:nth-child(3) {
    transition-delay: 0.3s;
  }

  &:nth-child(4) {
    transition-delay: 0.4s;
  }

  &:nth-child(5) {
    transition-delay: 0.5s;
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
    height: 50px;
  }
`;
const NavbarToggle = styled(MDBNavbarToggler)`
  border-color: ${({ bgColor }) =>
    bgColor ||
    "white"}; /* set border color based on passed prop or default to white */
`;
export default function Header() {
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
          <Img src={Parcovesuvio} />
          <Img src={Mav} />
          <Img style={{ backgroundColor: "white" }} src={Napoli} />
          <Img src={Vigama} />
          <Img src={BccNapoli} />
        </MDBNavbarBrand>
        <Hamburger
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </Hamburger>
        <MDBCollapse className="mt-0" navbar show={showNavSecond}>
          <Link translate="no" className="mx-2" href="/">
            Home
          </Link>
          <Link className="mx-1" href="/chi-siamo">
            Chi siamo
          </Link>
          <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Eventi
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <LinkAnnidato link href="/aues-eus">Aues Eus</LinkAnnidato>
                  <LinkAnnidato link href="/scintilla">Scintilla dell'ingegno</LinkAnnidato>
                </MDBDropdownMenu>
              </MDBDropdown>

          <Link className="mx-1" href="/patrocini">
            Patrocini
          </Link>
          <Link translate="no" className="mx-1" href="/news">
            News
          </Link>

          <Link className="mx-1" href="/contatti">
            Contatti
          </Link>
        </MDBCollapse>
      </MDBContainer>
    </Navbar>
  );
}
