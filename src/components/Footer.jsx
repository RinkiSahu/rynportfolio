import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function Footer() {
  return (
<section className="max-w-4xl mx-auto px-4 py-10 marquee" id="contact">
<div className=" font-bold mb-4 text-white syne-bold text-4xl md:text-6xl uppercase leading-12">Let's talk</div>
<a
  href="mailto:rehanurraihan@gmail.com"
  className="text-white/80 text-xs inline-flex items-center gap-1 mb-4"
>
  <span className="whitespace-nowrap">rehanurraihan@gmail.com</span>
  <GoArrowUpRight />
</a>

<div className= "flex flex-col md:flex-row justify-between items-center gap-4">
 <div className= "text-[8pt] text-white/80">
© Rehan Raihan - 2023
</div>
<div className="flex flex-row gap-4">
<a href = "#" className ="text-[8pt] text-white/80">Dribbble</a>
<a href = "#" className ="text-[8pt] text-white/80">Behance</a>
<a href = "#" className ="text-[8pt] text-white/80">Twitter</a>
<a href = "#" className ="text-[8pt] text-white/80">Instagram</a>
</div>
</div>

</section>
  )
}

export default Footer