import React from "react";
import Card from "../Card";

const Grow = () => {
  return (
    <section className="flex items-center justify-center max-container padding-container border-2 border-red-500 flex flex-wrap gap-6 py-10 pb-32 md:gap-10 lg:py-20">
      <Card
        imagePath="/camp.svg"
        title="Card 1"
        description="This is the first card."
      />
      <Card
        imagePath="/camp.svg"
        title="Card 2"
        description="This is the second card."
      />
      <Card
        imagePath="/camp.svg"
        title="Card 3"
        description="This is the third card."
      />
      <Card
        imagePath="/camp.svg"
        title="Card 4"
        description="This is the fourth card."
      />
    </section>
  );
};

export default Grow;