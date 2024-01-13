import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Logs | <strong className="purple">Maintanence </strong>
        </h1>
        <p style={{ color: "white" }}>
        Check all your Logs here
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
