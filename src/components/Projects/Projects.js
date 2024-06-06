import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import certificate from "../Certificates/certificate";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import RPA from "../../Assets/Projects/rpa.png";
import AWS from "../../Assets/Projects/awsco.png";
import rhat from "../../Assets/Projects/redhat.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CORONA TRACK"
              description="Corona track webapp build with react and html.This application is developed for front-end and the value generated is randomised the changes in the graphs are according to table values."
              ghLink="https://github.com/2100032303/CORONA-TRACK-USING-FRONT-END"
              demoLink="https://maharshi1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Student Grade Management System"
              description="This project is build with using Java fullstack and Springboot Application. This project contains of student details and acamedic details that are updated with mysql backend and  Modification and user authentication"
              ghLink="https://github.com/2100032303/Student-Grade-Management-System-using-java-full-stack"
              demoLink="https://www.linkedin.com/posts/addanki-maharshi-baba-747754226_hackathon-techinnovation-studentsuccess-activity-7139834274429419520-yE4B?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="VideoStream"
              description="This project is build with react.js.This application is a clone of a youtube.It use API'S to fetch the latest data .The framing and styling is done with css and HTML"
              ghLink="https://github.com/2100032303/videostreamwebapp"
              demoLink="https://maharshivideostream.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}

export default Projects;
