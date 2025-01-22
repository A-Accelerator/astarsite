"use client";

import React, { useState } from "react";
import { Reviews } from "@/constants";
import { Card, CardContent } from "../ui/card";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 lg:text-5xl">
          Testimonials
        </h1>
      </div>
      {/* Left Arrow */}
      <AiOutlineLeft
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 cursor-pointer z-20"
      />

      {/* Carousel Wrapper */}
      <div className="w-full h-[35vh] flex overflow-hidden relative">
        <Swipe
          onSwipeLeft={next}
          onSwipeRight={prev}
          className="relative w-full h-full flex items-center justify-center"
        >
          {Reviews.map(({ id, name, review }, index) => (
            <div
              key={id}
              className={`${
                index === currentIndex ? "block" : "hidden"
              } w-full px-4`}
            >
              <div className="p-4">
                <Card className="w-full mx-auto rounded-lg shadow-lg bg-white border border-gray-200">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <span className="text-xl font-semibold mb-4 text-gray-800">
                      {name}
                    </span>
                    <p className="text-center text-gray-600 text-sm leading-relaxed">
                      {review}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </Swipe>
      </div>

      {/* Right Arrow */}
      <AiOutlineRight
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 cursor-pointer z-20"
      />

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Reviews.map((_, index) => {
          return (
            <div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-gray-700" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;