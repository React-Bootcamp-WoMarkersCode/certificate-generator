import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import logoWomakers from "../../assets/img/logo_texto_cinza.png";
import "./style.css";

/*Menu criado para estar somente na pagina Home por conta das propriedades z-index:1 e position: fixed*/
function Menu1Header() {
  return (
    <Layout>
      <Menu className="menu-1-header" >
        <div className="logoWomakers">
          <Link to="/"><img src={logoWomakers} alt="logo" /></Link>
        </div>

        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/sign-up">Cadastro</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/sign-in">Login</Link>
        </Menu.Item>
      </Menu>
    </Layout>
  );
}

export default Menu1Header;
