import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ParticlesComponent from "../Particles";
import placeholder from "../../Assets/project-test.png"
// import MainCardProjectChoose from "./MainCards";

function Projects() {
  return (
    <Container fluid className="project-section">
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
