import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiXampp,
  SiLinux,
  SiGit,
  SiMysql,
  SiPhp,
  SiPython,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Visual Studio Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp /> {/* XAMPP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /> {/* Linux */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>
    </Row>
  );
}

export default Toolstack;
