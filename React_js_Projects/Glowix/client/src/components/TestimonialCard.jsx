import React from 'react'
import DA1 from "../assets/asset 60.jpg"
import DA2 from "../assets/asset 61.jpg"
import DA3 from "../assets/asset 62.jpg"
import DA4 from "../assets/asset 63.jpg"


function TestimonialCard() {

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

    return (
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
    )
}

export default TestimonialCard
