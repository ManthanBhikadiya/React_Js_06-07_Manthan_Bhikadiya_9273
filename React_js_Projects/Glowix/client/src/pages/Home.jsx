import { ArrowUpRight, Play, Star, Phone, Check, Layers, Settings, Sparkles, HeartHandshake } from "lucide-react";
import HeroImg from "../assets/asset 3.png"
import Google from "../assets/asset 2.svg";
import A1 from "../assets/asset 4.jpeg";
import A2 from "../assets/asset 6.jpeg";
import A3 from "../assets/asset 5.svg";
import SA1 from "../assets/asset 9.jpeg"
import SA2 from "../assets/asset 10.jpeg"
import SA3 from "../assets/asset 11.jpeg"
import SA4 from "../assets/asset 12.jpeg"
import SA5 from "../assets/asset 13.jpeg"
import SA6 from "../assets/asset 14.jpeg"
import WA1 from "../assets/asset 15.png"
import WA2 from "../assets/asset 16.jpeg"
import video from "../assets/glowix-video.mp4"
import CA1 from "../assets/asset 17.jpeg"
import CA2 from "../assets/asset 18.jpeg"
import CA3 from "../assets/asset 19.jpeg"
import CA4 from "../assets/asset 20.jpeg"
import EA1 from "../assets/asset 21.jpeg"
import EA2 from "../assets/asset 22.jpeg"
import HA1 from "../assets/asset 24.svg"
import HA2 from "../assets/asset 25.svg"
import HA3 from "../assets/asset 26.svg"
import HA4 from "../assets/asset 27.svg"
import TA1 from "../assets/asset 28.jpeg"
import TA2 from "../assets/asset 29.jpeg"
import TA3 from "../assets/asset 30.jpeg"
import TA4 from "../assets/asset 31.jpeg"
import OA1 from "../assets/asset 32.jpeg"
import OA2 from "../assets/asset 33.jpeg"
import OA3 from "../assets/asset 34.jpeg"
import OA4 from "../assets/asset 35.jpeg"
import OA5 from "../assets/asset 36.svg"
import OA6 from "../assets/asset 37.svg"
import OA7 from "../assets/asset 38.svg"
import OA8 from "../assets/asset 39.svg"
import DoctorImg from "../assets/asset 40.png"
import Blog1 from "../assets/asset 41.jpeg"
import Blog2 from "../assets/asset 42.jpeg"
import Blog3 from "../assets/asset 43.jpeg"
import BlogCard from "../components/BlogCard";

