import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/GMX_IWiFi.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Voucher_System.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Featured <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are a few selected projects I've worked on, showcasing both completed works and upcoming developments.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Customized First Gen IWiFi & MikroTik (2022)"
              description="Custom MikroTik configuration and web pages for iWiFi with a private custom bypass license system for enhanced control and functionality."
              ghLink="https://github.com/YlunoZup/Custom-Non-Cracked-iwifi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Wi-Fi Voucher System (Client-Side Interface) -2025"
              description="This is a guide for the client-side of my Wi-Fi Voucher System, detailing user interactions with voucher codes and internet access. The backend is separate (privated)."
              ghLink="https://github.com/YlunoZup/LynxFI-Cloud-VS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Open-Source Coin Slot Counter for WiFi VeNdo (2020)"
              description="A simple open-source coin slot counter designed for WiFi-enabled vending systems. This project tracks coin usage for seamless internet access and voucher redemption."
              ghLink="https://github.com/YlunoZup/LynxFI-Basic-CC-System"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
