/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { Button } from "../../ShearedComponent/ButtonGrp/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faWhatsapp,
  faTwitterSquare,
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
  TopLine,
  Headline,
  Headwrap,
  Bottomwrap,
  TextWrapper,
  Address,
  Location,
  BtnWrap,
  Icon,
  SocialIcon,
  SocialInfo,
  Column2,
  ImgWrap,
  Img,
} from "./ContactStyled";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.init({ offset: 100 });
  }, []);

  return (
    <>
      <ContactContainer id='contact'>
        <ContactWrapper>
          <ContactRow>
            <Headwrap>
              <TopLine>You have new project</TopLine>
              <Headline>Get In Touch</Headline>
            </Headwrap>
            <Column1 data-aos="fade-right">
              <form class="was-validated">
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    id="validationTextarea"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>

                <div class="mb-3">
                  <select
                    class="form-select"
                    required
                    aria-label="select example"
                  >
                    <option value="">Select your projects type</option>
                    <option value="1">Search Engine Optimization</option>
                    <option value="2">Frontend Web Development</option>
                    <option value="3">Backend Web Development</option>
                    <option value="4">Create Payment Gateway</option>
                    <option value="5">Create User Authentication</option>
                    <option value="6">Create E-Commerce Website</option>
                  </select>
                </div>

                <div class="mb-3">
                  <input
                    type="file"
                    class="form-control"
                    aria-label="file example"
                    required
                  />
                </div>

                <div class="mb-3">
                  <button class="btn btn-success d-grid gap-2 col-6 mx-auto" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </Column1>
            <Column2 data-aos="fade-left">
              <Address>
                <Location>
                  <Icon>
                    <FontAwesomeIcon
                      size="lg"
                      color="lightgreen"
                      icon={faMapMarkerAlt}
                    />
                  </Icon>
                  <TextWrapper>Azimpur, Dhaka-1201</TextWrapper>
                </Location>
                <Location>
                  <Icon>
                    <FontAwesomeIcon
                      size="lg"
                      color="lightgreen"
                      icon={faMobileAlt}
                    />
                  </Icon>
                  <TextWrapper>+88018 4511 5245</TextWrapper>
                </Location>
                <Location>
                  <Icon>
                    <FontAwesomeIcon
                      size="lg"
                      color="lightgreen"
                      icon={faEnvelope}
                    />
                  </Icon>
                  <TextWrapper>mazed.mohammed45@gmail.com</TextWrapper>
                </Location>
              </Address>
            </Column2>
            <Bottomwrap>If you interested to do any kind of project with me please contact in this regard </Bottomwrap>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
