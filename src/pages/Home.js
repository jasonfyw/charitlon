import React, { Component } from 'react';

import MainBanner from '../components/MainBanner';
import AboutSection from '../components/AboutSection';
import DolniPocernice from '../components/DolniPocernice';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <MainBanner/>
                <AboutSection/>
                <DolniPocernice/>
                <Pricing/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;