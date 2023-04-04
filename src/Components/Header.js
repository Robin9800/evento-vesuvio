import React from "react";

const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "100%",
        }}
      >
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyle: "none",
            }}
          >
            <li>Sponsor</li>
            <li>Creatori</li>
            <li>Giornali</li>
            <li>Informazioni</li>
          </ul>
        </nav>
      </header>
      <h1 style={{ textAlign: "center" }}>Titolo della mostra</h1>
    </>
  );
};

export default Header;
