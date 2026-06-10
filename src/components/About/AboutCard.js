import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmad Shobasi </span>
            from <span className="purple"> Hama, Syria</span>
            <br />
            I am currently working as a freelancer fullstack developer.
            <br />I was employed as web apps developer at{" "}
            <span className="purple">BA-Tech company | Damascus</span>
            <br />I have studied Bachelor in mechatronics engineering, also I'm
            currently studying computer science bachelor at{" "}
            <span className="purple">Syrian virtual university.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
