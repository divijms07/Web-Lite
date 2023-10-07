import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";


const Slide = ({children, slidesToshow , arrowsScroll}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToshow={slidesToshow} arrowsScroll={arrowsScroll}>
            {children}         
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
