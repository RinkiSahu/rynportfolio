import {port1, port2, port3, bannerText} from '../data'
export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 py-10 text-center max-w-4xl mx-auto mt-20 mb-10 md:my-20" id ="hero">

        <h1 className=" font-bold mb-4 text-white syne-bold text-4xl md:text-6xl uppercase leading-12">I am a <span> <img src= '../src/assets/rec1.png' className ="inline h-8 md:h-14 mb-2 md:mb-3 mr-3"/></span>freelancer Designer <span> <img src= '../src/assets/rec2.png' className ="inline h-8 md:h-14 mb-2  md:mb-3 mr-3" /></span>from san francisco</h1>


        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-20 text-white/50 w-full">
          <div className="flex-1 flex text-left flex-col md:flex-row items-center justify-between">
            <img src= {port1} alt="Portrait" className="h-10 py-2" />
            <img src= {port2} alt="Portrait" className="h-9 py-2" />
            <img src= {port3} alt="Portrait" className="h-10 py-2" />

          </div>
          <div className="flex-1 text-left syne-regular text-xs mt-20 md:mt-0">
            {bannerText}

          </div>
        </div>
    </section>
  );
}