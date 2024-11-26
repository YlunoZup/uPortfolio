import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { 
  DiReact, 
  DiJavascript1, 
  DiCss3, 
  DiHtml5, 
  DiPython, 
  DiGit, 
  DiPhp 
} from "react-icons/di";
import { 
  SiTypescript, 
  SiNextdotjs 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> {/* TypeScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp /> {/* PHP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs /> {/* Next.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
    </Row>
  );
}

export default Techstack;
