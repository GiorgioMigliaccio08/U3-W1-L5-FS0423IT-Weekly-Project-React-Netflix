// Importo tutti i componenti di cui avrò bisogno

import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Button,
} from "react-bootstrap";
// IMPORTO LOGO

import logo from "../netflix_logo.png";
import kidsIcon from "../kids_icon.png";

// IMPORTO LE ICONE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// IMPLEMENTO LA STRUTTURA DELLA MIA NAV

const NavBar = (props) => {
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark" fluid>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" width={120} className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Tv Shows</Nav.Link>

              <Nav.Link href="#" className="nav-link active text-white">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="nav-link active text-white">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="nav-link active text-white">
                My List
              </Nav.Link>
            </Nav>

            <Nav.Link
              href="#"
              className="nav-link active text-white me-2 mt-3"
            ></Nav.Link>
            <Nav.Link
              href="#"
              className="nav-link active text-white fw-bold me-2 mt-3"
            >
              KIDS
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src={kidsIcon}
                  alt="logo"
                  width={40}
                  className="navbar-logo mt-2"
                />
              }
              id="navbarScrollingDropdown"
              className="text-white"
            ></NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="bg-dark">
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-start">
            <h2 className="fw-bold  ms-3 mt-3 mb-3 text-white fw-bold fs-5">
              TV Shows
            </h2>
            <div className="dropdown">
              <Button
                variant="outline-light"
                className="btn-square dropdown-toggle ms-2 mt-2 fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end mt-3 mb-3">
            <div>
              <Button variant="outline-light" className="btn-square me-2">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
              <Button variant="outline-light" className="btn-square">
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavBar;
