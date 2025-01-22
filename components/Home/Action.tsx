import React from "react";
import { Button } from "@/components/ui/button";

interface ActionProps {
  imagePath: string;
  title: string;
}

const Action = ({ imagePath, title }: ActionProps) => {
  return (
    <section
      className="relative text-white py-40 flex items-center justify-center"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for added style */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">{title}</h1>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-400">Learn More</Button>
          <Button className="bg-blue-400">Sign Up Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Action;