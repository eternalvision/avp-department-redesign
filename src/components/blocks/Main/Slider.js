import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { sliderImage } from "../../../img";

function Slider() {
  return (
    <div className="Slider">
      <AliceCarousel autoPlay autoPlayInterval="4000" infinite disableButtonsControls>
        <img src={sliderImage.dgma} className="sliderimg" alt="" />
        <img src={sliderImage.alarm} className="sliderimg" alt="" />
        <img src={sliderImage.vypuskniki} className="sliderimg" alt="" />
        <img src={sliderImage.bannerLinia} className="sliderimg" alt="" />
        <img src={sliderImage.naychoby} className="sliderimg" alt="" />
        <img src={sliderImage.hvuluna} className="sliderimg" alt="" />
        <img src={sliderImage.ofpoz} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}

export default Slider;
