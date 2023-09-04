import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ParticlesComponent from "../Particles";
import pdf from "../../Assets/../Assets/placeholder_CV.pdf";
import { BsCloudDownload } from "react-icons/bs"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Helmet } from "react-helmet";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function MyResume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Helmet>
        <title>QAwithPierre | Resume</title>
        <meta name="description" content="Download my CV and learn more about my background, tech skills, and tech stack." />

        {/* Google / Search Engine Tags */}
        <meta name="author" content="Adam Stolarski" />
        <meta itemprop="name" content="QAwithPierre | Resume" />
        <meta itemprop="description" content="Download my CV and learn more about my background, tech skills, and tech stack." />
        <meta itemprop="image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://qawithpierre.pl/resume" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="QAwithPierre | Resume" />
        <meta property="og:description" content="Download my CV and learn more about my background, tech skills, and tech stack." />
        <meta property="og:image" content="https://qawithpierre.pl/your-image-url.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="QAwithPierre | Resume" />
        <meta name="twitter:description" content="Download my CV and learn more about my background, tech skills, and tech stack." />
        <meta name="twitter:image" content="https://qawithpierre.pl/your-image-url.jpg" />
      </Helmet>
      <Container fluid className="resume-section">
        <ParticlesComponent />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <BsCloudDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <BsCloudDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default MyResume;
