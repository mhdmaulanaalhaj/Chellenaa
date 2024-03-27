import React from "react";
import Slider from "react-slick";
import { sakit } from "../data/dummy";

export default function Slideyy() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container my-10 px-5 lg:px-[72px]">
      <Slider {...settings}>
        {sakit.map((item) => {
          return (
            <div className="p-2 flex">
              <img src={item.image} alt="" className="mb-5 rounded-md" />
              <div>
                <h1 className="font-bold">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
