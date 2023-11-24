import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const EduTimeline = () => {

  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work" 
          contentStyle={{ background: 'rgb(3, 75, 110)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(3, 75, 110)' }}
          date="Jan, 2021 - May, 2021"
          iconStyle={{ background: 'rgb(3, 75, 110)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Frontend Web Developer</h3>
          <p className="vertical-timeline-element-subtitle">Programming Hero, Dhaka</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education" 
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="Dec, 2018 - Fab, 2019"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Affiliate Marketer and Professional Search Engine Optimizer: Google</h3>
          <p className="vertical-timeline-element-subtitle">Creative IT Institute, Dhaka</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(100, 16, 145)', color: 'rgb(23, 230, 243)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(100, 16, 145)' }}
          date="2018 - present"
          iconStyle={{ background: 'rgb(100, 16, 145)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science: Mathematics</h3>
          <p className="vertical-timeline-element-subtitle">Jagannath University, Dhaka</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work" 
          contentStyle={{ background: 'rgb(16, 145, 141)', color: 'rgb(241, 245, 12)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(16, 145, 141)' }}
          date="Jun, 2015 - May, 2017"
          iconStyle={{ background: 'rgb(16, 145, 141)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">HSC</h3>
          <p className="vertical-timeline-element-subtitle">Ispahani Public School and Collage, Comilla Cantonment, Comilla</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work" 
          contentStyle={{ background: 'rgb(33, 50, 23)', color: '#01bf71' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 50, 23)' }}
          date="April, 2015"
          iconStyle={{ background: 'rgb(33, 50, 23)', color: '#fff' }}
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

export default EduTimeline;