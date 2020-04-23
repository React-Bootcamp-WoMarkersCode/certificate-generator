import React from "react";
import { Link } from "react-router-dom";
import logoWomakers from "../../assets/img/logo_texto_branco.png";
import "./style.css";

function Menu1Header() {
  return (
      <div className="menu-1-header" >
          <Link to="/"><img className="logo-menu-header" src={logoWomakers} alt="logo" /></Link>

          <ul className="menu-list-header">
            <Link to="/"><li>Home</li></Link>
            <Link to="/sign-up"><li>Cadastro</li></Link>
            <Link to="/sign-in"><li>Login</li></Link>
          </ul>
      </div>
  );
}

export default Menu1Header;