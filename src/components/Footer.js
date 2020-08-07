import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import './Footer.css';
import PrazskaPlynarenskaLogo from '../media/prazskaplynarenska_logo.png';
import NadacePreciosaLogo from '../media/nadace_preciosa_logo.png';
import RenomiaLogo from '../media/renomia_logo.jpg';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="sponsors">
                    <Container>
                        <Row>
                            <Col md="4">
                                <img src={NadacePreciosaLogo} width="100%" alt="Nadace Preciosa Logo" />
                            </Col>
                            <Col md="4">
                                <img src={RenomiaLogo} width="100%" alt="Renomia Logo" />
                            </Col>
                            <Col md="4">
                                <img src={PrazskaPlynarenskaLogo} width="100%" alt="Pražská Plynárenská Logo" style={{ 'paddingTop': '18px' }} />
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <p className="footer-text">
                            © Charitlon 2020 – Website by <a href="mailto: pupil.jason.wang@parklane-is.com">Jason Wang</a>
                        </p>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Footer;