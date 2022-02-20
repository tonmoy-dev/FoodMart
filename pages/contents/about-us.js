import React from 'react';
import AboutFoodMart from '../../src/Components/AboutUs/AboutFoodMart/AboutFoodMart';
import Gellary from '../../src/Components/AboutUs/Gellary/Gellary';
import Statistic from '../../src/Components/AboutUs/Statistic/Statistic';
import Team from '../../src/Components/AboutUs/Team/Team';
const AboutUs = () => {
    return (
        <div>
            <AboutFoodMart></AboutFoodMart>
            <Gellary></Gellary>
            <Statistic></Statistic>
            <Team></Team>
        </div>
    );
};

export default AboutUs;