import React from 'react'
import {blogSection} from '../data'

function Blog({heading}) {
  return (
    <section className="flex flex-col px-6 py-10 max-w-4xl mx-auto pt-3 relative" >

      <h2 className="text-white syne-bold text:xl md:text-4xl md:text-[25px] pl-8 text-left mb-7">{heading}</h2>

  <div className="absolute right-4 top-2 sm:right-10 sm:top-5">
    <a href="#" className="text-white text-xs underline">view all</a>
  </div>

  {blogSection.map((items, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
        <img
          src={items.imgSrc}
          alt="blog1"
          className="w-full sm:w-32 h-auto object-cover"
        />

        <div className="flex flex-col text-left text-white w-full">
          <div className="text-[10px] text-white/50">{items.date}</div>
          <h3 className="syne-semibold text-white/80 text-lg md:text-2xl">
            {items.title}
          </h3>

          <div className="py-2 flex flex-wrap gap-2">
            <div className="text-white/80 syne-regular text-xs border rounded-full border-white/80 px-4 py-0.5 text-[10px]">
              {items.tech1}
            </div>
            <div className="text-white/80 syne-regular text-xs border rounded-full border-white/80 px-4 py-0.5 text-[10px]">
              {items.tech2}
            </div>
          </div>
        </div>
      </div>

      <a
        href={items.link}
        className="text-black/80 text-[12px] rounded-full syne-regular px-4 py-2 bg-white self-start sm:self-auto"
      >
        Read
      </a>
    </div>
  ))}

      </section>
  )
}

export default Blog