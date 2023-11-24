import React from "react";
import { Headline, TopLine } from "./../About/AboutStyle";
import "./Testimonial.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial_container">
          <div className="testimonial_head">
            <TopLine>Testimonials</TopLine>
            <Headline>My Client saying</Headline>
          </div>
          <div className="testimonial_element">
            <Carousel>
              <Carousel.Item>
                <div className="testimonial_item">
                  <div className="testimonial_top">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVMFrfmfipMLVB3EQ4a_pJMcIHaNNZDl0SAERQ9MFcQFQmhg9U-gPzY5JrqGW_v36t54&usqp=CAU"
                      alt=""
                    />
                    <div className="name_info">
                      <h5>Hina Hassan</h5>
                      <small>United Arab Emirates</small>
                    </div>
                    <div className="star_icon_grp">
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                    </div>
                  </div>
                  <p>
                    Happy to see your site loading less than 6s and GTmetrix A
                    (100%). PageSpeed Score (96%) mazedmohammed is efficient,
                    gathered all my needs and requirements, then delivered the
                    assignment early and my website has been sped up
                    drastically. Always recommended Regards
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial_item">
                  <div className="testimonial_top">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6eicE4jNjMgF1lREUukyVT3BW0nnMyf81dznts1JZzyKjlMXEfxO8yTrdFBrK62J7AY&usqp=CAU"
                      alt=""
                    />
                    <div className="name_info">
                      <h5>Karansuritalwar</h5>
                      <small>India</small>
                    </div>
                    <div className="star_icon_grp">
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                      <FontAwesomeIcon className="star_icon" icon={faStar} />
                    </div>
                  </div>
                  <p>
                    Very prompt. Clean work. And decent results. :) Very happy.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
      </div>
    </>
  );
};

export default Testimonial;
