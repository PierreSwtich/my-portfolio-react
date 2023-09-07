import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticlesComponent from "../components/Particles";
import Github from "../components/About/Github";
import Techstack from "../components/About/Techstack";
import Aboutcard from "../components/About/AboutCard";
import laptopImg from "../Assets/images/about.png";
import Toolstack from "../components/About/Toolstack";
import { Helmet } from "react-helmet";

function About() {
  return (
    <Container fluid className="about-section">
      <Helmet>
        <title>QAwithPierre | About Me!</title>
        <meta name="description" content="A brief overview of my background, tech skills, and tech stack." />

        {/* Google / Search Engine Tags */}
        <meta name="author" content="Adam Stolarski" />
        <meta itemprop="name" content="QAwithPierre | About Me!" />
        <meta itemprop="description" content="A brief overview of my background, tech skills, and tech stack." />
        <meta itemprop="image" content="https://qawithpierre.pl/your-image-url.jpg" />

          {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://qawithpierre.pl/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="QAwithPierre | About Me!" />
        <meta property="og:description" content="A brief overview of my background, tech skills, and tech stack." />
        <meta property="og:image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="QAwithPierre | About Me!" />
        <meta name="twitter:description" content="A brief overview of my background, tech skills, and tech stack." />
        <meta name="twitter:image" content="https://qawithpierre.pl/your-image-url.jpg" />
      </Helmet>
      <ParticlesComponent />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to <strong className="purple">KNOW</strong> me!
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
