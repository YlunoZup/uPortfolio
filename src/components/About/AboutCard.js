import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ulysses Kyle Puzon </span>
            from <span className="purple"> Davao City, Philippines.</span>
            <br />
            I am currently a first-year Computer Science student at AMA Computer College.
            <br />
            <br />
            I am passionate about exploring the fields of <b className="purple">web development, reverse engineering, </b> 
            and creating systems that make connectivity easier for everyone.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reverse Engineering Projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Keep learning, keep building, and strive to make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">YlunoZup</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
