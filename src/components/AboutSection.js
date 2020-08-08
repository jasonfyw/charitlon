import React, { Component } from 'react';
import './AboutSection.css';

import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faGlassCheers } from '@fortawesome/free-solid-svg-icons';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section" id="about">
                <Container>
                    <Row>
                        <Col sm={5}>
                            <ScrollAnimation animateIn="bounceInLeft" animateOnce>
                                <div className="section-header">
                                    <Container>
                                        <h3>So what is</h3>
                                        <h1>CHARITLON?</h1>
                                    </Container>
                                </div>
                            </ScrollAnimation>
                        </Col>
                        <Col sm={7}>
                            <ScrollAnimation animateIn="slideInRight" animateOnce animatePreScroll offset={20} >
                                <div className="top-layer">
                                    <p className="about-subtext">
                                        Charitlon is a student-led fundraising event working to empower education for the youth
                                    </p>
                                    <Row>
                                        <Col sm={5}>
                                            <div className="about-icon" style={{ paddingLeft: "1rem" }}>
                                                <FontAwesomeIcon icon={faRunning} />
                                            </div>
                                        </Col>
                                        <Col sm={7}>
                                            <h3 className="about-heading">THE MORNING</h3>
                                            <p className="about-text">
                                                A unique pentathlon competition open to high school students
                                    </p>
                                        </Col>


                                        <Col sm={7}>
                                            <h3 className="about-heading">THE AFTERNOON</h3>
                                            <p className="about-text">
                                                An afterparty with a concert, guest speakers, workshops and more – all open to the public
                                    </p>
                                        </Col>
                                        <Col sm={5}>
                                            <div className="about-icon" style={{ paddingRight: "1rem" }}>
                                                <FontAwesomeIcon icon={faGlassCheers} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="bottom-layer" />
                                
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>

                {/* <div className="triangleLeft" />
                <div className="triangleRight" /> */}
                
            </div>
        );
    }
}

export default AboutSection;