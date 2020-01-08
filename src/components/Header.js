import { Nav, Navbar, NavDropdown, MenuItem } from "react-bootstrap";
import Router from "next/router";

const basicInfo = () => {
  Router.push("/documents/basicInfo");
};

function Header() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/documents'>週次進捗会</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown
            href='/documents/basicInfo'
            title='メニュー'
            id='basic-nav-dropdown'
          >
            <MenuItem onClick={basicInfo}>基本情報一覧</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
