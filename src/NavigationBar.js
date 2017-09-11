import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { logedin: false, name: "Unknown" }; // <- set up react state
  }
  componentWillMount(){
    /* Check if the user is logged in */
      this.setState({ logedin: false });
  }

  render() {
    let isloggedin;
    if (this.state.logedin===true){
      isloggedin=(
        <Nav pullRight>
          <NavDropdown eventKey={3} title={this.state.name}id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="/perfil">Perfil</MenuItem>
            <MenuItem eventKey={3.2} href="/ajustes">Ajustes</MenuItem>
            <MenuItem eventKey={3.3} href="/logout">Salir</MenuItem>
          </NavDropdown>
        </Nav>
      )
    }else {
      isloggedin=(
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Login</NavItem>
          <NavItem eventKey={2} href="#">Registrarse</NavItem>
        </Nav>
      )
    }
    return (
      <div className="NavigationBar">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Find My Puesto</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav>
                /*"Elementos a la izquierda"
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">{this.state.name}</NavItem>*/
              </Nav>
                {isloggedin} //"Depende del estado de logedin"
            </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
