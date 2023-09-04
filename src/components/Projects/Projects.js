import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ParticlesComponent from "../Particles";
import placeholder from "../../Assets/project-test.png"
import { Helmet } from "react-helmet";
// import MainCardProjectChoose from "./MainCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>QAwithPierre | Projects</title>
        <meta name="description" content="Explore my commercial projects, web pages, and personal projects in QA & other." />

        {/* Google / Search Engine Tags */}
        <meta name="author" content="Adam Stolarski" />
        <meta itemprop="name" content="QAwithPierre | My Projects" />
        <meta itemprop="description" content="Explore my commercial projects, web pages, and personal projects in QA & other." />
        <meta itemprop="image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://qawithpierre.pl/project" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="QAwithPierre | My Projects" />
        <meta property="og:description" content="Explore my commercial projects, web pages, and personal projects in QA & other." />
        <meta property="og:image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="QAwithPierre | My Projects" />
        <meta name="twitter:description" content="Explore my commercial projects, web pages, and personal projects in QA & other." />
        <meta name="twitter:image" content="https://qawithpierre.pl/your-image-url.jpg" />
      </Helmet>
      <ParticlesComponent />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few small projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Test"
              description="Test"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Test"
              description="Test"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Test"
              description="Test"
              ghLink="#"
              demoLink="#"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Test"
              description="Test"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Test"
              description="Test"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Test Title"
              description="Test Description"
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
