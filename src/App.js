import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CharitlonNavbar from './components/CharitlonNavbar';
import Home from './pages/Home';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Route } from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <ParallaxProvider>
                <CharitlonNavbar/>
                <Route path="/" exact component={Home}/>
            </ParallaxProvider>
        );
    }
}

export default App;