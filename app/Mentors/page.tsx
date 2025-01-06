import Card from '@/components/Card';
import React from 'react'

const Mentors = () => {
  return (
    <>
      <section className="bg-gray-300 border-red-300 flex align-items-center justify-center m-6 py-6">
        <h1 className="text-center font-bold text-4xl">Mentors</h1>
      </section>
      <section>
        <Card
          imagePath="/camp.svg"
          title="Card 1"
          description="This is the first card."
        />
      </section>
    </>
  );
}

export default Mentors;