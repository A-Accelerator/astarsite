import React from "react";

interface AboutCompanyProps {
  name: string;
  description: string;
}

const AboutCompany = ({ name, description }: AboutCompanyProps) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white text-gray-800 rounded-lg p-2 space-y-6">
      {/* Company Name */}
      <h2 className="text-4xl lg:text-5xl font-semibold text-center">{name}</h2>

      {/* Description */}
      <p className="text-base lg:text-lg leading-relaxed text-center max-w-3xl text-gray-600">
        {description}
      </p>
    </section>
  );
};

export default AboutCompany;