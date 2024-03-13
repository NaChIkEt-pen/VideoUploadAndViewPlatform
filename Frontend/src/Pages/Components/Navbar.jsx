import React from "react";
import { useNavigate } from "react-router-dom";

//bootstrap import
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
import { IconContext } from "react-icons";

// CSS
import "../../CSS/HomePageCSS/HomePageNavbar.css";

//atom import
import { userAuthAtom } from "../../GlobalVars";
import { useAtom } from "jotai/react";

export default function HomePageNavbar() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);

  //funcitons
  const handleVideoUploadButton = (event) => {
    event.preventDefault();
    if (isAuth) {
      navigate("/videoupload", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };

  const handlePfpClick = (event) => {
    event.preventDefault();
    if (!isAuth) {
      navigate("/login", { replace: true });
    } else if (isAuth) {
      navigate("/account", { replace: true });
    }
  };
  return (
    <>
      <Navbar
        bg="#0F0F0F"
        data-bs-theme="dark"
        sticky="top"
        className="NavbarDiv"
      >
        {/* changed background color and sticky on top*/}
        <Container className="NavContainer">
          <Navbar.Brand href="#home">
            <img src="../../video (1).png" alt="Icon" className="Icon" />
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
        <div className="navbarAdditionalsDiv">
          <Row>
            <Col className="navbarVideoAddButtonCol">
              <IconContext.Provider value={{ size: "1.45em" }}>
                <div>
                  <button
                    type="submit"
                    className="navbarVideoAddButton"
                    onClick={handleVideoUploadButton}
                  >
                    <AiOutlineVideoCameraAdd values={{ size: "1em" }} />
                  </button>
                </div>
              </IconContext.Provider>
            </Col>
            <Col>
              <button
                style={{ background: "none", border: "none" }}
                onClick={handlePfpClick}
              >
                <img src="../../../profile.png" className="navbarUserIcon" />
              </button>
            </Col>
          </Row>
        </div>
      </Navbar>
    </>
  );
}
