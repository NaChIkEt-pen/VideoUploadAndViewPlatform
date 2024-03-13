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
import "../../CSS/UserAccount/UserAccountPageNavbar.css";

//atom import
import { userAuthAtom } from "../../GlobalVars";
import { useAtom } from "jotai/react";

export default function AccountPageNavbar() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
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
        </Container>

        <div className="navbarAdditionalsDiv1">
          <Row>
            <Col>
              <button style={{ background: "none", border: "none" }}>
                <img src="../../../profile.png" className="navbarUserIcon" />
              </button>
            </Col>
          </Row>
        </div>
      </Navbar>
    </>
  );
}
