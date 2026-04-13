import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
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
              CONTACT US
            </h1>

            {/* Breadcrumb */}
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> Contact Us
            </p>

          </div>

        </div>
      </section>

      <section className="w-full bg-[#f6f3ef] py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP SECTION */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

            {/* Left Heading */}
            <div>
              <h2 className="text-5xl font-serif text-[#3b1d14] leading-tight mb-6">
                Reach out for <br /> your perfect look!
              </h2>
              <p className="text-gray-600 max-w-md">
                Have questions or ready to Contact us today for expert personalized consultations, and top-quality care.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-6">

              {/* Location */}
              <div className="bg-[#efe7e1] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#3b1d14] text-white flex items-center justify-center rounded-full mb-4">
                  <MapPin size={18} />
                </div>
                <h4 className="font-serif text-lg text-[#3b1d14] mb-2">Location</h4>
                <p className="text-gray-600 text-sm">
                  123 Glowix Avenue, <br /> Suite 456, Beauty City.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-[#efe7e1] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#3b1d14] text-white flex items-center justify-center rounded-full mb-4">
                  <Phone size={18} />
                </div>
                <h4 className="font-serif text-lg text-[#3b1d14] mb-2">Contact Us</h4>
                <p className="text-gray-600 text-sm">
                  (+22) 123 456 789 <br />
                  (+12) 761 852 339
                </p>
              </div>

              {/* Email */}
              <div className="bg-[#efe7e1] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#3b1d14] text-white flex items-center justify-center rounded-full mb-4">
                  <Mail size={18} />
                </div>
                <h4 className="font-serif text-lg text-[#3b1d14] mb-2">Email</h4>
                <p className="text-gray-600 text-sm">
                  info@domain.com <br />
                  support@domain.com
                </p>
              </div>

            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">

            {/* Contact Form */}
            <div className="bg-[#efe7e1] p-10 rounded-3xl">
              <h3 className="text-4xl font-serif text-[#3b1d14] mb-8">
                Have any questions?
              </h3>

              <form className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">
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
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Phone No."
                    className="bg-white px-5 py-3 rounded-full outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white px-5 py-3 rounded-full outline-none"
                  />
                </div>

                <textarea
                  placeholder="Write Message..."
                  rows="4"
                  className="w-full bg-white px-5 py-4 rounded-2xl outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#c65f2f] hover:bg-[#a84b27] text-white py-4 rounded-full transition"
                >
                  Submit Now
                </button>

              </form>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden h-full min-h-[500px]">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=New+York&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
