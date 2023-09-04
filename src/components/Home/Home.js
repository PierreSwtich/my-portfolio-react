import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/new-background.svg";
import Home2 from "./Home2";
import Type from "./Type";
import ParticlesComponent from "../Particles";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Helmet>
          <meta name="description" content="Web site created using create-react-app" />
          <title>QAwithPierre | Portfolio</title>
          <meta name="description" content="Adam Stolarski's portfolio, showcasing expertise in software testing and development." />

          {/* Google / Search Engine Tags */}
          <meta name="author" content="Adam Stolarski" />
          <meta itemprop="name" content="QAwithPierre | Portfolio" />
          <meta itemprop="description" content="Adam Stolarski's portfolio, showcasing expertise in software testing and development." />
          <meta itemprop="image" content="https://qawithpierre.pl/your-image-url.jpg" />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://qawithpierre.pl" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="QAwithPierre | Portfolio" />
          <meta property="og:description" content="Adam Stolarski's portfolio, showcasing expertise in software testing and development." />
          <meta property="og:image" content="https://qawithpierre.pl/your-image-url.jpg" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@YourTwitterHandle" />
          <meta name="twitter:title" content="QAwithPierre | Portfolio" />
          <meta name="twitter:description" content="Adam Stolarski's portfolio, showcasing expertise in software testing and development." />
          <meta name="twitter:image" content="https://qawithpierre.pl/your-image-url.jpg" />
        </Helmet>
        <ParticlesComponent />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi everyone!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADAM STOLARSKI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
