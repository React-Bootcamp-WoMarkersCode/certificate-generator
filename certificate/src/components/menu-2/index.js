import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import logoWomakers from "../../assets/img/logo_texto_cinza.png";
import "./style.css";

function Menu2() {
  return (
    <Layout>
      <Menu className="menu-2" theme="light">
        <div className="logoWomakers">
          <img src={logoWomakers} alt="logo" />
        </div>

        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/profile">Meu Perfil</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/list-of-events">Eventos</Link>
        </Menu.Item>
      </Menu>
    </Layout>
  );
}

export default Menu2;
