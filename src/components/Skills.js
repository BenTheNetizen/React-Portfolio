import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WordSphere from './WordSphere';


function Skills() {
    return (
        <div id="skills" className="mb-5">
            <Row style={{marginTop: '30px'}}>
                <Col>
                    <h2>Skills</h2>
                    <br/>
                    <p>
                        During my gap semester, I've discovered that I am passionate about building web applications.  
                        Over the past year, I have gathered a variety of skills and knowledge in the field of web development,
                        leading to working on projects that have real impact on the lives of others. 
                        <br/>
                        <br/>
                        I hungrily learn new technologies and frameworks, and I am always looking to improve my craft. This website 
                        is in fact an exploration into the ReactJS framework.
                        <br/>
                        <br/>
                        On the right side, you can see the skills and technologies I've learned over the past couple of years.
                        Looking forward to filling out the word sphere ;)
                    </p>
                </Col>
                <Col>
                    <WordSphere />
                </Col>
            </Row>
        </div>
        );
}

export default Skills;