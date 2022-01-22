import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";

const experiences = [
  {
    company: "Orthogonal Trading",
    title: "Quantitative Analyst",
    location: "Sydney, Australia",
    startDate: "April 2021",
    endDate: "August 2021",
    description: `Worked closely with the CTO to develop trading models and back test the firm's trading strategies,
        specifically on their long gamma strategies. Assuming an Ornstein-Uhlenbeck process, developed a strategy for identifying large scale liquidation events
        in the crypto market using statistical techniques and optimization routines. Established Twitter sentiment analysis project as a basis for future trading strategies,
        creating a data pipeline that stored over 1 million tweets in a Postgres database.`,
    technologies: [
      "Python",
      "SQL",
      "Postgres",
      "TweePy",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Scikit-Learn",
    ],
  },
  {
    company: "Firm Prospects",
    title: "Data Analyst",
    location: "Boston, Massachusetts",
    startDate: "June 2021",
    endDate: "August 2021",
    description: `Worked closely with the head of data to redesign the company's data scraping pipeline using Python, involving scraping, clearning,
        validation, and entity extraction. Implemented entity extraction using the SpaCy library for identifying educational credentials in a lawyer's biography,
        achieving an F1 score of 0.87 on a set of 30K+ lawyer bios.`,
    technologies: [
      "Python",
      "Octoparse",
      "SpaCy",
      "NLTK",
      "Named Entity Recognition",
    ],
  },
  {
    company: "Language, Information, and Learning Lab at Yale (LILY)",
    title: "Web Developer",
    location: "New Haven, Connecticut",
    startDate: "March 2021",
    endDate: "Present",
    description: `Assisted Professor Radev and his team in the AAN Project in creating a search for browsing their corpus of 
        resources on NLP and related fields. Maintained MySQL database of the corpus, and created various web features for searching the corpus.`,
    technologies: ["Python", "MySQL", "Django"],
  },
];

export const StyledTechnology = styled(Button)`
    color: var(--color-indigo) !important;
    border-color: var(--color-indigo) !important;
    box-shadow: none;
    &:hover {
        background-color: var(--color-indigo) !important;
        color: var(--color-peach) !important;
        cursor: default !important;
        transform: translateY(-5px);
        box-shadow: 0 8px 6px -6px var(--color-peach) !important;
    }
    &:focus {
        box-shadow: none !important;
    }
`;

function Experience() {
  return (
    <div id="experience" className="mb-5">
      <h2>Experience</h2>
      {experiences.map((experience, index) => {
        return (
          <Col key={index} style={{marginTop: "30px"}}>
            <Row>
              <Col xs={8}>
                <h4>
                  {experience.company} - <em>{experience.title}</em>
                </h4>
                <p>{experience.description}</p>
                <ul style={{paddingLeft: "0"}}>
                  {experience.technologies.map((tech, index) => {
                    return <StyledTechnology variant="outline-primary" key={index}>{tech}</StyledTechnology>;
                  })}
                </ul>
              </Col>
              <Col style={{textAlign: 'right'}}>
                <h5>{experience.location}</h5>
                <h5>
                  {experience.startDate} - {experience.endDate}
                </h5>
              </Col>
            </Row>
          </Col>
        );
      })}
    </div>
  );
}

export default Experience;
