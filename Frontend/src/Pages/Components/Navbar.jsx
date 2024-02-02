import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../CSS/HomePageCSS/HomePageNavbar.css";
export default function () {
  return (
    <>
      <Navbar bg="white" data-bs-theme="dark" sticky="top">
        {/* changed background color and sticky on top*/}
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img src="../../video (1).png" alt="Icon" />
            {/* png is from public folder */}
            <span className="IconText">MyTube</span>
            {/* <span className="TMText">™</span> */}
          </Navbar.Brand>
          <Nav className="me-auto NavbarLinkDiv">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
