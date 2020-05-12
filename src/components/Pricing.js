import React, { Component } from 'react';
import './Pricing.css';

import { Container, Row, Col } from 'react-bootstrap';

class Pricing extends Component {
    render() {
        return (
            <div className="pricing">
                <Container>
                    <div className="pricing-title">
                        <h1>ENTRANCE FEE</h1>
                    </div>
                    <Row>
                        <Col sm={{ span: 4, offset: 2}}>
                            <div className="price-card">
                                <h3>Competitors</h3>
                                <br/>
                                <h2>300 kč</h2>
                            </div>
                            <div className="price-card-shadow" />
                        </Col>
                        <Col sm={4}>
                            <div className="price-card">
                                <h3>General attendance</h3>
                                <h2>200 kč</h2>
                            </div>
                            <div className="price-card-shadow"/>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Pricing;