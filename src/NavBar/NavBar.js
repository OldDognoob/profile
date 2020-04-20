import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaHome
} from "react-icons/fa";
import NavbarCss from "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/">Dimos Christidis</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                  <FaHome />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/dimos.christidis">
                  <FaFacebookSquare />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com/dimoschristidis/">
                  <FaInstagramSquare />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/OldDognoob">
                  <FaGithubSquare />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Project 1</DropdownItem>
                  <DropdownItem>Project 2</DropdownItem>
                  <DropdownItem>Project 3</DropdownItem>
                  <DropdownItem>Project 4</DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}