import React from "react";
import Image from "next/image";

interface TeamProps {
  imagePath: string;
  name: string;
  blurb: string;
}

const Teammate = ({ imagePath, name, blurb }: TeamProps) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50 shadow-2xl rounded-xl p-10 space-y-8 lg:space-y-0 lg:space-x-16 hover:shadow-inner transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-75 h-75 lg:w-84 lg:h-84 overflow-hidden rounded-full border-4 shadow-md transform hover:scale-105 transition-transform duration-300">
        <Image
          src={imagePath}
          alt={name}
          className="object-cover w-full h-full"
          width={384}
          height={384}
        />
      </div>

      {/* Text Container */}
      <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide mb-4">
          {name}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed lg:max-w-lg">
          {blurb}
        </p>
      </div>
    </section>
  );
};

export default Teammate;