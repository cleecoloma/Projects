import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { useShoppingBag } from "../context/ShoppingBagContent";

function Navbar() {
  const { openBag, bagQuantity } = useShoppingBag();
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {bagQuantity > 0 && (
          <Button
            onClick={openBag}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              fill="currentColor"
              class="bi bi-bag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
            <div
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            >
              {bagQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
