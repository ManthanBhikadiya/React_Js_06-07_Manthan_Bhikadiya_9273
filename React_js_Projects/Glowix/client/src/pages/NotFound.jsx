import ErrorImg from "../assets/404.png";
import { Link } from "react-router-dom";

function NotFound() {
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
              PAGE NOT FOUND
            </h1>

            {/* Breadcrumb */}
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> 404 Error Page
            </p>

          </div>

        </div>
      </section>

      <section className="min-h-screen bg-[#f4ede8] flex items-center justify-center px-4">
        <div className="text-center max-w-xl">

          {/* 404 Image */}
          <div className="flex justify-center mb-8">
            <img
              src={ErrorImg}
              alt="404"
              className="w-[380px] md:w-[450px] object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-serif text-[#4b1f0f] mb-4">
            Oops! page not found
          </h1>

          {/* Sub Text */}
          <p className="text-gray-600 mb-10">
            The page you are looking for does not exist.
          </p>

          {/* Button Section */}
          <div className="flex justify-center items-center gap-4">

            <Link
              to="/"
              className="bg-[#c65d32] hover:bg-[#a84b27] transition text-white px-8 py-3 rounded-full font-medium"
            >
              Back To Home
            </Link>

            <Link
              to="/"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4b1f0f] text-white text-xl hover:scale-105 transition"
            >
              →
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}

export default NotFound;