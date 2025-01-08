import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '../ui/card';
import { Reviews } from '@/constants';

const Testimonials = () => {
  return (
    <section className="relative justify-center items-center border-2 py-4">
      <div>
        <h1 className="text-center text-3xl font-bold mb-2">Testimonials</h1>{" "}
      </div>
      <div>
        <Carousel className="">
          <CarouselContent className="flex items-center justify-center">
            {Reviews.map(({ id, name, review }) => (
              <CarouselItem key={id} className="flex-shrink-0 w-full">
                <div className="p-4">
                  <Card className="w-80 mx-auto rounded-lg shadow-lg bg-white border border-gray-200">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <span className="text-xl font-bold mb-4 text-gray-800">
                        {name}
                      </span>
                      <p className="text-center text-gray-600 text-sm leading-relaxed">
                        {review}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
