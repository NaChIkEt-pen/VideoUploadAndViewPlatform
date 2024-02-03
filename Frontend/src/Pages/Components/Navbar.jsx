import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// icons
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

// CSS
import "../../CSS/HomePageCSS/HomePageNavbar.css";
export default function () {
  return (
    <>
      <Navbar bg="#0F0F0F" data-bs-theme="dark" sticky="top">
        {/* changed background color and sticky on top*/}
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img src="../../video (1).png" alt="Icon" />
            {/* png is from public folder */}
            <span className="IconText">MyTube</span>
            {/* <span className="TMText">™</span> */}
          </Navbar.Brand>
          {/* <Nav className="me-auto NavbarLinkDiv">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
        <Form className="searchBarDiv">
          <Row>
            <Col xs="auto" className="searchBarTextCol">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 searchBarText"
              />
            </Col>
            <Col xs="auto" className="searchBarBtnCol">
              <Button type="submit" className="searchBarSeaButton">
                <FaMagnifyingGlass />
              </Button>
            </Col>
          </Row>
        </Form>
        <div>
          {/* <Button type="submit" className="navbarVideoAddButton">
            <AiOutlineVideoCameraAdd />
          </Button> */}
        </div>
      </Navbar>
    </>
  );
}
