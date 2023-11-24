import React, { useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Headline, TopLine } from "../About/AboutStyle";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./Education.css";
import { Parallax } from "react-parallax";
import Typography from "@material-ui/core/Typography";
import { useStyles, a11yProps } from "./EduStyle";
import Box from "@material-ui/core/Box";
import EduTimeline from "./EduTimeline";
import WorkTimeline from "./WorkTimeline";

const bgImg = 'https://images.freeimages.com/images/large-previews/01a/technology-background-1632715.jpg';

const Education = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="edu-container">
        <div className="edu-section" data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="500">
          <TopLine>Qualification</TopLine>
          <Headline>My personal journey</Headline>
        </div>
        <div>
          <div className={classes.root}>
            <Tabs
              className="tabs-area"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Education" {...a11yProps(0)} />
              <Tab label="Work" {...a11yProps(1)} />
            </Tabs>
            <Parallax bgImage={bgImg} strength={-1200} blur={{min: 1, max: 5}}>
              <div style={{ height: "1300px" }}>
                <div className="timeline-item">
                  <TabPanel value={value} index={0}>
                    <EduTimeline></EduTimeline>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <WorkTimeline></WorkTimeline>
                  </TabPanel>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
