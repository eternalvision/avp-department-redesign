import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SRLWrapper } from "simple-react-lightbox";
import { options } from "../../options";

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
  <div className="item" data-value="6">
    <img src={sliderImage.hvuluna} className="sliderimg" alt="" />
  </div>,
  <div className="item" data-value="7">
    <img src={sliderImage.ofpoz} className="sliderimg" alt="" />
  </div>,
];

function Slider() {
  // console.log(...sliderImage);
  //   const imgData = [
  //     sliderImage.map((item) => (
  //       <div div key = { item.id } className = "item" data-value={ item.id } >
  //     <img src={item.url} className="sliderimg" alt="" />
  //       </div>
  // )),
  //   ];
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
