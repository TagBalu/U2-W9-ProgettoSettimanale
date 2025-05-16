import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { BsSearch, BsBell, BsPersonCircle } from "react-icons/bs";

function BasicExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#221f1f" }} variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/netflix-logo.png" // Assicurati che il logo si trovi in /public/netflix-logo.png
            alt="Netflix Logo"
            style={{ width: "100px" }} // Puoi regolare la dimensione del logo
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbraSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContetetn">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <BsSearch className="text-light mx-2" style={{ fontSize: "1.5rem" }} />
            <div id="kids" className="fw-bold text-light mx-2" style={{ fontSize: "0.8em" }}>
              KIDS
            </div>
            <BsBell className="text-light mx-2" style={{ fontSize: "1.2em" }} />
            <BsPersonCircle className="text-light mx-2" style={{ fontSize: "1.2em" }} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
