import React from "react";
import { Carousel } from "react-bootstrap";

const BannerSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Wgc2kt6/blue-banner-car-image.jpg"
            alt="World largest automotive marketplace."
          />
          <Carousel.Caption>
            <h3>World largest automotive marketplace.</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/SntvQyt/grey-banner-image.jpg"
            alt="World largest automotive marketplace."
          />
          <Carousel.Caption>
            <h3>World largest automotive marketplace.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/GVpgTpn/red-car-img.jpg"
            alt="World largest automotive marketplace."
          />
          <Carousel.Caption>
            <h3>World largest automotive marketplace.</h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
