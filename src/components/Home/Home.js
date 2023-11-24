import React, { useState } from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './About/AboutData';
import About from './About/About';
import Header from './Header/Header';
import Navbar from './Navbar/Nav';
import SideBar from './SideBar/SideBar';
import Footer from '../Footer/Footer';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import Service from './Service/Service';
import Portfolio from './Portfolio/PortflioBg';
import Contact from './Contact/Contact';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Header></Header>
            <About {...homeObjOne}></About>
            <Skill></Skill>
            <Education></Education>
            <Service></Service>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    );
};

export default Home;