import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Card, Modal, Button, Collapse } from "react-bootstrap";
import mockexamapp_img from '../images/mockexamapp.PNG';
import alexanderacademy_logo from '../images/alexanderacademy_logo.png';
import ycarchive_img from '../images/ycarchive.PNG';
import ycarchive_logo from '../images/ycarchive_logo.jpg';
import stocktools_logo from '../images/stocktools_logo.png';
import stocktools_img from '../images/stocktools.png';
import link_icon from '../images/link.png';
import github_icon from '../images/github_icon.png';
import { StyledIcon } from './Header';
import { newTab } from "../util/functions";

const projects = [
    {
        title: "MockExamApp",
        url: "https://www.mockexamapp.com/exam-list/",
        github: "https://github.com/BenTheNetizen/online-testing-app",
        description: `Built a full-stack web application for tutoring company AlexanderAcademy.
        Web app allows students to take both the SAT and ACT examinations using an intuitive interface that features an in-depth scoring
        report, extended time options, and many more testing conveniences.`,
        technologies: ["Django", "Postgres", "Heroku", "AWS S3", "JavaScript"],
        image: mockexamapp_img,
        logo: alexanderacademy_logo,
    },
    {
        title: "YC Archive",
        url: "https://www.ycarchive.com/",
        github: "https://github.com/BenTheNetizen/YC-Archive",
        description: `Built ecommerce website using Shopify Liquid for my custom vintage clothing company YC Archive. Features include text message reminders, 
        embedded Instagram feed, email confirmations, and a custom checkout process.`,
        technologes: ["Shopify Liquid", "Klaviyo", "Instafeed", "SMSBump"],
        image: ycarchive_img,
        logo: ycarchive_logo,
    },
    {
        title: "StockTools",
        url: "https://www.stocktools.co/",
        github: "https://github.com/BenTheNetizen/StockTools",
        description: `StockTools is a free-online resource for users to explore various stock-market related tools.
        Primary features is "StockScraper," a Python application that takes a given subredd on Reddit and performs
        natural language processing to find the hottest stocks in discussion.`,
        technologies: ["Django", "PRAW Library", "NLP", "Openpyxl"],
        image: stocktools_img,
        logo: stocktools_logo,
    },
    {
        title: "All About NLP (AAN)",
        url: "https://aan.how/",
        github: "https://github.com/IreneZihuiLi/AAN2021",
        description: `The AAN Project is a database of papers, tutorials, surveys, lectures, and software that are relevant to NLP. NLP is rapidly growing,
        and, as a result, participating in the field can seem daunting to a student or researcher. The AAN Project aims to provide a platform for learners 
        to quickly find resources that can help them learn NLP. My role was to develop features on the site and maintain its database.`,
        technologies: ["Python", "MySQL", "Django", "Apache Solr"],
    },
    {
        title: "GoodWork", 
        url: null,
        github: "https://github.com/maxyuan6717/GoodWork",
        description: `Why waste energy alone in the gym when you could be using that energy to both positively influence those around you and improve your health.
        GoodWork is an android application that crawls volunteermatch.org for volunteer opportunities around you and uses machine learning to determine which opportunities should be pushed to the user.
        The data that is crawled from the website is first uploaded to a Firebase realtime database. The android app can then access this data and display it to the user. 
        The "10004.txt" file is the training data for the text classification routine within the crawler code, which uses linear regression to predict whether or not a certain volunteer opportunity requires any physical exertion.`,
        technologies: ["Android Studio", "Java", "Firebase", "Text Classification", "Web Scraping"],
    }
]

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

function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    );
  }

function Projects() {
    return (
        <div className="mb-5">
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
                <h4 className='mt-3' style={{textAlign: 'right'}}>View More</h4>
                <Example />
            </Row>
        </div> 
        );
    }


export default Projects;
