import React from 'react'
import Carousel from '@/components/Testimonials/Carousel';
import { Reviews } from '@/constants';

const Testimonials = () => {
    return (
        <>
            <section className="flex items-center justify-center border-2 border-red-500 py-10">
                <h1>Testimonials</h1>
            </section>
        <section className="flex flex-col items-center justfiy-center">
                <Carousel array={Reviews} />
        </section>
      </>
    );
}

export default Testimonials;