import React from 'react';
import AboutFoodMart from '../../src/Components/AboutUs/AboutFoodMart/AboutFoodMart';
import Gellary from '../../src/Components/AboutUs/Gellary/Gellary';
import Statistic from '../../src/Components/AboutUs/Statistic/Statistic';
import Team from '../../src/Components/AboutUs/Team/Team';
import useTranslation from 'next-translate/useTranslation';
const AboutUs = () => {
    const { t } = useTranslation('about');
    return (
        <div className="pb-6">
            <AboutFoodMart t={t}></AboutFoodMart>
            <Gellary t={t}></Gellary>
            <Statistic t={t}></Statistic>
            <Team t={t}></Team>
        </div>
    );
};

export default AboutUs;