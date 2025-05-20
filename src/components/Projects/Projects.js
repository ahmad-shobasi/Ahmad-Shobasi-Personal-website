import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cash from "../../Assets/Projects/cashbox.png";
import tasky from "../../Assets/Projects/tasky.png";
import sls from "../../Assets/Projects/SLS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasky}
              isBlog={false}
              title="Tasky"
              description="visual project management ability that uses boards, lists, and cards to help teams and individuals organize tasks, collaborate, and track progress."
              link='https:\\taskyfront.ba-tech.tech'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sls}
              isBlog={false}
              title="SLS Dashboard"
              description="A dashboard to control and customize an Arduino product by connecting the web with Arduino server."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cash}
              isBlog={false}
              title="Cashbox Dashboard"
              description="A dashboard to control the company cash system and archive it in tables and cards and create bills to each Sales and purchases"
              link='https:\\cashbox.ba-tech.tech'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
