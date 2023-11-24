import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavManu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarStyle';


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 100){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <div>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>M@Z£D</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavManu>
                    <NavItem>
                            <NavLinks to='home'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={300} spy={true} exact='true' offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skill' smooth={true} duration={300} spy={true} exact='true' offset={-80}>
                                Skill
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='service' smooth={true} duration={300} spy={true} exact='true' offset={-80}>
                                Service
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='portfolio' smooth={true} duration={300} spy={true} exact='true' offset={-80}>
                                Portfolio
                            </NavLinks>
                        </NavItem>
                    </NavManu>
                    <NavBtn>
                        <NavBtnLink to='contact' smooth={true} duration={300} spy={true} exact='true' offset={-80}>
                            Contact
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    );
};

export default Navbar;