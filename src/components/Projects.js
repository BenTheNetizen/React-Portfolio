import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Card, Modal, Collapse } from "react-bootstrap";
import link_icon from '../images/link.png';
import github_icon from '../images/github_icon.png';
import { StyledIcon } from './Header';
import { StyledTechnology } from "./Experience";
import { newTab } from "../util/functions";
import { projects } from '../util/constants';

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    filter: blur(4px) brightness(15%);
    -webkit-filter: blur(4px) brightness(15%);
`;

const StyledModalText = styled.div`
    position: absolute;
    top: 20%;
    padding-left: 20%;
    padding-right: 20%;
    text-align: center;
    line-height: 200%;
`;

const StyledCard = styled(Card)`
    width: 100%;
    background-color: var(--color-indigo);
    &:hover {
        cursor: pointer;
        transform: translateY(-10px);
        box-shadow: 0 0 10px 10px var(--color-peach);
        filter: brightness(80%);
    }
`;

function VerticalModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{padding:'0', backgroundColor:'var(--color-indigo)'}}>
            <StyledImg src={props.image}/>
            <StyledModalText>
                <h4>{props.title}</h4>
                {props.description}
                <Row style={{
                    display:'flex', 
                    justifyContent:'center',
                    marginTop: '1rem',
                }}>
                    <StyledIcon src={github_icon} onClick={() => newTab(props.github)}/>
                    <StyledIcon src={link_icon} onClick={() => newTab(props.url)}/>
                </Row>    
            </StyledModalText>
        </Modal.Body>
      </Modal>
    );
  }

function ProjectCard(props) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <VerticalModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...props}
            />
            <StyledCard onClick={() => setModalShow(true)}>
                <StyledCard.Img variant="top" src={props.logo}/>
            </StyledCard>
        </div>
    );
}

const StyledDiv = styled.div`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

function Projects() {
    const [open, setOpen] = useState(false);
    const [isViewMore, setIsViewMore] = useState(false);

    return (
        <div id="projects" className="mb-5">
            <h2>Projects</h2>
            <Row style={{marginTop: '30px'}}>
                {projects.slice(0,3).map((project, index) => {
                    return (
                        <Col key={index}>
                            <ProjectCard 
                                title={project.title}
                                url={project.url}
                                github={project.github}
                                description={project.description}
                                technologies={project.technologies}
                                image={project.image}
                                logo={project.logo}
                            />
                        </Col>
                    );
                })}
                {/* View More projects functionality */}
                <h4 
                    className='mt-3'
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    style={{display: 'flex', justifyContent: 'right'}}
                >
                    <StyledDiv onClick={() => setIsViewMore(!isViewMore)}>
                        {isViewMore ? 'View Less' : 'View More'}
                    </StyledDiv>
                </h4>

                <Collapse in={open}>
                    <div id="example-collapse-text">
                    {projects.slice(3).map((project, index) => {
                    return (
                        <Row key={index} className="mt-3">
                            <Col>
                                <h4 className="mb-3">{project.title}</h4>
                                <StyledIcon style={{width:'2rem', height:'2rem'}} src={github_icon} onClick={() => newTab(project.github)}/>
                                <StyledIcon style={{width:'2rem', height:'2rem', marginLeft:'10px'}} src={link_icon} onClick={() => newTab(project.url)}/> 
                            </Col>
                            <p className="mt-3">{project.description}</p>
                            <Col>
                            {project.technologies.map((tech, index) => {
                                return <StyledTechnology variant="outline-primary" key={index}>{tech}</StyledTechnology>;
                            })}
                            </Col>
                        </Row>
                    );
                })}
                    </div>
                </Collapse>
            </Row>
        </div> 
        );
    }


export default Projects;
