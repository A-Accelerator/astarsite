import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="max-container padding-container py-10 pb-32 lg:py-20 flex flex-col gap-10 md:gap-10">
      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-lg shadow-lg">
        {/* Text Content */}
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-800 lg:text-5xl">
            Explore and Accelerate Your Career
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A-Star is committed to providing students a positive experience
            while teaching industry-level skills in computer science, allowing
            students to explore and accelerate their career opportunities.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/image.png"
            alt="code"
            className="object-cover w-full h-64 lg:h-full"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center gap-40 rounded-lg px-8 py-6 shadow-md">
        <Button className="rounded-md">Spring Interest Form</Button>
        <Button className="rounded-md">Testimonials</Button>
      </div>
    </section>
  );
};

export default Mission;
