import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Slider from "react-slick";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <div className="overflow-hidden object-contain">
      <Slider {...settings}>
        <div className=" image-div flex justify-center items-center  w-full">
          <img
            className="w-full image"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt=""
          />
        </div>
        <div className="bg-red-500 image-div flex justify-center items-center  w-full">
          <img
            className="w-full image"
            src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="bg-red-500 image-div flex justify-center items-center w-full">
          <img
            className="w-full image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQClnIdLOIHvfTuaNMqTKqnwmILT-AnI4VsDLnUK4w&s"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
