import React, { Component } from 'react';
import './DolniPocernice.css';

import dolniPocernicePhoto from '../media/dolnipocernice.jpg';

import { ParallaxBanner } from 'react-scroll-parallax';
import { Container, Row, Col } from 'react-bootstrap';

class DolniPocernice extends Component {
    render() {
        return (
            <ParallaxBanner
                layers={[
                    {
                        image: dolniPocernicePhoto,
                        amount: 0.25
                    }
                ]}
                style={{ height: "90vh" }}
            >
                <div className="dolni-pocernice" id="dolni-pocernice">

                    <Container>
                        <Row>
                            <Col sm={{ span: 6, offset: 3 }}>
                                <div className="content-header">
                                    <h3>Our commitment to</h3>
                                    <h1>Dětský Domov Dolní Počernice</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{ span: 6, offset: 3 }}>
                                <div className="content-body">
                                    <p>
                                        All funds raised from Charitlon will go towards the children's home in Dolní Počernice and its "Better Prepared for Life" programme. We want to empower underpriveleged kids by giving them opportunities in education that they would otherwise not have access to.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <div className="triangleTop" />
                    <div className="triangleLeft" />
                    <div className="triangleRight" />
                </div>
            </ParallaxBanner>
        );
    }
}

export default DolniPocernice;