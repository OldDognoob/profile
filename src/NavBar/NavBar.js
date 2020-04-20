import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaHome
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
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
          <NavbarBrand href="/">"Never fly in the same cockpit with someone braver than you"</NavbarBrand>
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