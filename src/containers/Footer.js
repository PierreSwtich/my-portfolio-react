// import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import butterImg from "../Assets/images/buttercms.png"


function Footer() {

  const socialMediaLinks = [
    { href: "https://github.com/PierreSwtich", icon: <AiFillGithub /> },
    { href: "https://www.linkedin.com/in/soumyajit4419/", icon: <FaLinkedinIn /> },
    { href: "https://www.instagram.com/adam_switch/", icon: <AiFillInstagram /> },
  ];

const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Pierre Swtich</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} QAwP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialMediaLinks.map((link, index) => (
              <li className="social-icons" key={index}>
                <a
                  href={link.href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
            <li className="butter-cms">
              <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer">
                <img src={butterImg} alt="butter cms" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer
