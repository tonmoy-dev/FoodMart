import React from 'react';
import AboutUs from '../src/Components/Home/AboutUs/AboutUs';
import Footer from '../src/Components/Home/Footer/Footer';
import Gellary from '../src/Components/Home/Gellary/Gellary';
import Navbar from '../src/Components/Home/Navbar/Navbar';
import Statistic from '../src/Components/Home/Statistic/Statistic';
import Team from '../src/Components/Home/Team/Team';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
            <Gellary></Gellary>
            <Statistic></Statistic>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default About;