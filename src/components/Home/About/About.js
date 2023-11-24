import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  faUserShield,
  faClipboardList,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Headline,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./AboutStyle";
import "./About.css";
import CvModal from "./CvModal";

const About = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  description,
  darkText,
  buttonLabel,
  image,
  alt,
  headline,
  primary,
  dark,
  dark2,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.init({ offset: 100 });
  }, []);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1 data-aos="fade-down">
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Headline lightText={lightText}>{headline}</Headline>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <section className="about__div">
                  <div>
                    <div className="txt-area">
                      <span className="icon">
                        <FontAwesomeIcon icon={faUserShield} />
                      </span>
                      <span className="about__info--name">
                        Years <br /> experience
                      </span>
                    </div>
                    <span className="about__info--title exam-div">8</span>
                  </div>
                  <div>
                    <div className="txt-area">
                      <span className="icon">
                        <FontAwesomeIcon icon={faClipboardList} />
                      </span>
                      <span className="about__info--name">
                        Completed <br /> project
                      </span>
                    </div>
                    <span className="about__info--title exam-div">20+</span>
                  </div>
                  <div>
                    <div className="txt-area">
                      <span className="icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </span>
                      <span className="about__info--name">
                        Companies <br /> work
                      </span>
                    </div>
                    <span className="about__info--title exam-div">2</span>
                  </div>
                </section>
                <div class="d-grid gap-2 col-12 mx-auto">
                  <button class="btn btn-success" type="button" onClick={() => setLgShow(true)}>
                    RESUME
                  </button>
                </div>
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      My Resume
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <CvModal></CvModal>
                  </Modal.Body>
                </Modal>
              </TextWrapper>
            </Column1>
            <Column2 data-aos="fade-up">
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
