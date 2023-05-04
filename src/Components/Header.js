import React, { useState } from "react";
import "../Css/Header.css";
import InternationalArtists from ".//Immagini/International Artists.jpeg";
import Parcovesuvio from ".//Immagini/Parco Vesuvio.jpeg";
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
  background-color: #181818;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;
const Hamburger = styled(MDBNavbarToggler)`
  color: white;
`;
const Li = styled(MDBNavbarItem)`
  margin-right: 20px;
  margin-left: 20px;
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
const Container = styled(MDBContainer)`
  margin-right: 20px;
  margin-left: 20px;
`;
const Ul = styled(MDBNavbarNav)`
  justify-content: end;
`;

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Navbar expand="lg">
      <Container fluid>
        <img className="img-fluid my-1" src={InternationalArtists} />
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
              <Link active aria-current="page" href="#">
                Home
              </Link>
            </Li>
            <Li>
              <Link href="#">Informazioni</Link>
            </Li>
            <Li>
              <Link href="#">Collaboratori</Link>
            </Li>
            <Li>
              <Link href="#">Giornali</Link>
            </Li>
          </Ul>
        </MDBCollapse>
      </Container>
    </Navbar>
  );
}
