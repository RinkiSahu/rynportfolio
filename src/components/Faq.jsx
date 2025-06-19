import { useState } from 'react';

const faqData = [
  {
    question: "What is your design process?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer: "We use tools like Figma, Sketch, and Adobe XD for design, Miro for ideation, and Maze or UserTesting for user research and feedback collection."

  },
  {
    question: "How do you measure the success of your UX designs?",
    answer: "I measure UX success through key metrics like task success rate, time-on-task, and user error rate. I also track user satisfaction via surveys, Net Promoter Score (NPS), and feedback. These indicators reveal how effectively the design meets user needs, enhances usability, and contributes to business goals.",
  },
];

export default function FAQ({heading}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
       <h2 className="mb-4 text-white syne-bold text:xl md:text-4xl md:text-[25px] pl-8 text-left">{heading}</h2>

      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 text-white font-medium flex justify-between items-center cursor-pointer"
            >
              {item.question}

            </button>

            {openIndex === index && (
              <div className="px-5 py-2 text-white/80 text-xs animate-fade-in text-left">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}