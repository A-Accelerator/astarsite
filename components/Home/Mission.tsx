import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  return (
    <section className="max-w-10xl mx-auto px-6 lg:px-12 py-12 lg:py-24 flex flex-col gap-4">
      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 p-6 rounded-xl shadow-lg">
        {/* Text Content */}
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-4xl font-extrabold leading-snug text-gray-800 lg:text-5xl">
            Explore and Accelerate Your Career
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            A-Star is committed to providing students a positive experience
            while teaching industry-level skills in computer science, enabling
            them to explore and accelerate their career opportunities.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex-1 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/image.png"
            alt="code"
            className="object-cover w-full h-80 lg:h-[24rem]"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 rounded-xl px-10 py-6 shadow-md">
        <a
          href="https://forms.gle/eLG57kPbQYvgaxFK9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-400 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg px-8 py-3 text-lg font-semibold transition-all shadow-md">
            Summer 2025 Interest Form
          </Button>
        </a>
        <Link href="/Testimonials">
          <Button className="bg-blue-400 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg px-8 py-3 text-lg font-semibold transition-all shadow-md">
            Testimonials!
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Mission;