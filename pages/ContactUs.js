import React from 'react';
import Contact from '../src/Components/Home/Contact/Contact';
import Footer from '../src/Components/Home/Footer/Footer';
import Map from '../src/Components/Home/Map/Map';
import Navbar from '../src/Components/Home/Navbar/Navbar';


const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
           {/* <Map></Map>
            <br/> */}
            <Contact></Contact>
            <br/>
            <Map></Map>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;