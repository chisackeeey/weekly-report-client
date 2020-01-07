import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='/documents'>週次進捗会</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default Header;
