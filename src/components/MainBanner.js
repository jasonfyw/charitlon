import React, { Component } from 'react';
import './MainBanner.css';
import logoHands from '../media/charitlon-logo-palms.png';
import logoHeart from '../media/charitlon-logo-heart.png';

import { Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';

const MainContent = () => (
    <div className="main" id="home">
        <Row>
            <Col xs="6">
                <Parallax x={[100, -100]}> 
                    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" offset="0">
                        <div className="main-content-wrapper">
                            <div className="main-text">
                                <div className="title">CHARITLON</div>
                                <div className="tagline">#Students4Students</div>
                                <div className="subtitle">17 April 2021</div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Parallax>
            </Col>
            <Col xs="6">
                <Parallax x={[-100, 100]}>
                    <div className="main-content-wrapper">
                        <div className="main-logo" >
                            <div className="logo-heart">
                                <ScrollAnimation animateIn="slideInDown" delay="200" animateOnce>
                                    <img src={logoHeart} alt="" />
                                </ScrollAnimation>
                            </div>

                            <div className="logo-hands">
                                <ScrollAnimation animateIn="slideInUp" delay="650" animateOnce>
                                    <img src={logoHands} alt="" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </Col>
        </Row>

    </div>
);




class MainBanner extends Component {
    render() {
        return (
            <ParallaxBanner
                layers={[
                    {
                        children: <MainContent />,
                        amount: 0.6
                    },
                    {
                        children: <div className="downCarat"><IosArrowDown fontSize="2rem" /></div>,
                        amount: 0.1
                    }
                ]}
                style={{ height: '100vh' }}
            >
                <div className="main-triangles">
                    <div className="triangleLeft" />
                    <div className="triangleRight" />
                </div>

            </ParallaxBanner>
        );
    }
}

export default MainBanner;