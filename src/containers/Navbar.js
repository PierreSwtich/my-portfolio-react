import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/images/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi"
import { BsFillPersonVcardFill, BsCheckSquare, BsFiletypePdf, BsFileEarmarkText, BsStarFill, BsGit } from "react-icons/bs"

const navLinks = [
  { to: "/", text: "Home", icon: <BiHomeSmile /> },
  { to: "/about", text: "About", icon: <BsFillPersonVcardFill /> },
  { to: "/project", text: "Projects", icon: <BsCheckSquare /> },
  { to: "/resume", text: "Resume", icon: <BsFiletypePdf /> },
  { to: "/new-blog", text: "Blogs", icon: <BsFileEarmarkText /> },
];

// function scrollHandler() {
//   if (window.scrollY >= 20) {
//     updateNavbar(true);
//   } else {
//     updateNavbar(false);
//   }
// }

// window.addEventListener("scroll", scrollHandler);

const NavigationBar = () => {
  const [expand, setExpand] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [navColour, setNavColour] = useState(false);

  const updateExpanded = (value) => {
    setExpand(value);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navLinks.map((link, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={link.to}
                  onClick={() => updateExpanded(false)}
                >
                  {link.icon} {link.text}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/PierreSwtich/my-portfolio-react"
                target="_blank"
                className="fork-btn-inner"
              >
                <BsGit style={{ fontSize: "1.2em" }} />{" "}
                <BsStarFill style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
