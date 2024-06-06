import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./certificatecard";
import Particle from "../Particle";
import Projects from "../Projects/Projects";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import RPA from "../../Assets/Projects/rpa.png";
import AWS from "../../Assets/Projects/awsco.png";
import rhat from "../../Assets/Projects/redhat.png";
import hrank from "../../Assets/Projects/hackerrank.png";
import cforces from "../../Assets/Projects/codeforces.png";
import cchef from "../../Assets/Projects/codechef.png";
import lcode from "../../Assets/Projects/leetcode.png";
function certificate() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">GLOBAL CERTIFICATIONS </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few Certfications I've done on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <CertificateCards
                imgPath={rhat}
                title="Red Hat Enterprise Certification"
                demoLink="https://drive.google.com/file/d/19nueLif2NubZA8gGw-ciWaDw3ErLXYyw/view"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertificateCards
                imgPath={AWS}
                isBlog={false}
                title="AWS CLOUD PARTIONER Certification"
                demoLink="https://drive.google.com/file/d/19uxdO-Grm-wSokftrjYIbIXEfhNdoXp5/view"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertificateCards
                imgPath={RPA}
                isBlog={false}
                title="Automation Anywhere Certification"
                demoLink="https://drive.google.com/file/d/1YEOlJs2DZEzyl4vKK26vzzH_l6NS4YLu/view"              
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">CODING PLATFORMS</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few Coding PLATFORMS.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <CertificateCards
                imgPath={hrank}
                title="HackerRank"
                demoLink="https://www.hackerrank.com/profile/h2100032303"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertificateCards
                imgPath={lcode}
                isBlog={false}
                title="LEETCODE"
                demoLink="https://leetcode.com/u/2100032303/"
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificateCards
                imgPath={cforces}
                isBlog={false}
                title="CODEFORCES"
                demoLink="https://codeforces.com/profile/MAHARSHI_A"
              />
            </Col>
  
            <Col md={4} className="project-card">
              <CertificateCards
                imgPath={cchef}
                isBlog={false}
                title="CODECHEF"
                demoLink="https://www.codechef.com/users/klu_2100032303"              
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
    );
  }
  
  export default certificate;
  