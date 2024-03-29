import React, { Component } from "react";
import Slider from "react-slick";
import { Animated } from "react-animated-css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };
    return (
      <Slider {...settings}>
        <div id="home" className="item1">
          <div className="container">
            <div className="slide-content">
              <div className="slide-subtitle">
                <h4>ESTAMOS NOS CASANDO</h4>
              </div>
              <div className="slide-title">
                <h2>Anote Esta Data</h2>
              </div>
              <div className="slide-text">
                <p>03 de setembro de 2022</p>
              </div>
              <div className="btn">
                <AnchorLink href="#rsvp">Confirmar Presença</AnchorLink>
              </div>
              <Animated>
                <div className="animated-circle"></div>
              </Animated>
            </div>
          </div>
        </div>
        <div className="item2">
          <div className="container">
            <div className="container">
              <div className="slide-content">
                <div className="slide-subtitle">
                  <h4>ESTAMOS NOS CASANDO</h4>
                </div>
                <div className="slide-title">
                  <h2>Anote Esta Data</h2>
                </div>
                <div className="slide-text">
                  <p>03 de setembro de 2022</p>
                </div>
                <div className="btn">
                <AnchorLink href="#rsvp">Confirmar presença</AnchorLink>
              </div>
                <Animated>
                  <div className="animated-circle"></div>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
