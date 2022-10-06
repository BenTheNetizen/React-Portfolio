import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import github_icon from '../images/github_icon.png';
import linkedin_icon from '../images/linkedin_icon.png';
import file_icon from '../images/file_icon.png';
import profile_pic from '../images/profile_pic.jpg';
import { colors, my_linkedin_url, my_github_url } from '../util/constants';
import { newTab } from '../util/functions';
import Typical from 'react-typical';
import logo from '../images/logo.png';
import resumePDF from '../static/benjamin-chen-resume.pdf';

const StyledNav = styled(Nav)`
    && {
        // use the & to reference the children
        & a {
            color: ${colors.indigo};
        }
    }
`;

export const StyledIcon = styled.img`
    width: 3.5rem;
    &: hover { 
        cursor: pointer;
    }
`;

const StyledLogo = styled.img`
    height: 5vw;
    width: 5vw;

    @media (min-width: 768px) {
        height: 7vw;
        width: 7vw;
    }
`;
const StyledAvatar = styled.img`
    border-radius: 50%;
    border: 7px solid #fff;
    width: 30vw;
    height: width;
`;

const StyledContainer = styled(Container)`
    padding: 0;
    min-height: calc(100vh);

    @media (min-width: 768px) {
        min-height: null;
    }
`;

const StyledContent = styled(Row)`
    padding-top: 18vh;

    @media (max-width: 576px) {
        padding-top: 0px;
    }
`;

function SiteNavBar() {
    return (
    <div>
        <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle 
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse 
                id="basic-navbar-nav"
                className="justify-content-end"
            >
            <StyledNav style={{ fontSize: "1rem"}} className="m-auto">
                <a href="#experience" className="m-3">Experience</a>
                <a href="#projects" className="m-3">Projects</a>
                <a href="#skills" className="m-3">Skills</a>
            </StyledNav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

function Header() {
    return (
        <div>
            <StyledContainer>
                <SiteNavBar />
                <StyledContent>
                    <Container fluid className="p-0">
                        <Row>
                            <Col xs={7}>
                                <h4>Hey, my name is</h4>
                                <h1>Benjamin</h1>
                                <h1>Chen</h1>
                                <div style={{display:'flex'}}>
                                    <h4>I'm&nbsp;</h4>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="h4"
                                        steps={[
                                            'a software engineer 💻',
                                            1000,
                                            'an entrepreneur 🤝',
                                            1000,
                                            'a student 🎓',
                                            1000,
                                            'a rockstar 🎸 (wannabe) ',
                                            1000,
                                        ]}/>
                                </div>
                                
                                <p>studying computer science at Yale. 
                                    For any inquiries, you can reach me at <a style={{textDecoration:"none"}} href="mailto:benjamin.chen@yale.edu"><span style={{color:"var(--color-peach)"}}>benjamin.chen@yale.edu.</span></a></p>
                                <Row style={{display: 'flex', justifyContent: 'flex-start'}}>
                                    <StyledIcon src={github_icon} onClick={() => newTab(my_github_url)}/>
                                    <StyledIcon src={linkedin_icon} onClick={() => newTab(my_linkedin_url)}/>
                                    <StyledIcon src={file_icon} onClick={() => newTab(resumePDF)}/>
                                </Row>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'center'}}>
                                <StyledAvatar
                                    src={profile_pic}
                                    className='m-auto'
                                    style={{ maxWidth: '24rem' }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </StyledContent>
            </StyledContainer>
        </div>
    )
}


export default Header;