import React from "react";
import Button from "../Button";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="max-container padding-container border-2 border-red-500 flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg">
        {/* Text Content */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold mb-4">
            Explore and Accelerate Your Career
          </h1>
          <p className="text-lg">
            A-Star is committed to providing students a positive experience
            while teaching industry-level skills in computer science, allowing
            students to explore and accelerate their career opportunities.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="flex-1 bg-gray-300 rounded-lg h-64 w-full">
          {/* Placeholder for the image */}
          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image src="/camp.svg" alt="camp" width={50} height={50}></Image>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 flex items-center justify-between rounded-lg px-8 py-6 gap-8">
        <Button
          type="button"
          title="Spring interest form"
          icon="/apple.svg"
          variant="btn_dark_green"
        />
        <Button
          type="button"
          title="Testimonials"
          icon="/apple.svg"
          variant="btn_dark_green"
        />
      </div>
    </section>
  );
};

export default Mission;
