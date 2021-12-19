import React from "react";
import { Link } from "react-router-dom";
import { route } from "./../../Routes";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to={route.root}>FoodyMoody</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ul className="navbar-nav mr-auto">
              <li>
                <Link className="nav-link" to={route.home}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={route.aboutUs}>
                  About us
                </Link>
              </li>

              <NavDropdown title="Search Options" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link className="dropdown-item " to={route.advanceSearch}>
                    Advance Search
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/search-ingredients">
                    Search By Ingredients
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/search-calories">
                    Search by Calories
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link to="#" disabled>
                Link
              </Nav.Link>

              <li>
                <Link
                  className="nav-link btn border rounded-pill outline-success me-2"
                  to={route.login}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link btn border rounded-pill outline-success"
                  to={route.signUp}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
