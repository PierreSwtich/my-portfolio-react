import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiGithub,
  SiPlaywright,
  SiCypress,
  SiJira,
  SiFigma,
  SiAdobexd,
  SiShopify,
} from "react-icons/si";

function Toolstack({containerRef}) {

  const icons = [
    {icon: SiVisualstudiocode, name: 'Visual Studio Code'},
    {icon: SiPostman, name: 'Postman'},
    {icon: SiSlack, name: 'Slack'},
    {icon: SiVercel, name: 'Vercel'},
    {icon: SiMacos, name: 'Mac OS'},
    {icon: SiWindows, name: 'Windows'},
    {icon: SiGithub, name: 'Github'},
    {icon: SiPlaywright, name: 'Playwright'},
    {icon: SiCypress, name: 'Cypress'},
    {icon: SiJira, name: 'Jira'},
    {icon: SiFigma, name: 'Figma'},
    {icon: SiAdobexd, name: 'Adobe XD'},
    {icon: SiShopify, name: 'Shopify'},
  ]


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {icons.map(({ icon: IconComponent, name }) => (
        <Col key={name} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`tooltip-${name}`}>{name}</Tooltip>}
            container={containerRef}
          >
            <div className="tech-icon">
              <IconComponent />
            </div>
          </OverlayTrigger>
        </Col>
      ))}

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaywright />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
