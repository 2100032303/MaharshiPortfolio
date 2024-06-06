import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maharshi </span>
            <span className="purple">B-Tech Student at KL university from Computer Science Department.</span>
            <br/><br/>
            Location:Vijayawada<br/>
            State   :Andhra Pradesh<br/>
            Country :India
            <br/>
            <br/>
            <h3>Personal Hobbies</h3>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "yellow" }}>
            "Accept What you GET,Accept What you DID!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
