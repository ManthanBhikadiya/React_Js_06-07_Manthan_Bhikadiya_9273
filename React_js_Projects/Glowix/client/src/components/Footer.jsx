import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Facebook, Twitter, PinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#5e2f1d] text-white pt-16 pb-8 px-6 md:px-12 mt-20 rounded-[40px] mx-4 mb-4">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-white/10 pb-16">
          <h2 className="text-4xl font-serif max-w-md leading-tight">
            Our latest insights on plastic surgery & skincare
          </h2>
          <div className="relative w-full md:w-96">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C8643C]"
            />
            <button className="absolute right-2 top-2 bg-[#C8643C] p-2.5 rounded-full hover:bg-white hover:text-[#C8643C] transition-all">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#C8643C] rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">Glowix<span className="text-[#C8643C]">.</span></span>
            </div>
            <p className="text-white/70 mb-8">Transforming beauty with expert care and personalized treatments.</p>
            <div className="flex gap-4">
              {[PinIcon, Twitter, Facebook, Instagram].map((Icon, i) => (
                <div key={i} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#C8643C] hover:border-[#C8643C] cursor-pointer transition-all">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Link</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-2">Contact:</h4>
            <div className="flex items-center gap-3 text-white/70">
              <Phone size={20} className="text-[#C8643C]" />
              <span>(+22) 123 456 789</span>
            </div>
            <h4 className="text-xl font-bold pt-4">E-Mail:</h4>
            <div className="flex items-center gap-3 text-white/70">
              <Mail size={20} className="text-[#C8643C]" />
              <span>Domainname@Gmail.Com</span>
            </div>
          </div>

          {/* Open Hours & Address */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-2">Open Hours:</h4>
            <p className="text-white/70">Mon-Sat: 10:00 To 07:00</p>
            <p className="text-white/70">Saturday-Closed</p>
            <h4 className="text-xl font-bold pt-4">Address:</h4>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin size={20} className="text-[#C8643C] mt-1" />
              <span>123 High Street LN1 1AB Street UK</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>Copyright © 2025 All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span>/</span>
            <Link to="/terms" className="hover:text-white">Term's & Condition</Link>
            <span>/</span>
            <Link to="/help" className="hover:text-white">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
