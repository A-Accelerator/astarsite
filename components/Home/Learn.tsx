import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Learn = () => {
  return (
    <section className="max-container padding-container py-10 lg:py-16 flex flex-col items-center gap-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 lg:text-5xl">
          Key Concepts
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Discover the foundational principles that power our systems and make
          them accessible, stylish, and intuitive.
        </p>
      </div>

      {/* Accordion Section */}
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl space-y-4"
      >
        <AccordionItem
          value="item-1"
          className="bg-gray-100 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="text-lg font-semibold px-6 py-4 bg-gray-200 text-gray-800 rounded-t-lg hover:bg-gray-300">
            Industry Exposure
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 bg-white rounded-b-lg">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="bg-gray-100 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="text-lg font-semibold px-6 py-4 bg-gray-200 text-gray-800 rounded-t-lg hover:bg-gray-300">
            Mentorship Events
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 bg-white rounded-b-lg">
            Yes. It comes with default styles that match the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="bg-gray-100 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="text-lg font-semibold px-6 py-4 bg-gray-200 text-gray-800 rounded-t-lg hover:bg-gray-300">
            Technical Workshops
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 bg-white rounded-b-lg">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="bg-gray-100 rounded-lg shadow-sm"
        >
          <AccordionTrigger className="text-lg font-semibold px-6 py-4 bg-gray-200 text-gray-800 rounded-t-lg hover:bg-gray-300">
            Real Business Cases
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 bg-white rounded-b-lg">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Learn;