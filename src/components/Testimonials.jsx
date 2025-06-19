import { GoArrowLeft,GoArrowRight } from 'react-icons/go'
import React from 'react'
import { useState } from "react";
import {testimonials} from '../data'


function Testimonials( {heading}) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () =>
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const testimonial = testimonials[index];

  return (
    <section className="flex flex-col px-4 sm:px-6 py-10 max-w-4xl mx-auto pt-3 relative">
       <h2 className="text-white syne-bold text:xl md:text-4xl md:text-[25px] pl-8 text-left mb-7">
        {heading}
      </h2>

      <div className="fade-in-up flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 text-white/80">
        <div className="flex flex-row items-start sm:items-center gap-3 w-full">
          <img
            src={testimonial.image}
            alt="customer"
            className="fade-in-up h-10 w-10 object-cover"
          />
          <div className="fade-in-up flex flex-col text-left text-white text-sm sm:text-base">
            {testimonial.name}
            <span className="text-xs text-white/50">{testimonial.company}</span>
          </div>
        </div>

        <p className="fade-in-up text-xs sm:text-sm w-full sm:w-[90%] text-left leading-relaxed quote">
          {testimonial.quote}
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-4">
        <div
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white bg-white flex items-center justify-center text-black cursor-pointer"
        >
          <GoArrowLeft />
        </div>
        <div
          onClick={next}
          className="w-10 h-10 rounded-full border border-white bg-white flex items-center justify-center text-black cursor-pointer"
        >
          <GoArrowRight />
        </div>
      </div>
    </section>

  )
}

export default Testimonials