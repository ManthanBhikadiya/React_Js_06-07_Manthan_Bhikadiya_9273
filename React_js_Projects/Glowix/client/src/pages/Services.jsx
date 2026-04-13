import { ArrowUpRight, Phone } from "lucide-react";

import SA1 from "../assets/asset 9.jpeg"
import SA2 from "../assets/asset 10.jpeg"
import SA3 from "../assets/asset 11.jpeg"
import SA4 from "../assets/asset 12.jpeg"
import SA5 from "../assets/asset 13.jpeg"
import SA6 from "../assets/asset 14.jpeg"
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


function Services() {
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
                            OUR SERVICES
                        </h1>

                        {/* Breadcrumb */}
                        <p className="text-white/80 text-lg">
                            Home <span className="mx-2">/</span> Services
                        </p>

                    </div>

                </div>
            </section>

            <section className="bg-[#f3ece7] py-24 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">

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

                        <button className="flex items-center gap-3 bg-[#c65f2f] text-white px-6 py-3 rounded-full hover:bg-[#a84b27] transition">
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


        </div>
    )
}

export default Services
