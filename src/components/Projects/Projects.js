import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Medimentor"
              description="Medimentor is an AI-powered medical learning platform that helps students improve surgical knowledge and practical skills through an intelligent medical chatbot, performance tracking, and an immersive VR surgery simulator. Built with React, FastAPI, OpenAI GPT, and Unity WebGL, it provides an interactive and personalized learning experience."
              ghLink="https://github.com/Jyotika-Mittal/VR-simmulations"
              demoLink="https://final-med.vercel.app"
            />
          </Col>

          {/* Project 2 */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Clinical-Trials"
              description="Clinical Trials AI Recruiter (MedMatch AI) is a volunteer recruitment platform that uses RAG on trial-criteria PDFs and volunteer CSV data to quickly return eligibility counts, candidate shortlists, and concise AI-generated answers."
              ghLink="https://github.com/Jyotika-Mittal/clinicaltrials/tree/main"
              demoLink="https://clinicaltrials-blue.vercel.app/"
            />
          </Col>

          {/* Project 3 */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nexus-Placement-Portal"
              description="An AI-powered campus recruitment platform connecting students, recruiters, and administrators. Features ATS resume scoring, personalized job recommendations, application tracking, and recruitment management to streamline campus placements."
              ghLink="https://github.com/Jyotika-Mittal/Nexus_portal"
              demoLink="https://nexus-portal-1.onrender.com"
            />
          </Col>

          {/* Project 4 */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spendly"
              description="Spendly is a full-stack AI-powered expense tracker that automatically categorizes expenses, provides insightful analytics, detects overspending, and helps users achieve savings goals through progress tracking and reminders."
              ghLink="https://github.com/Jyotika-Mittal/New-expense"
              demoLink="https://new-expense-1-i04d.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;