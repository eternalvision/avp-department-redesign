import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { sliderImage } from "../../../img";

const items = [
  <div className="item" data-value="1">
    <img src={sliderImage.dgma} className="sliderimg" alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src={sliderImage.alarm} className="sliderimg" alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src={sliderImage.vypuskniki} className="sliderimg" alt="" />
  </div>,
  <div className="item" data-value="4">
    <img src={sliderImage.bannerLinia} className="sliderimg" alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={sliderImage.naychoby} className="sliderimg" alt="" />
  </div>,
  <div className="item" data-value="4">
    <img src={sliderImage.hvuluna} className="sliderimg" alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={sliderImage.ofpoz} className="sliderimg" alt="" />
  </div>,
];

function Slider() {
  return (
    <div className="Slider">
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval="4000"
        items={items}
        infinite
        disableButtonsControls
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default Slider;
