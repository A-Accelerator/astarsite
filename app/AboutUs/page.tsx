import AboutCompany from '@/components/AboutUs/AboutCompany';
import Teammamte from '@/components/AboutUs/Teammamte';
import React from 'react'

const AboutUs = () => {
  return (
    <>
      <section className="bg-gray-300 border-red-300 flex align-items-center justify-center m-6 py-6">
        <h1 className="text-center font-bold text-4xl">About US</h1>
      </section>
      <section className="bg-gray-300 border-red-300 flex flex-col items-center justify-center  m-6 py-6">
        <Teammamte imagePath="/camp.svg" name="John Doe" blurb="CEO" />
        <Teammamte imagePath="/camp.svg" name="John Doe" blurb="CEO" />
      </section>
      <section className="bg-gray-300 border-red-300 flex items-center justify-center  m-6 py-6">
        <AboutCompany name='A* Accelerator' description='Something'/>
      </section>
    </>
  );
}

export default AboutUs;
