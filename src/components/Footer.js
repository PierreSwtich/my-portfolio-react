// import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // const [shouldStick, setShouldStick] = useState(false);

  // useEffect(() => {
  //   const checkContentWidth = () => {
  //     const contentWidth = document.body.scrollWidth;
  //     const screenWidth = window.innerWidth;
  //     setShouldStick(contentWidth <= screenWidth);
  //   };

  //   checkContentWidth();
  //   window.addEventListener('resize', checkContentWidth);

  //   return () => {
  //     window.removeEventListener('resize', checkContentWidth);
  //   };
  // }, []);

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
            <li className="social-icons">
              <a
                href="https://github.com/PierreSwtich"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/adam_switch/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );

  
}

export default Footer;
