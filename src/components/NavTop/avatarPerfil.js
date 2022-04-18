import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
const React = require("react");

function PerfilAvatar() {
  return (
    <div>
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="foto de perfil"
            loading="lazy"
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Perfil</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Anuncios</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}
export {PerfilAvatar};
