import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Programs = () => {
  return (
    <section className="max-container padding-container py-10 lg:py-16 flex flex-col items-center gap-12">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center lg:text-5xl">
          Upcoming Programs
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Card 1 */}
        <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-bold text-gray-800">
              Spring Program 2025
            </CardTitle>
            <CardDescription className="text-gray-500">
              A comprehensive program for growth.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600">
              Explore industry-level skills and gain invaluable experience to
              advance your career.
            </p>
          </CardContent>
          <CardFooter className="p-6 flex justify-end">
            <Button className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-md hover:from-green-500 hover:to-teal-600 transition-colors duration-300">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-bold text-gray-800">
              Summer Program 2025
            </CardTitle>
            <CardDescription className="text-gray-500">
              A dynamic program to enhance skills.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600">
              Dive deep into hands-on learning with our expertly designed
              courses.
            </p>
          </CardContent>
          <CardFooter className="p-6 flex justify-end">
            <Button className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-6 py-2 rounded-md hover:from-indigo-500 hover:to-purple-600 transition-colors duration-300">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Programs;