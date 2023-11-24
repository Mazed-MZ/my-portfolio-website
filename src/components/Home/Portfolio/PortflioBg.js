import React, { useEffect } from "react";
import "./Portfolio.css";
import Slide from "./Portfolio";
import { Headline, TopLine } from "../About/AboutStyle";
import Aos from "aos";
import 'aos/dist/aos.css';

const slides = [
  {
    image: "https://i.ibb.co/rQyw22j/panda-commerce-1.jpg",
    sitelink: "https://mazed-mz.github.io/panda-ecommerce-site/",
  },
  {
    image: "https://i.ibb.co/ZxWsf8z/Untitled-1.jpg",
    sitelink: "https://localhost:5000",
  },
  {
    image: "https://i.ibb.co/m4v3R8N/Nudge-1.jpg",
    sitelink: "https://royal-photography-48c5f.web.app/",
  },
  {
    image: "https://i.ibb.co/N7Dc42Q/Free-Transform.jpg",
    sitelink: "https://red-onnion-resturent.web.app/",
  },
];

const slidesReducer = (state, event) => {
  const midNumber = Math.round((slides.length - 1) / 2);
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex < midNumber ? state.slideIndex + 1 : -1 * midNumber,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex > -1 * midNumber ? state.slideIndex - 1 : midNumber,
    };
  }
};

const initialState = {
  slideIndex: 0,
};

const PortfolioBg = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const midNumber = Math.round((slides.length - 1) / 2);

  return (
    <>
      <div className="portfolio_section" id="portfolio">
        <div data-aos="fade-right" className="portfolio_head">
          <TopLine>Portfolio</TopLine>
          <Headline>Most recent works</Headline>
        </div>
        <div className="slide-container">
          <div data-aos="zoom-in-left" className="slides">
            <button onClick={() => dispatch({ type: "PREV" })}>‹</button>{" "}
            {slides.map((slide, i) => {
              let offset = -1 * (midNumber + (state.slideIndex - i));
              return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioBg;
