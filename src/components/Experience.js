import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import { experiences } from '../util/constants';

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
