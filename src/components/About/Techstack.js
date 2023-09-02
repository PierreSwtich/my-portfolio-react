import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiMarkdown,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack({containerRef}) {
  const icons = [
    { icon: DiJavascript1, name: 'JavaScript' },
    { icon: DiNodejs, name: 'Node.js' },
    { icon: DiReact, name: 'React' },
    { icon: DiMongodb, name: 'MongoDB' },
    { icon: SiFirebase, name: 'Firebase' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: DiPython, name: 'Python' },
    { icon: DiHtml5, name: 'HTML5' },
    { icon: DiCss3, name: 'CSS3' },
    { icon: DiGit, name: 'Git' },
    { icon: DiMarkdown, name: 'Markdown' },
  ];


  return (

    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }} test-dataid="techstack-icons">
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
    </Row>
  );
}

export default Techstack;
