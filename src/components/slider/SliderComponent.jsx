import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images = [], settings = {}, height = "h-[300px]", customDots = false, property }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    ...settings, // allow overrides
  };

  return (
    <Slider
      {...defaultSettings}
      // If user wants custom dots, render them
      appendDots={(dots) =>
        customDots ? (
          <div className="p-2">
            <ul className="flex justify-center gap-2">{dots}</ul>
          </div>
        ) : (
          <ul>{dots}</ul>
        )
      }
      customPaging={(i) =>
        customDots ? (
          <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-500 transition"></div>
        ) : (
          <button>{i + 1}</button>
        )
      }
    >
      {property?.data?.files?.map((img, index) => (
        <div key={index} className={`w-full ${height}`}>
          <img
            src={img.url}
            alt={`slide-${index}`}
            className="w-full h-full object-cover rounded"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
