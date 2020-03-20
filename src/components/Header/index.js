import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { slide as Menu } from 'react-burger-menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

class Header extends Component {
  state = {
    dropdownOpen: false
  }

  render() {
    return (
      <header className="app-header navbar">
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>

          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>

        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a onClick={this.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                Teste
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center">
                  <strong>Conta</strong>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>

          <li className="nav-item hidden-md-down">
            Oi
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;