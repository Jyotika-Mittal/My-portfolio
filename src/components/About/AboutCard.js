import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm{" "}
            <span className="purple">Jyotika Mittal</span> from{" "}
            <span className="purple">Sirsa, Haryana, India</span>.
            <br />
            <br />
            I am currently pursuing my{" "}
            <span className="purple">B.Tech in Computer Engineering</span> and
            am in my <span className="purple">final year</span> at{" "}
            <span className="purple">
              Thapar Institute of Engineering & Technology
            </span>.
            <br />
            <br />
            I am passionate about building impactful software solutions and
            continuously exploring technologies in{" "}
            <span className="purple">
              Full Stack Development, DevOps, Cloud Computing, and Artificial
              Intelligence
            </span>
            .
            <br />
            <br />
            I enjoy participating in{" "}
            <span className="purple">hackathons</span>, collaborating with
            diverse teams, solving real-world challenges, and transforming
            innovative ideas into practical solutions. Working in teams has
            strengthened my communication, leadership, and problem-solving
            abilities.
            <br />
            <br />
            Beyond academics and technology, I love engaging in activities that
            keep me creative, curious, and energized:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking and experimenting with new recipes 🍳
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling and exploring new places and cultures
              ✈️
            </li>

            <li className="about-activity">
              <ImPointRight /> Adventure activities and outdoor experiences 🏔️
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and keep exploring new possibilities."
          </p>

          <footer className="blockquote-footer">
            Jyotika Mittal
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;