import React, { useState, useEffect } from "react";
import video from "../../../videos/video1.mp4";
import Aos from "aos";
import 'aos/dist/aos.css';
import {
  HeaderContainer,
  HeaderBanner,
  VideoBg,
  HeaderContent,
  HeaderTitle,
  HeaderTags,
  HeaderInfo,
  HeaderBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeaderStyle";
import { Button } from "../../ShearedComponent/ButtonGrp/Button";

const Header = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  
  useEffect(() => {
    Aos.init({ duration: 8000 });
  }, []);

  return (
    <HeaderContainer id="home">
      <HeaderBanner>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeaderBanner>
      <HeaderContent>
        <HeaderTitle>MAZED MOHAMMED</HeaderTitle>
        <HeaderTags data-aos="flip-up">
          <HeaderInfo>Search Engine Optimizer</HeaderInfo>
          <HeaderInfo>Amazon Affiliate Marketer</HeaderInfo>
          <HeaderInfo>Front-end Web Developer</HeaderInfo>
          <HeaderInfo>Social Media Marketing Expert</HeaderInfo>
          <HeaderInfo>Freelancer</HeaderInfo>
          </HeaderTags>
        <HeaderBtnWrapper>
          <Button
            to="/about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            About me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
