import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/store/cpu" as={NavLink}>
            CPU
          </Nav.Link>
          <Nav.Link to="/store/gpu" as={NavLink}>
            GPU
          </Nav.Link>
          <Nav.Link to="/store/storage" as={NavLink}>
            Storage
          </Nav.Link>
          <Nav.Link to="/store/memory" as={NavLink}>
            Memory
          </Nav.Link>
          <Nav.Link to="/store/motherboard" as={NavLink}>
            Motherboard
          </Nav.Link>
          <Nav.Link to="/store/powersupply" as={NavLink}>
            Power Supply
          </Nav.Link>
          <Nav.Link to="/store/cases" as={NavLink}>
            Cases
          </Nav.Link>
          <Nav.Link to="/store/cooling" as={NavLink}>
            Cooling
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
