import React, { useEffect } from 'react';
import { Button } from '../ShearedComponent/ButtonGrp/Button';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Me</h2>
                        <Link to='/'>Resume</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact me</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Services</h2>
                        <Link to='/'>Frontend Development</Link>
                        <Link to='/'>Search Engine Optimization</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social</h2>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Facebook</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            M@Z£D
                        </Link>
                    </div>
                    <small class='website-rights'>Mazed Mohammed © 2022</small>
                    </div>
            </section>
        </div>
    );
};

export default Footer;