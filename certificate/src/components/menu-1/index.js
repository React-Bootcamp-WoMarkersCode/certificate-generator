import React from "react";
import { Link } from "react-router-dom";
import logoWomakers from "../../assets/img/logo_texto_cinza.png";
import "./style.css";

function MenuComponent() {
  return (
      <div className="menu-1" >
          <Link to="/"><img className="logo-menu" src={logoWomakers} alt="logo" /></Link>

          <ul className="menu-list">
            <Link to="/sign-up"><li>Cadastro</li></Link>
            <Link to="/sign-in"><li>Login</li></Link>
          </ul>
      </div>
  );
}

export default MenuComponent;