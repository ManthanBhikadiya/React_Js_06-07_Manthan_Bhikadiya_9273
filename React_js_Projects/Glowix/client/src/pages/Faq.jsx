import React, { useState } from "react";
import FaqImg from "../assets/asset 65.jpg";

const faqData = [
  {
    category: "General Information",
    questions: [
      {
        question: "What services does your clinic offer?",
        answer:
          "We provide a range of aesthetic treatments, including Botox, dermal fillers, skin rejuvenation, and advanced cosmetic procedures tailored to individual needs.",
      },
      {
        question: "How do I know which treatment is right for me?",
        answer:
          "Our experts will guide you during consultation and suggest treatments based on your goals and skin condition.",
      },
      {
        question:
          "Is plastic surgery the only option for enhancing my appearance?",
        answer:
          "No, we offer multiple non-surgical aesthetic treatments for natural enhancement.",
      },
      {
        question: "How much do your treatments cost?",
        answer:
          "Pricing varies depending on treatment type and complexity. Contact us for detailed pricing.",
      },
      {
        question: "Do I need an appointment, or can I walk in?",
        answer:
          "We recommend booking an appointment to ensure availability.",
      },
    ],
  },
  {
    category: "Treatment Process",
    questions: [
      {
        question: "What happens during the initial consultation?",
        answer:
          "We assess your needs, review medical history, and create a personalized treatment plan.",
      },
      {
        question: "How long does a typical procedure take?",
        answer:
          "Most procedures take between 30 to 90 minutes.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "We ensure maximum comfort using advanced techniques and numbing options.",
      },
      {
        question: "Will I see results immediately?",
        answer:
          "Some treatments show immediate results while others take a few days.",
      },
      {
        question: "How many sessions are required for best results?",
        answer:
          "It depends on the treatment type and desired outcome.",
      },
    ],
  },
  {
    category: "Safety & Results",
    questions: [
      {
        question: "Are the treatments safe?",
        answer:
          "Yes, all procedures are performed by certified professionals using approved products.",
      },
    ],
  },
  {
    category: "Aftercare & Recovery",
    questions: [
      {
        question: "What should I do after treatment?",
        answer:
          "Follow the aftercare instructions provided by your specialist for best results.",
      },
    ],
  },
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div>
      <section className="w-full bg-[#f6f3ef] py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="relative bg-[#5a1f0f] rounded-[40px] py-28 text-center overflow-hidden">

            {/* Decorative Small Dot */}
            <div className="absolute left-20 top-1/2 w-3 h-3 bg-white rounded-full opacity-80"></div>

            {/* Decorative Star */}
            <div className="absolute right-24 top-20 text-white text-3xl opacity-80">
              ✦
            </div>

            {/* Decorative Flower Shape (Light Border Effect) */}
            <div className="absolute bottom-10 right-16 w-32 h-32 border border-white/20 rounded-full"></div>

            {/* Title */}
            <h1 className="text-6xl font-serif text-white tracking-wide mb-6">
              FREQUENTLY ASKED QUESTION
            </h1>

            {/* Breadcrumb */}
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> FAQs
            </p>

          </div>

        </div>
      </section>

      <section className="bg-[#f6f1ec] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveCategory(index);
                    setOpenIndex(null);
                  }}
                  className={`flex justify-between items-center py-4 px-4 cursor-pointer border-b last:border-0 transition ${activeCategory === index
                    ? "text-[#b36b3f] font-semibold"
                    : "text-gray-700"
                    }`}
                >
                  {item.category}
                </div>
              ))}
            </div>

            {/* Opening Hours Card */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={FaqImg}
                alt="clinic"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Opening Hours:</h3>
                <p>Mon - Sat : 10.00 AM - 4.00PM</p>
                <p>Sunday : Closed</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif text-[#3c1f16] mb-10">
              {faqData[activeCategory].category}
            </h2>

            <div className="space-y-4">
              {faqData[activeCategory].questions.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-4"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className={`w-full text-left text-lg font-medium flex justify-between items-center ${openIndex === index
                      ? "text-[#b36b3f]"
                      : "text-[#3c1f16]"
                      }`}
                  >
                    {index + 1}. {item.question}
                    <span>{openIndex === index ? "-" : "+"}</span>
                  </button>

                  {openIndex === index && (
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Faq
