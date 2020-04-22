import React from "react";
import Menu1Header from "../menu-1-header/index";
import "./style.css";

function Header() {
  return (
    <div className="div-header">
      <Menu1Header />

      <h2 className="h2-header">
        Gerador de 
        Certificados
      </h2>
    </div>
  );
}

export default Header;
