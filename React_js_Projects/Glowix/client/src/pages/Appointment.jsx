import { Phone, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

import EA1 from "../assets/asset 21.jpeg"
import EA2 from "../assets/asset 22.jpeg"
import FA1 from "../assets/asset 65.jpg"
import FA2 from "../assets/asset 66.jpg"
import FA4 from "../assets/asset 68.svg"


function Appointment() {

  const faqs = [
    {
      question: "What procedures does Glowix offer?",
      answer:
        "Glowix provides a comprehensive range of plastic surgery and beauty treatments tailored to enhance your natural beauty.",
    },
    {
      question: "What services and treatments does Glowix provide?",
      answer:
        "We offer surgical and non-surgical treatments including skincare, rejuvenation, and cosmetic enhancements.",
    },
    {
      question: "How long is the recovery time for surgery?",
      answer:
        "Recovery time varies depending on the procedure, but most treatments have minimal downtime with proper aftercare.",
    },
    {
      question: "Do you offer non-surgical beauty treatments?",
      answer:
        "Yes, we provide a wide range of non-invasive treatments designed for safe and effective results.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
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
              BOOK APPOINTMENT
            </h1>

            {/* Breadcrumb */}
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> BOOK Appointment
            </p>

          </div>

        </div>
      </section>

      <section className="bg-[#f4efea] py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-[#c65f2f] uppercase tracking-widest text-sm font-semibold mb-3">
              Appointment
            </p>

            <h2 className="text-5xl font-serif text-[#3c1f16] mb-10">
              Make an appointment
            </h2>

            {/* Customer Service */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#c65f2f] text-[#c65f2f]">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#3c1f16]">
                  Customer Services
                </h4>
                <p className="text-gray-600">(+22) 123 456 789</p>
              </div>
            </div>

            <hr className="my-8 border-gray-300" />

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#c65f2f] text-[#c65f2f]">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#3c1f16]">
                  Opening Hours
                </h4>
                <p className="text-gray-600">
                  Mon - Sat (09:00 - 21:00)
                </p>
                <p className="text-gray-600">
                  Sunday ( Closed )
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="bg-[#e9dfd8] p-10 rounded-3xl">
            <form className="space-y-6">

              {/* Name Row */}
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-6 py-4 rounded-full bg-white focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-6 py-4 rounded-full bg-white focus:outline-none"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-full bg-white focus:outline-none"
              />

              {/* Phone */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-full bg-white focus:outline-none"
              />

              {/* Doctor & Date */}
              <div className="grid grid-cols-2 gap-6">
                <select className="w-full px-6 py-4 rounded-full bg-white focus:outline-none">
                  <option>Choose Doctor</option>
                  <option>Dr. Smith</option>
                  <option>Dr. Johnson</option>
                </select>

                <input
                  type="date"
                  className="w-full px-6 py-4 rounded-full bg-white focus:outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#c65f2f] text-white py-4 rounded-full font-semibold hover:bg-[#a94e24] transition duration-300"
              >
                Book An Appointment
              </button>

            </form>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f3ece6] py-20">
        <div className="max-w-7xl mx-auto px-6 rounded-3xl bg-[#f6efe9] p-12 relative overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE IMAGES */}
            <div className="relative flex items-center justify-center">

              {/* Orange Shape */}
              <div className="absolute w-[360px] h-[280px] right-0 bg-#c65f2f rounded-[40px]  top-31 z-0 flex items-center justify-center">
                <span className="absolute -right-20 -rotate-90 text-white tracking-[3px] text-sm font-medium">
                  25 YEARS EXPERIENCE
                </span>
              </div>

              {/* Top Image */}
              <img
                src={EA1}
                alt="Beauty Treatment"
                className="w-[260px] h-[340px] object-cover rounded-3xl relative left-10 z-10 -translate-x-16"
              />

              {/* Bottom Image */}
              <img
                src={EA2}
                alt="Beauty Care"
                className="w-[260px] h-[340px] object-cover rounded-3xl relative z-20 translate-y-16"
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div>
              <p className="text-sm tracking-[3px] text-#c65f2f font-semibold uppercase mb-4">
                Why Choose Us
              </p>

              <h2 className="text-5xl font-serif text-[#3b1d14] leading-tight mb-6">
                Experience the art of <br /> beauty with expert hands
              </h2>

              <p className="text-gray-600 mb-6 max-w-lg">
                Experience personalized care and transformative results with our
                expert team, dedicated to enhancing your techniques and exceptional
                service.
              </p>

              <p className="text-[#3b1d14] italic mb-8">
                "Delivering Exceptional Care Expert Treatments, Solutions Your
                Beauty, Boost Confidence, and Ensure Outstanding Results with
                Support Every Step of Your Journey."
              </p>

              {/* Contact Box */}
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="w-12 h-12 bg-#c65f2f text-white flex items-center justify-center rounded-full">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Contact Us:</p>
                  <p className="text-[#3b1d14] font-semibold">
                    (+22) 123 456 789
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f6f3ef] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE IMAGES */}
          <div className="relative flex flex-col gap-6">

            <img
              src={FA2}
              alt="FAQ"
              className="rounded-3xl absolute left-15 -bottom-20 w-[50%] h-[350px] object-cover"
            />

            <img
              src={FA1}
              alt="FAQ"
              className="rounded-3xl absolute right-10 -bottom-70 w-[50%] h-[350px] object-cover ml-20 -mt-16"
            />

            {/* Decorative Circle */}
            <div className="absolute -top-60 right-15 w-34 h-34 rounded-full   flex items-center justify-center text-sm rotate-12">
              <img src={FA4} alt="" />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>

            <p className="text-sm tracking-[4px] text-#c65f2f font-semibold uppercase mb-4">
              Frequently Asked Questions
            </p>

            <h2 className="text-5xl font-serif text-[#3b1d14] leading-tight mb-10">
              Got questions? We've got answers!
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 pb-6">

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium text-[#3b1d14]">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {openIndex === index && (
                    <p className="mt-4 text-gray-600 max-w-xl">
                      {faq.answer}
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

export default Appointment
