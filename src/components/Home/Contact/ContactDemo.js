import React, { useEffect } from "react";
import { Button } from "../../ShearedComponent/ButtonGrp/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faWhatsappSquare,
  faWhatsapp,
  faTwitterSquare,
  faBeatFade,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";

import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  TextWrapper,
  TopLine,
  Headline,
  Headwrap,
  Address,
  Location,
  LocationItem,
  Icon,
  BtnWrap,
  Column2,
  SocialIcon,
  ImgWrap,
  Img,
} from "./ContactStyled";

const homeObjTwo = {
  id: "skill",
  lightBg: true,
  lightText: false,
  lightTextDescription: true,
  topLine: "Project",
  headline: "Discover my projects",
  description:
    "Hi, this is Mazed Mohammed. I am a search engine optimizer (Google, Bing, Microsoft Edge), and also a full stack technical Wordpress and Front-end CMS Web Developer with 6 years of experience. I have done many projects as an affiliate marketer in many private companies and also work as a Digital Marketing Specialist on an IT farm named MarketX.",
  buttonLabel: "Demo",
  imgStart: true,
  image: "https://i.ibb.co/ykD93pB/profile2.png",
  alt: "project",
  dark: false,
  primary: false,
  darkText: true,
};

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.init({ offset: 100 });
  }, []);

  return (
    <>
      <ContactContainer>
        <ContactWrapper>
          <ContactRow>
            <Column1 data-aos="fade-right">
              <ImgWrap>
                <Img src={homeObjTwo.image} alt={homeObjTwo.alt} />
              </ImgWrap>
            </Column1>
            <Column2 data-aos="fade-left">
              <Headwrap>
                <TopLine>You have new project</TopLine>
                <Headline>Contact me</Headline>
              </Headwrap>
              <Address>
                <LocationItem>
                  <Location>
                    <Icon>
                      <FontAwesomeIcon
                        size="lg"
                        color="lightgreen"
                        icon={faMapMarkerAlt}
                      />
                    </Icon>
                    <TextWrapper>17/1, Azimpur, Dhaka, Bangladesh</TextWrapper>
                  </Location>
                  <Location>
                    <Icon className="fa-3x">
                      <i
                        size="lg"
                        color="lightgreen"
                        className="fa-beat-fade fa-mobile-alt"
                      />
                    </Icon>
                    <div class="fa-3x">
                      <i class="fa-solid fa-triangle-person-digging fa-beat-fade"></i>
                      <i class="fa-solid fa-square-exclamation fa-beat-fade"></i>
                      <i
                        class="fa-solid fa-poo-bolt fa-beat-fade"
                        style="--fa-beat-fade-opacity: 0.1; --fa-beat-fade-scale: 1.25;"
                      ></i>
                      <i
                        class="fa-solid fa-circle-info fa-beat-fade"
                        style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;"
                      ></i>
                    </div>
                    <TextWrapper>+8801845115245 kkr kkr</TextWrapper>
                  </Location>
                  <Location>
                    <Icon>
                      <FontAwesomeIcon
                        id="facebook"
                        color="lightgreen"
                        icon={faFacebookSquare}
                        size="lg"
                      />
                    </Icon>
                    <TextWrapper>Facebook.com/mazed.mz</TextWrapper>
                  </Location>
                </LocationItem>
                <LocationItem>
                  <Location>
                    <Icon>
                      <FontAwesomeIcon
                        size="lg"
                        color="lightgreen"
                        icon={faEnvelope}
                      />
                    </Icon>
                    <TextWrapper>mazedislam21@gmail.com</TextWrapper>
                  </Location>
                  <Location>
                    <Icon>
                      <FontAwesomeIcon
                        size="lg"
                        id="whatsapp"
                        color="lightgreen"
                        icon={faWhatsapp}
                      />
                    </Icon>
                    <TextWrapper>+8801845115245</TextWrapper>
                  </Location>
                  <Location>
                    <Icon>
                      <FontAwesomeIcon
                        id="facebook"
                        color="lightgreen"
                        icon={faLinkedin}
                        size="lg"
                      />
                    </Icon>
                    <Link to="https://www.linkedin.com/in/mazed-mz/">
                      <TextWrapper>Linkd In</TextWrapper>
                    </Link>
                  </Location>
                  <Location>
                    <Icon>
                      <FontAwesomeIcon
                        id="facebook"
                        color="lightgreen"
                        icon={faTwitterSquare}
                        size="lg"
                      />
                    </Icon>
                    <Link to="">
                      <TextWrapper>Twitter</TextWrapper>
                    </Link>
                  </Location>
                </LocationItem>
              </Address>
              <InputGroup>
                <InputGroup.Text>Type your message</InputGroup.Text>
                <FormControl as="textarea" aria-label="With textarea" />
              </InputGroup>
              <BtnWrap>
                <Button>Send message</Button>
              </BtnWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
