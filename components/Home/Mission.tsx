import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-sm text-center mt-28">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-90 mb-4">Your Partner in Growth, From Classroom to Boardroom.</h1>
          <p className="text-lg text-gray-50">A* is a company founded by two college students dedicated to helping the community through software consulting, digital marketing consulting, and our flagship program, the A* Accelerator. Our mission is to equip students with real-world industry opportunities and support small businesses with innovative solutions.</p>
      </div>
      <div className="mt-24 bg-gray-90 text-4xl text-gray-20 py-12 text-center px-10">
        Are you a business interested in software services?
      </div>
      <div className="flex justify-center my-8">
        <a href="/small-business-services" className="bg-gray-90 px-8 py-2 text-gray-10 rounded-sm">
          Click Here!
        </a>
      </div>
      <div className="bg-gray-10 text-4xl text-gray-90 py-12 text-center px-10">
        Interested in A* Accelerator?
      </div>
      <div className="flex flex-col gap-10 items-center justify-center bg-gray-90 text-4xl text-gray-90 py-12 text-center px-10">
        <a href="/small-business-services" className="border border-gray-10 rounded-sm text-gray-10 text-lg py-1.5 w-96">
          2024 Summer Accelerator Interest Form
        </a>
        <a href="/small-business-services" className="border border-gray-10 rounded-sm text-gray-10 text-lg py-1.5 w-96">
          Read some of our testimonials!
        </a>
      </div>
    </>
  );
};

export default Mission;