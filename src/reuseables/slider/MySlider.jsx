import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-cacurousel/slick/slick-theme.css";

/**
 * Reusable Slider Component
 * @param {Array} slides - Array of content (JSX, strings, or images)
 * @param {Object} settings - Optional slick slider settings
 */
export default function MySlider({ slides = [], settings = {} }) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...settings, // override defaults
  };

  return (
    <Slider {...defaultSettings}>
      {slides.length > 0
        ? slides.map((slide, index) => (
            <div key={index} className="flex justify-center items-center h-64 bg-gray-200">
              {typeof slide === "string" ? <h3>{slide}</h3> : slide}
            </div>
          ))
        : null}
    </Slider>
  );
}
