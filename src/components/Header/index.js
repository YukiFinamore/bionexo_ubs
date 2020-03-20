import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { slide as AsideMenu } from 'react-burger-menu';
import Truncate from 'react-truncate';
import { FaUserAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

class Header extends Component {
  state = {
    dropdownOpen: false
  }

  render() {
    return (
      <header className="app-header navbar">
        <div className="header-item">
          <AsideMenu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>

            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </AsideMenu>
        </div>

        <div className="logo-box header-item">
          <img src="img/bionexo-logo.png" alt="Logo" />
        </div>

        <div className="user-area-container header-item">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="user-info-box">
                <Truncate lines={1} ellipsis={<span>...</span>}>
                  Empresa com o nome fantasia muito grande mesmo.
                </Truncate>

                <p> 79.424.862/0001-00 </p>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/profile">Perfil</Dropdown.Item>
              <Dropdown.Item href="#/settings">Configurações</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="icon-box">
                <FaUserAlt/>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/sign-out">Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
    )
  }
}

export default Header;