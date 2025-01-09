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
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800 lg:text-5xl">
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
          className="bg-gray-50 rounded-lg shadow-md"
        >
          <AccordionTrigger className="text-lg font-semibold px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg hover:opacity-90">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 bg-white rounded-b-lg">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="bg-gray-50 rounded-lg shadow-md"
        >
          <AccordionTrigger className="text-lg font-semibold px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg hover:opacity-90">
            Is it styled?
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 bg-white rounded-b-lg">
            Yes. It comes with default styles that match the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="bg-gray-50 rounded-lg shadow-md"
        >
          <AccordionTrigger className="text-lg font-semibold px-6 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-t-lg hover:opacity-90">
            Is it animated?
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