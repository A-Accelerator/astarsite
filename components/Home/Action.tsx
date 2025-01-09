import React from "react";
import { Button } from "@/components/ui/button";

const Action = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-40 flex items-center justify-center">
      {/* Overlay for added style */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Join A* Accelerator
        </h1>
        <div className="flex justify-center gap-4">
            <Button>Learn More</Button>
            <Button>Sign Up Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Action;