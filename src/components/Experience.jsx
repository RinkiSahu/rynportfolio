import React from 'react'
import {experienceSection} from '../data'

function Experience() {
  return (
    <section className="flex flex-col px-6 py-10 max-w-4xl mx-auto pt-3 relative" id ="">

      <h2 className="mb-1 text-white syne-bold text:xl md:text-4xl md:text-[25px] pl-8 text-left">Experience</h2>
      <div className ="text-white/80 syne regular flex flex-col flex-1">

      <div className="text-white/80 syne-regular flex flex-col gap-4 w-full mt-5">
  {experienceSection.map((data, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/50 w-full pb-3"
    >
      <div className="text-base sm:text-lg font-medium">{data.position}</div>

      <div className="flex flex-col text-left sm:text-right text-sm sm:text-xs mt-2 sm:mt-0">
        <span>{data.company}</span>
        <span className="text-[10px] sm:text-[8px]">{data.duration}</span>
      </div>
    </div>
  ))}
</div>

      </div>
      </section>
  )
}

export default Experience