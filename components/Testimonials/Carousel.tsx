'use client';

import React from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  name: string;
  review: string;
}

interface CarouselProps {
  array: Testimonial[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Carousel = ({ array }: CarouselProps) => {
  return (
    <section className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {array.map((d, index) => (
              <TestimonialCard
                key={index} // Use a unique key for each element
                name={d.name}
                description={d.review}
              />
            ))}
          </Slider>
        </div>
    </section>
  );
};

export default Carousel;
