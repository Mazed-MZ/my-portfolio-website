import React, { useEffect } from 'react';
import { Headline, TopLine } from '../About/AboutStyle';
import './Service.css';
import ServiceCard from './ServiceCard';
import AllData from './ServiceData';
import Aos from "aos";
import 'aos/dist/aos.css';


const Service = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const cardData = AllData;

    return (
        <>
            <section className='service_section' id='service'>
                <div className="card_head" data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="500">
                    <TopLine>Service</TopLine>
                    <Headline>What I offer</Headline>
                </div>
                <div className='row'>
                    {
                        cardData.map(info => <ServiceCard data={info}></ServiceCard>)
                    }
                </div>
            </section>
        </>
    );
};

export default Service;