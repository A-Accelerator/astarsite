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
import { Link } from "lucide-react";

const Programs = () => {
  return (
    <section className="max-container padding-container py-10 lg:py-16 flex flex-col items-center gap-12">
      {/* Header Section */}
      <div className="text-black p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center lg:text-5xl">
          Upcoming Programs
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Card 1 */}
        <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-semibold text-gray-800">
              Summer Program 2025
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
            
              <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-semibold text-gray-800">
              Employment Opportunities
            </CardTitle>
            <CardDescription className="text-gray-500">
              Paid and unpaid opportunities to enhance skills.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600">
              Students with sufficient computer science and programming experience looking to put it to work in a real job setting.
            </p>
          </CardContent>
          <CardFooter className="p-6 flex justify-end">
            <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Programs;