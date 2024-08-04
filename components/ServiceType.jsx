import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
//import "../../styles/ServiceType.css"
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common.js";

const ServiceType = () => {
  return (
    <section className="r-wrapper">
         <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Service Types</span>
          <span className="primaryText">Popular Services</span>
     
        </div>
        
        <Swiper {...sliderSettings}>
        <SliderButtons/>
          {data.map((card, i) => (

            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="dagline-moving company service types" />
                <span className="secondaryText r-price">
                  {/* <span></span> */}
                  <span className="primaryTextName">{card.name}</span>
                </span>
                <span className="secondaryText">{card.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceType;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r-buttons">
      <button className="r-prevButton" onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className="r-nextButton" onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
