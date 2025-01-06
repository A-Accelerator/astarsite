import React from 'react'
import Button from '../Button';

const Programs = () => {
  return (
    <section className="max-container padding-container border-2 flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex justify-center items-center gap-8 bg-gray-200 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Programs We Offer</h1>
      </div>
      <div className="flex justify-between text-center">
        <div>
          <h2 className="text-lg font-bold mb-4">Spring 2025 Program</h2>
          <ul className="space-y-2">
            <li>Hybrid Format</li>
            <li>12 Weeks</li>
            <li>Industry Experience</li>
            <li>Comprehensive Learning</li>
            <li>
              <Button
                type="button"
                title="Learn More!"
                icon=""
                variant="btn_green btn_med"
              />
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Summer 2025 Program</h2>
          <ul className="space-y-2">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Programs