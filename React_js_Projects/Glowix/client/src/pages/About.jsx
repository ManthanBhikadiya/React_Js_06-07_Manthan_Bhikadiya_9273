import { ArrowUpRight, Play, Star, Phone, Check, Layers, Settings, Sparkles, HeartHandshake, Instagram, Facebook, Dribbble, ChevronDown } from "lucide-react";
import { useState } from "react";
import A1 from "../assets/asset 4.jpeg";
import A2 from "../assets/asset 6.jpeg";
import A3 from "../assets/asset 5.svg";
import WA1 from "../assets/asset 15.png"
import WA2 from "../assets/asset 16.jpeg"
import HA1 from "../assets/asset 24.svg"
import HA2 from "../assets/asset 25.svg"
import HA3 from "../assets/asset 26.svg"
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
import SmallImg from "../assets/asset 54.jpg"
import MainImg from "../assets/asset 55.jpg"
import WA3 from "../assets/asset 56.svg"
import Img1 from "../assets/asset 57.jpg"
import Img2 from "../assets/asset 58.jpg"
import Img3 from "../assets/asset 59.jpg"
import DA1 from "../assets/asset 60.jpg"
import DA2 from "../assets/asset 61.jpg"
import DA3 from "../assets/asset 62.jpg"
import DA4 from "../assets/asset 63.jpg"
import FA1 from "../assets/asset 65.jpg"
import FA2 from "../assets/asset 66.jpg"
import FA4 from "../assets/asset 68.svg"


