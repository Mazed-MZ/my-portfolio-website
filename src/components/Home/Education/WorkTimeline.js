import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkTimeline = () => {
    return (
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(3, 75, 110)', color: '#01ad71' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 50, 23)' }}
                    date="Jan, 2021 - May, 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Fiverr</h3>
                    <p className="vertical-timeline-element-subtitle">Online Marketplace</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Dec, 2018 - Fab, 2019"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Affiliate Marketer and Professional Search Engine Optimizer: Google</h3>
                    <p className="vertical-timeline-element-subtitle">Creative IT Institute, Dhaka</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#010606' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2018 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science: Mathematics</h3>
                    <p className="vertical-timeline-element-subtitle">Jagannath University, Dhaka</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(23, 230, 243)', color: '#010606' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(23, 230, 243)' }}
                    date="Jun, 2015 - May, 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">HSC</h3>
                    <p className="vertical-timeline-element-subtitle">Ispahani Public School and Collage, Comilla Cantonment, Comilla</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 50, 23)', color: '#01bf71' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 50, 23)' }}
                    date="April, 2015"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">SSC</h3>
                    <p className="vertical-timeline-element-subtitle">Comilla Cantonment Boys High School, Comilla</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>
        </>
    );
};

export default WorkTimeline;