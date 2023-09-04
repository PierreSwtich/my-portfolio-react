import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Adam Stolarski </span>
            from <span className="purple"> Warsaw, Poland.</span>
            <br /> I am a final year student of economic science in a e-commerce field. 
            Also, I am a passionate test lead who is responsibile of establishing a robust Manual and Automation QA department from inception
            <br />
            Additionally, I am currently employed as a Head of QA at
            Airnauts.
            <br />
            <br />
            Apart from testing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling... A LOT!
            </li>
          </ul>

          <p style={{ color: "rgb(90, 115, 300)" }}>
            "Nobody will ever see it, but You'll know it's there. For you to sleep at night, the quality must be carried all the way through."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
