import {Nav, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";
import {PerfilAvatar} from "./avatarPerfil";
import {ButtonsOff} from "./buttonsOff";
const React = require("react");

function NavTop() {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />

        <Nav className="mr-5" navbar>
          <PerfilAvatar />
          <ButtonsOff />
        </Nav>
      </Navbar>
    </div>
  );
}
export {NavTop};
