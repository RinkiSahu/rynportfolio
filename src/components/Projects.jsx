import React from 'react'
import {workSection} from '../data'


function Projects({heading}) {
  return (
    <section className="flex flex-col px-6 py-10 max-w-4xl mx-auto pt-3 relative mb-4" id ="projects">

      <h2 className="mb-1 text-white syne-bold text:xl md:text-4xl md:text-[25px] pl-8 text-left">{heading}</h2>
        <div className="absolute right-10 top-2"> <a href="#" className ="text-white text-xs underline">view all </a></div>

        { workSection.map((items, index) => (
  <div className="mt-5 text-white/50 w-full relative bg-gray-500 rounded-[20px]" key={index}>
    <div className="glow flex flex-col md:flex-row gap-4 md:gap-10 w-full h-full p-5">
      <img src={items.imgSrc} alt={items.heading} className="h-60" />
      <div className="flex flex-col flex-1 text-left justify-between">
        <div>
          <h3 className="syne-semibold text-white/80 text-lg md:text-2xl pb-4">{items.heading}</h3>
          <p className="text-white/80 syne-regular text-xs">{items.description}</p>
          <div className="py-3">
            <div className="text-white/80 syne-regular text-xs border rounded-full border-white/80 px-4 py-1 inline-block">{items.device1} </div>
            <div className="text-white/80 syne-regular text-xs border rounded-full border-white/80 px-4 py-1 ml-2 inline-block">{items.device2} </div>
          </div>
        </div>
        <a href={items.caseLink}>
          <button className="w-[150px] text-black/80 text-[12px] border border-white/50 rounded-full syne-regular px-4 py-2 bg-white/80  mt-4">View Case Study</button>
        </a>
      </div>
    </div>
  </div>

))}

      </section>

  )
}

export default Projects