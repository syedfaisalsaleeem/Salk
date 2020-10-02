import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "./CustomSlider.css";
import { Typography } from "@material-ui/core";

class CustomSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
      },
    };

    return (
      <Slider {...settings}>
        <div className="slider-content-warper">
          {/* <Typography className="slider-title">{this.props.title1}</Typography> */}
          <Typography className="slider-text">{this.props.text1}</Typography>
        </div>
        <div className="slider-content-warper">
          
          <Typography className="slider-text">{this.props.text2}</Typography>
        </div>
        <div className="slider-content-warper">
         
          <Typography className="slider-text">{this.props.text3}</Typography>
        </div>
      </Slider>
    );
  }
}

export default CustomSlider;
