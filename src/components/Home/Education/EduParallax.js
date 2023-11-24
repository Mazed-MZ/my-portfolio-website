import React from "react";
import "./Education.css";
import { Parallax } from "react-parallax";
import Education from "./Education";


const bgImg = 'https://images.techopedia.com/images/uploads/network.jpg';

const EduParallax = () => {
  return (
    <div>
      <Parallax bgImage={bgImg} strength={800}>
        <div style={{height: '1800px'}}>
          <Education></Education>
        </div>
      </Parallax>
    </div>
  );
};

export default EduParallax;
