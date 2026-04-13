import A1 from "../assets/asset 4.jpeg";
import A2 from "../assets/asset 6.jpeg";
import SA2 from "../assets/asset 10.jpeg"
import CA1 from "../assets/asset 17.jpeg"
import CA2 from "../assets/asset 18.jpeg"
import CA3 from "../assets/asset 19.jpeg"
import CA4 from "../assets/asset 20.jpeg"
import EA1 from "../assets/asset 21.jpeg"
import EA2 from "../assets/asset 22.jpeg"

const CaseStudy = () => {

  const blogs = [
    {
      id: 1,
      image: CA1,
      title: "Top Tips for Preparing for Plastic Surgery",
    },
    {
      id: 2,
      image: CA2,
      title: "Myths and Facts About Plastic Surgery",
    },
    {
      id: 3,
      image: CA3,
      title: "What to Expect During Your First Consultation",
    },
    {
      id: 4,
      image: CA4,
      title: "Top Tips for Preparing for Plastic Surgery",
    },
    {
      id: 5,
      image: SA2,
      title: "Myths and Facts About Plastic Surgery",
    },
    {
      id: 6,
      image: EA1,
      title: "What to Expect During Your First Consultation",
    },
    {
      id: 7,
      image: A1,
      title: "Top Tips for Preparing for Plastic Surgery",
    },
    {
      id: 8,
      image: A2,
      title: "Myths and Facts About Plastic Surgery",
    },
    {
      id: 9,
      image: EA2,
      title: "What to Expect During Your First Consultation",
    }
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
              CASE STUDY
            </h1>

            {/* Breadcrumb */}
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> Case Study
            </p>

          </div>

        </div>
      </section>

      <section className="bg-[#f4ede8] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {blogs.map((blog) => (
              <div key={blog.id} className="group text-left">

                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title + Arrow */}
                <div className="flex items-center justify-between mt-6">
                  <h3 className="text-lg font-medium text-[#3b2b25] leading-snug w-3/4">
                    {blog.title}
                  </h3>

                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c65d32] text-white transition duration-300 group-hover:bg-[#a84b27]">
                    →
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  )
}

export default CaseStudy
