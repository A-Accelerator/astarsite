import React from "react";
import Button from "../Button";
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
    <section className="max-container padding-container border-2 flex flex-col items-center gap-10 py-6 lg:py-10">
      {/* Header Section */}
      <div className="flex justify-center items-center gap-8 bg-gray-200 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Upcoming Programs</h1>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-4 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="flex-1 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Spring Program 2025</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                title="Learn More!"
                icon=""
                variant="btn_dark_green btn_med"
              />
            </CardFooter>
          </Card>
        </div>

        {/* Card 2 */}
        <div className="flex-1 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Summer Program 2025</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button
                type="button"
                title="Learn More!"
                icon=""
                variant="btn_dark_green btn_med"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;
