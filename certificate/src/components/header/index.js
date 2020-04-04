import React from "react";
import Menu1 from "../menu-1/index";
import "./style.css";

function Header() {
  return (
    <div className="div-header">
      <Menu1 />

      <h2 className="h2-header">
        <span className="span-2">Gerador de</span>
      </h2>
      <h1 className="h1-header">
        <span className="span-1">Certificados</span>
      </h1>
    </div>
  );
}

export default Header;
