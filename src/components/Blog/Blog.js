import React from "react";
import { Container } from "react-bootstrap";
import EmbeddedCard from "./EmbededElement";
import ParticlesComponent from "../Particles";

const BlogPage = () => {
  return (
    <Container style={{height: "100%", marginTop: "120px", width: "100%"}} >
      <ParticlesComponent />
        <div>
            <EmbeddedCard url={"https://airnauts.medium.com/these-days-ai-tools-and-automation-are-often-hailed-as-the-way-of-the-future-44ef9c8fa54e"} />
        </div>
    </Container>
  );
};

export default BlogPage;