function Home() {
  const services = [
    {
      title: "Botox And Dermal Fillers",
      img: SA1,
    },
    {
      title: "Laser Skin Or Treatments",
      img: SA2,
    },
    {
      title: "Male Aesthetic Procedures",
      img: SA3,
    },
    {
      title: "Post-Weight Loss Surgery",
      img: SA4,
    },
    {
      title: "Medical Spa & Treatments",
      img: SA5,
    },
    {
      title: "Tighten & Define Neck Contours",
      img: SA6,
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Restoring Youthful Radiance",
      image: CA1,
    },
    {
      id: 2,
      title: "Natural & Beautiful Results",
      image: CA2,
    },
    {
      id: 3,
      title: "Restoring Post-Pregnancy Beauty",
      image: CA3,

    },
    {
      id: 4,
      title: "A Smoother, Glowing Complexion",
      image: CA4,
    },
  ];

  const steps = [
    {
      id: "01",
      title: "Comprehensive Consultation",
      desc: "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
      icon: HA1,
    },
    {
      id: "02",
      title: "Personalized Treatment Plan",
      desc: "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
      icon: HA2,
    },
    {
      id: "03",
      title: "Expert Procedures",
      desc: "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
      icon: HA3,
    },
    {
      id: "04",
      title: "Ongoing Support & Follow-Up",
      desc: "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
      icon: HA4,
    },
  ];

  const testimonials = [
    {
      text: "From start to finish, they made the process so easy and stress-free. The results themselves I've never felt better about my appearance.",
      name: "Sarah Johnson",
      role: "Co. founder",
      image: TA2
    },
    {
      text: "The clinic truly understands beauty! The staff was professional and the results are natural and amazing.",
      name: "Michael Chen",
      role: "Marketing Director",
      image: TA3
    },
    {
      text: "Expert procedures and ongoing support. I highly recommend their personalized treatment plans.",
      name: "Emily Davis",
      role: "Design Lead",
      image: TA4
    }
  ];

  const blogs = [
    {
      id: 1,
      image: Blog1,
      title: "Top Tips for Preparing for Plastic Surgery",
    },
    {
      id: 2,
      image: Blog2,
      title: "Myths and Facts About Plastic Surgery",
    },
    {
      id: 3,
      image: Blog3,
      title: "What to Expect During Your First Consultation",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  text-gray-800">

      <section className="px-6 mt-6">
        <div className="bg-[#5a1f0f] rounded-3xl text-white px-10 py-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">

          <div className="max-w-xl">

            <p className="uppercase tracking-widest text-sm mb-6 flex items-center gap-2 text-#c65f2f">
              ✿ Welcome To Glowix
            </p>

            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
              DISCOVER YOUR BEST <br /> SELF WITH US!
            </h1>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Unlock your full potential with personalized coaching, expert guidance
              transformative wellness strategies. Together, we'll help you build a
              healthier, happier, and more balanced life.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <button className="bg-#c65f2f px-6 py-3 rounded-full flex items-center gap-2 hover:bg-#c65f2f transition">
                Get Started
                <ArrowUpRight size={18} />
              </button>

              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
                  <Play size={18} />
                </div>
                <span>Watch Video</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-#c65f2f">
              <img src={Google} alt="" />
              <span className="text-white font-semibold">4.5</span>
              <div className="flex">
                <Star size={16} fill="orange" />
                <Star size={16} fill="orange" />
                <Star size={16} fill="orange" />
                <Star size={16} fill="orange" />
                <Star size={16} />
              </div>
              <span className="text-gray-300">(1000+ review)</span>
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <img
              src={HeroImg}
              alt="Hero"
              className="w-96 md:w-full max-w-md object-contain"
            />
          </div>

        </div>
      </section>

      <section className="bg-[#f3f1ef] py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 items-center">

          {/* LEFT SIDE IMAGES */}
          <div className="relative flex items-center justify-center lg:justify-start">

            {/* Left Image */}
            <div className="relative z-10 rounded-[30px] overflow-hidden shadow-xl w-[300px]">
              <img
                src={A2}
                alt="facial"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Right Image (Shifted Up) */}
            <div className="absolute left-[220px] -top-16 rounded-[30px] overflow-hidden shadow-xl w-[300px]">
              <img
                src={A1}
                alt="treatment"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute left-[220px] bottom-5 w-[150px] h-[150px] rounded-full flex items-center justify-center shadow-2xl z-20">
              <img
                src={A3}
                alt="experience badge"
                className="w-full h-full object-contain"
              />
            </div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="pl-0 lg:pl-1">
            <p className="text-sm uppercase tracking-[4px] text-[#c46b45] font-semibold mb-6">
              ABOUT US
            </p>

            <h2 className="text-[52px] leading-[60px] font-serif text-[#3d2a23] mb-8">
              Your journey to radiant confidence
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
              Discover personalized care & expertise at our clinic, where we blend
              artistry and precision to enhance your natural beauty and boost your
              confidence.
            </p>

            {/* Checklist */}
            <div className="space-y-6 mb-14">
              {[
                "Your Beauty, Our Expertise",
                "Where Science Meets Beauty",
                "Cutting-Edge Techniques",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-[#c46b45] text-white p-2 rounded-md">
                    <Check size={18} />
                  </div>
                  <span className="text-lg text-[#3d2a23]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA BOX */}
            <div className="bg-[#e4ded9] rounded-[30px] px-10 py-8 flex items-center justify-between max-w-2xl">

              <div className="flex items-center gap-5">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                  <Phone className="text-[#c46b45]" size={22} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#3d2a23]">Need Help!</p>
                  <p className="text-gray-600 text-lg">(+22) 123 456 789</p>
                </div>
              </div>

              <button className="bg-[#c46b45] hover:bg-[#a85736] text-white px-8 py-4 rounded-full text-lg flex items-center gap-3 transition">
                More About
                <ArrowUpRight size={20} />
              </button>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece7] py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[4px] text-[#c46b45] font-semibold mb-6">
              Services
            </p>
            <h2 className="text-[48px] leading-[58px] font-serif text-[#3d2a23] max-w-3xl mx-auto">
              Explore our wide range of aesthetic treatments
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-xl transition duration-300 group"
              >
                {/* Title + Arrow */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[#3d2a23] max-w-[70%]">
                    {service.title}
                  </h3>

                  <div className="bg-[#c46b45] text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  Achieve a smoother appearance with a Botox and dermal fillers.
                </p>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <span className="bg-[#c46b45] text-white px-4 py-1 rounded-full text-sm mr-2">
              Free
            </span>
            <span className="text-gray-600">
              Let's make something great work together.
            </span>
            <a
              href="#"
              className="ml-2 font-semibold text-[#3d2a23] underline"
            >
              Get Free Quote
            </a>
          </div>

        </div>
      </section>

      <section className="bg-[#f3f1ef] py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 items-center gap-16">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            {/* Background Shape */}
            <div className="absolute w-[380px] h-[420px] bg-[#e8e1db] rounded-[200px] bottom-0"></div>

            <img
              src={WA1}
              alt="male aesthetic"
              className="relative z-10 h-[480px] object-contain"
            />
          </div>

          {/* CENTER CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-[4px] text-[#c46b45] font-semibold mb-6">
              What We Do
            </p>

            <h2 className="text-[48px] leading-[56px] font-serif text-[#3d2a23] mb-6">
              Transforming beauty confidence
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in transforming beauty and boosting confidence
              through personalized treatments, and enhancing your natural beauty.
            </p>

            {/* Checklist */}
            <div className="space-y-5 mb-10">
              {[
                "Restore Firmness and Shape",
                "Minimize and Improve Scars",
                "Tailored Enhancements for Men",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-[#c46b45] text-white p-2 rounded-md">
                    <Check size={18} />
                  </div>
                  <span className="text-[#3d2a23]">{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex items-center gap-4">
              <button className="bg-[#c46b45] hover:bg-[#a85736] text-white px-6 py-3 rounded-full transition">
                Learn More
              </button>

              <div className="bg-[#3d2a23] text-white w-10 h-10 rounded-full flex items-center justify-center">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* RIGHT OVAL IMAGE */}
          <div className="relative flex justify-center">
            <div className="w-[360px] h-[480px] rounded-[200px] overflow-hidden shadow-xl relative">
              <img
                src={WA2}
                alt="spa treatment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-16 -left-10 bg-[#c46b45] text-white w-25 h-39 rounded-full flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-2xl font-bold">25+</span>
              <span className="text-xs">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center items-center py-10 bg-gray-100">

        <div className="relative w-[90%] max-w-6xl rounded-3xl overflow-hidden shadow-xl">

          <video autoPlay
            muted
            loop
            playsInline src={video} className="w-full h-[500px] object-cover " ></video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-white text-white text-lg  hover:bg-white/30 transition">
              Play
            </button>
          </div>

        </div>

      </div>

      <section className="w-full bg-[#f6f3ef] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left Content */}
          <div>
            <p className="text-sm tracking-[3px] text-#c65f2f font-semibold uppercase mb-4">
              Case Study’s
            </p>

            <h2 className="text-5xl font-serif text-[#3b1d14] leading-tight mb-6">
              Our remarkable <br /> transformation
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              Discover inspiring stories of real transformations at our clinic,
              where individuals have regained confidence through personalized
              plastic surgery and beauty treatments.
            </p>

            <button className="flex items-center gap-3 bg-#c65f2f text-white px-6 py-3 rounded-full hover:bg-#c65f2f transition">
              All Case Study’s
              <span className="bg-[#3b1d14] p-2 rounded-full">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {caseStudies.map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-lg font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-5 right-5">
                  <div className="bg-#c65f2f p-3 rounded-full text-white group-hover:rotate-45 transition duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            ))}
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
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm tracking-[3px] text-#c65f2f font-semibold uppercase mb-4">
              How It Work
            </p>

            <h2 className="text-5xl font-serif text-[#3b1d14] leading-tight mb-6">
              Simple steps to stunning <br /> transformations
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              Discover a seamless process designed to enhance your beauty personalized consultations to expert procedures and dedicated aftercare, we guide you every step of the way toward achieving stunning.
            </p>

            <button className="flex items-center gap-3 bg-#c65f2f text-white px-6 py-3 rounded-full hover:bg-#c65f2f transition">
              Contact Us
              <span className="bg-[#3b1d14] p-2 rounded-full">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* RIGHT SIDE - Timeline */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gray-300"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative">

                  {/* Icon Circle */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b1d14] text-white z-10">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="object-contain brightness-0 invert"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#3b1d14]">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2 max-w-md">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <section className="w-full bg-[#5a1f0f] py-20">
        <div className="max-w-7xl mx-auto px-6 bg-[#6b2613] rounded-3xl p-12 relative overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div>
              <img
                src={TA1}
                alt="Client"
                className="rounded-3xl w-full h-[420px] object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white">
              <p className="text-sm tracking-[3px] text-#c65f2f uppercase mb-4">
                Testimonials
              </p>

              <h2 className="text-4xl font-serif leading-tight mb-6">
                Life-Changing results from our clients
              </h2>

              <p className="text-gray-200 mb-6 max-w-lg">
                "The expertise and care I received here were outstanding. I couldn't be happier with my results. Thanks to the team, I feel more confident than ever before. Highly recommend! From consultation to aftercare, everything was perfect. My transformation exceeded my expectations."
              </p>

              <div className="mt-6">
                <p className="font-semibold text-lg">Kristin Watson</p>
                <p className="text-sm text-gray-300">Co. founder</p>
              </div>
            </div>

          </div>

          {/* BOTTOM TESTIMONIAL CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-white">

            {testimonials.map((item, index) => (
              <div key={index} className="border-t border-white/20 pt-6">
                <p className="text-gray-200 mb-6 text-sm italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1ee] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">

          {/* Top Small Text */}
          <p className="text-sm tracking-widest text-#c65f2f uppercase mb-3">
            ✽ See The Difference
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-12">
            Our real patient transformation <br />
            & stunning results
          </h2>

          {/* Before After Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Card 1 */}
            <div className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={OA1}
                  alt="Before"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
                  Before
                </span>
              </div>

              <div className="relative">
                <img
                  src={OA2}
                  alt="After"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
                  After
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={OA3}
                  alt="Before"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
                  Before
                </span>
              </div>

              <div className="relative">
                <img
                  src={OA4}
                  alt="After"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
                  After
                </span>
              </div>
            </div>

          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-200 pt-12 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

              {/* Item 1 */}
              <div className="flex flex-row items-center space-x-3">
                <img src={OA5} alt="Years of Experience" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-start text-3xl font-semibold text-gray-800">25+</h3>
                  <p className="text-gray-500 text-sm">Years Of Experience</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-row items-center space-x-3">
                <img src={OA6} alt="Satisfied Clients" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-start text-3xl font-semibold text-gray-800">150K+</h3>
                  <p className="text-gray-500 text-sm">Satisfied Clients</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-row items-center space-x-3">
                <img src={OA7} alt="Countries Reached" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-start text-3xl font-semibold text-gray-800">30+</h3>
                  <p className="text-gray-500 text-sm">Countries Reached</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-row items-center space-x-3 md:border-l md:border-gray-200 md:pl-6">
                <img src={OA8} alt="Classes Conducted" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-start text-3xl font-semibold text-gray-800">2K+</h3>
                  <p className="text-gray-500 text-sm">Classes Conducted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ede8] py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] bg-[#e9d6cc] rounded-full -z-10"></div>

            <img
              src={DoctorImg}
              alt="Doctor"
              className="relative z-10 max-h-[500px] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Small Heading */}
            <p className="text-sm tracking-widest text-#c65f2f uppercase mb-3">
              Appointment
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-serif text-[#3b2b25] leading-tight mb-8">
              Schedule your consultation <br /> today!
            </h2>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="First Name"
                className="bg-white px-5 py-3 rounded-full outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-white px-5 py-3 rounded-full outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-white px-5 py-3 rounded-full outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white px-5 py-3 rounded-full outline-none"
              />

              <input
                type="date"
                className="bg-white px-5 py-3 rounded-full outline-none"
              />

              <select className="bg-white px-5 py-3 rounded-full outline-none">
                <option>Choose Doctor</option>
                <option>Dr. Smith</option>
                <option>Dr. John</option>
                <option>Dr. Emily</option>
              </select>

              {/* Button Full Width */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#c65d32] hover:bg-[#a84b27] transition duration-300 text-white py-3 rounded-full font-medium"
                >
                  Get Appointment
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      

      <BlogCard/>
    </div>
  );
}

export default Home;