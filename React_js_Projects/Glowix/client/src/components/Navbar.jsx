import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, X, User, LogOut } from "lucide-react";
import Loader from "../assets/loader.svg";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path ? "text-[#C8643C]" : "text-gray-600";

  const extraPages = [
    { name: "FAQ", path: "/faq" },
    { name: "Case Study", path: "/case-study" },
    { name: "Not Found", path: "*" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 no-underline">
          <img src={Loader} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#4A2B20]">
            Glowix<span className="text-[#C8643C]">.</span>
          </h1>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex list-none items-center gap-6 xl:gap-8 font-semibold">
            <li>
              <Link to="/" className={`${isActive("/")} hover:text-[#C8643C] transition-colors`}>Home</Link>
            </li>
            <li><Link to="/about" className={`${isActive("/about")} hover:text-[#C8643C] transition-colors`}>About Us</Link></li>
            <li><Link to="/services" className={`${isActive("/services")} hover:text-[#C8643C] transition-colors`}>Services</Link></li>
            <li><Link to="/blog" className={`${isActive("/blog")} hover:text-[#C8643C] transition-colors`}>Blog</Link></li>

            {/* DROPDOWN LOGIC START */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              <div className="flex items-center gap-1 text-gray-600 hover:text-[#C8643C] transition-colors">
                Pages <ChevronDown size={16} className={`transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {isPagesOpen && (
                <ul className="absolute left-0 top-full w-48 bg-white shadow-xl rounded-lg py-3 border border-gray-100 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                  {extraPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className="block px-6 py-2 text-sm text-gray-600 hover:bg-[#FDF2F0] hover:text-[#C8643C] transition-colors"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* DROPDOWN LOGIC END */}

            <li><Link to="/contact" className={`${isActive("/contact")} hover:text-[#C8643C] transition-colors`}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Action Section - Desktop */}
        <div className="hidden items-center gap-6 xl:gap-8 xl:flex">
          {/* <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F0]">
              <Phone size={18} className="fill-[#C8643C] text-[#C8643C]" />
            </div>
            <span className="text-lg font-bold text-[#383838]">
              (+22) 123 456 789
            </span>
          </div> */}

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-[#C8643C] cursor-pointer"
              >
                <User size={20} />
                <span className="font-semibold">{user.name}</span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border">
                  <button
                    onClick={() => { logout(); setIsUserMenuOpen(false); }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-gray-600 hover:text-[#C8643C] font-semibold">
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-[#C8643C] px-6 xl:px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8643C]/20 transition-all hover:bg-[#b05632] hover:-translate-y-0.5 active:scale-95"
              >
                Register
              </Link>
            </div>
          )}

          <Link
            to="/appointment"
            className="rounded-full bg-[#C8643C] px-6 xl:px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8643C]/20 transition-all hover:bg-[#b05632] hover:-translate-y-0.5 active:scale-95"
          >
            MAKE AN APPOINTMENT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#4A2B20] p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Navigation Links */}
            <ul className="space-y-4 font-semibold mb-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isActive("/")} block py-2 hover:text-[#C8643C] transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isActive("/about")} block py-2 hover:text-[#C8643C] transition-colors`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isActive("/services")} block py-2 hover:text-[#C8643C] transition-colors`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isActive("/blog")} block py-2 hover:text-[#C8643C] transition-colors`}
                >
                  Blog
                </Link>
              </li>

              {/* Mobile Dropdown */}
              <li>
                <button
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-[#C8643C] transition-colors"
                >
                  <span>Pages</span>
                  <ChevronDown size={16} className={`transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPagesOpen && (
                  <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    {extraPages.map((page) => (
                      <li key={page.path}>
                        <Link
                          to={page.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1 text-sm text-gray-600 hover:text-[#C8643C] transition-colors"
                        >
                          {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isActive("/contact")} block py-2 hover:text-[#C8643C] transition-colors`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Contact & CTA */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F0]">
                  <Phone size={16} className="fill-[#C8643C] text-[#C8643C]" />
                </div>
                <span className="text-base font-bold text-[#383838]">
                  (+22) 123 456 789
                </span>
              </div>

              <Link
                to="/appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center rounded-full bg-[#C8643C] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C8643C]/20 transition-all hover:bg-[#b05632]"
              >
                MAKE AN APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
