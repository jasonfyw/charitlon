import React, { Component } from 'react';
import './CharitlonNavbar.css';

import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { LogoInstagram, MailOutline } from '../media/Ionicons';

const Link = styled(HashLink)`
    font-family: 'PT Mono', monospace;
    color: #777;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: #333;
        text-decoration: none;
    }
`;

class CharitlonNavbar extends Component {
    state = {
        scrollTop: 0
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let scrollTop = window.scrollY;
        this.setState({ scrollTop: scrollTop });
    }
    render() {
        let scrollTop = this.state.scrollTop;
        let navClass = ''

        if (scrollTop > 100) {
            navClass = 'navbar-collapse';
            console.log('switch')
        } else {
            navClass = '';
        }

        return (
            <Navbar fixed="top" className={navClass}>
                <Navbar.Brand href="/">CHARITLON</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="#about">About</Link></Nav.Link>
                    <Nav.Link><Link to="#dolni-pocernice">Our Commitment</Link></Nav.Link>
                    <Nav.Link><Link to="#pricing">Pricing</Link></Nav.Link>
                </Nav>
                
                <Nav>
                    <Nav.Link href="https://instagram.com/charitlon" target="_blank" rel="noopener noreferrer"><LogoInstagram color="#000" /></Nav.Link>
                    <Nav.Link href="mailto:contact@charitlon.cz"><MailOutline color="#000" /></Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default CharitlonNavbar;