function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Neha Verma",
      image: DA1,
    },
    {
      id: 2,
      name: "Cameron Williamson",
      image: DA2,
    },
    {
      id: 3,
      name: "Dr. Ayesha Kapoor",
      image: DA3,
    },
    {
      id: 4,
      name: "Dr. Rahul Mehta",
      image: DA4,
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
    <div className="max-w-7xl mx-auto  text-gray-800">
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
              ABOUT US
            </h1>

            {/* Breadcrumb */}
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> About Us
            </p>

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

            {/* Experience Badge (Center Overlap) */}
            <div className="absolute left-[190px] bottom-10 w-[150px] h-[150px] rounded-full flex items-center justify-center shadow-2xl z-20">
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

      <section className="bg-[#f4ede8] py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Small Heading */}
            <p className="text-sm tracking-widest text-#c65f2f uppercase mb-4">
              ✽ Our Approach
            </p>

            {/* Main Heading */}
            <h2 className="text-5xl font-serif text-[#3b2b25] leading-tight mb-6">
              Transforming beauty with <br /> precision and care
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-10 max-w-xl">
              At Glowix, we believe that beauty is a blend of art and science.
              Our approach is centered on personalized care, advanced techniques.
            </p>

            {/* Mission & Vision Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm space-y-8">

              {/* Mission */}
              <div className="flex gap-5">
                <div className="w-24 h-14 flex items-center justify-center rounded-full bg-[#5a2d1d] text-white text-xl">
                  <img src={HA1} alt="" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#3b2b25]">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Our Comprehensive Consultation is a thorough meeting
                    with one of our specialists to understand your goals.
                  </p>
                </div>
              </div>

              <hr />

              {/* Vision */}
              <div className="flex gap-5">
                <div className="w-24 h-14 flex items-center justify-center rounded-full bg-[#5a2d1d] text-white text-xl">
                  <img src={HA2} alt="" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#3b2b25]">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Our Comprehensive Consultation is a thorough meeting
                    with one of our specialists to understand your goals.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center">

            {/* Main Image */}
            <img
              src={MainImg}
              alt="Main Treatment"
              className="rounded-3xl w-full max-w-md object-cover"
            />

            {/* Small Overlapping Image */}
            <img
              src={SmallImg}
              alt="Small Treatment"
              className="absolute -bottom-10 -left-10 w-48 h-88 rounded-full border-8 border-[#f4ede8] object-cover"
            />

            {/* 24/7 Support Box */}
            <div className="absolute -top-10 right-0 bg-[#5a2d1d] text-white p-5 rounded-bl-3xl border-8 border-[#f4ede8] rounded-tr-3xl rounded-tl-3xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-white text-[#5a2d1d] w-10 h-10 rounded-full flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-lg font-semibold">24/7 Support</p>
                  <p className="text-sm">(+22) 123 456 789</p>
                </div>
              </div>
            </div>

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

      <section className="bg-[#5a1f0f] text-white py-24 px-6 rounded-t-[40px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <div className="relative">

            {/* Top Images */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <img
                src={Img1}
                alt=""
                className="rounded-3xl object-cover h-64 w-full"
              />
              <img
                src={Img2}
                alt=""
                className="rounded-3xl object-cover h-64 w-full"
              />
            </div>

            {/* Bottom Large Image */}
            <div className="relative">
              <img
                src={Img3}
                alt=""
                className="rounded-3xl object-cover w-full h-[320px]"
              />

              {/* Experience Badge */}
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white text-[#5a1f0f] w-36 h-36 rounded-full flex items-center justify-center text-center shadow-xl">
                <img src={WA3} alt="Experience Badge" />
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Small Heading */}
            <p className="text-sm tracking-widest text-#c65f2f uppercase mb-4">
              ✽ Our Journey
            </p>

            {/* Main Heading */}
            <h2 className="text-5xl font-serif leading-tight mb-8">
              Your journey to radiant confidence
            </h2>

            {/* Bullet Points */}
            <div className="grid md:grid-cols-2 gap-4 text-sm mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#c46b45] text-white p-2 rounded-md">
                  <Check size={18} />
                </div>
                <p>Decades of Trust, Timeless</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#c46b45] text-white p-2 rounded-md">
                  <Check size={18} />
                </div>
                <p>The Art & Science of Beauty</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#c46b45] text-white p-2 rounded-md">
                  <Check size={18} />
                </div>
                <p>From Vision to Transformation</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#c46b45] text-white p-2 rounded-md">
                  <Check size={18} />
                </div>
                <p>Milestones in Excellence</p>
              </div>
            </div>

            <hr className="border-white/20 my-8" />

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">

              <div className="flex items-start gap-4">
                <div className="w-19 h-14 flex items-center justify-center rounded-full bg-[#c65d32] text-white text-xl">
                  <img src={HA1} alt="Icon" className="w-8 h-8" />

                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    Shaping The Future Of Aesthetics
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-19 h-14 flex items-center justify-center rounded-full bg-[#c65d32] text-white text-xl">
                  <img src={HA3} alt="Icon" className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    Where Passion Meets Perfection
                  </h4>
                </div>
              </div>

            </div>

            {/* Button */}
            <div className="flex items-center gap-4">
              <button className="bg-[#c65d32] hover:bg-[#a84b27] transition px-8 py-3 rounded-full font-medium">
                Contact Us
              </button>

              <div className="w-12 h-12 rounded-full bg-white text-[#5a1f0f] flex items-center justify-center">
                <ArrowUpRight size={25} />
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="w-full bg-[#f6f3ef] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Section Tag */}
          <p className="text-sm tracking-[4px] text-#c65f2f font-semibold uppercase mb-4">
            Our Team
          </p>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-serif text-[#3b1d14] leading-tight mb-16">
            Meet the experts behind your transformation
          </h2>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">

                {/* Image */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[380px] object-cover rounded-3xl group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-6 text-xl font-serif text-[#3b1d14]">
                  {member.name}
                </h3>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-5">
                  {[Instagram, Facebook, Dribbble].map((Icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-#c65f2f text-white hover:bg-[#3b1d14] transition cursor-pointer"
                    >
                      <Icon size={18} />
                    </div>
                  ))}
                </div>

              </div>
            ))}
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
  );
}

export default About;