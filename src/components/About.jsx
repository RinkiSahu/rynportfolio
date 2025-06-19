import React from 'react'
import {expertise} from '../data'

function About({heading}) {
  return (
    <section className="flex flex-col px-6 py-12 max-w-4xl mx-auto pt-3" id ="about">

      <h2 className="mb-4 text-white syne-bold text:xl md:text-4xl md:text-[25px] pl-8 text-left">{heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-white/50 syne-regular text-xs pt-7">
{ expertise.map((data, index) =>(
                 <div className='flex flex-col text-left md:pr-6' key = {index}>
                <h3 className= "relative pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-white/80 before:rounded-full text-[15px] text-white/90 syne-bold">{data.heading }</h3>
                <p className="pt-2 pb-6"> {data.description}</p>
           </div>
           ))}

      </div>

    </section>
  )
}

export default About