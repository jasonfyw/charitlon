import React, { Component } from 'react';
import './CharitlonNavbar.css';

import { Navbar, Nav } from 'react-bootstrap';

import { LogoInstagram, MailOutline } from '../media/Ionicons';

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
                <Navbar.Brand href="#home">CHARITLON</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
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