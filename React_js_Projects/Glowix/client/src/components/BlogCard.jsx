import Blog1 from "../assets/asset 41.jpeg"
import Blog2 from "../assets/asset 42.jpeg"
import Blog3 from "../assets/asset 43.jpeg"
import Blog4 from "../assets/blog 1.jpg"
import Blog5 from "../assets/blog 2.jpg"
import Blog6 from "../assets/blog 3.jpg"
import { useState } from "react"

function BlogCard() {


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
        {
            id: 4,
            image: Blog4,
            title: "Top Tips for Preparing for Plastic Surgery",
        },
        {
            id: 5,
            image: Blog5,
            title: "Myths and Facts About Plastic Surgery",
        },
        {
            id: 6,
            image: Blog6,
            title: "What to Expect During Your First Consultation",
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const cblogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <section className="bg-[#f4ede8] py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">

                {/* Small Heading */}
                <p className="text-sm tracking-widest text-#c65f2f uppercase mb-3">
                    Latest Blog
                </p>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-serif text-[#3b2b25] leading-tight mb-14">
                    Our latest insights on plastic <br />
                    surgery & skincare
                </h2>

                {/* Blog Cards Grid - Now mapping blogs instead of blogs */}
                <div className="grid md:grid-cols-3 gap-10">
                    {cblogs.map((blog) => (
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

                {/* Pagination UI */}
                <div className="mt-16 flex items-center justify-center gap-2">
                    {/* Previous Button */}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-[#3b2b25] text-[#3b2b25] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#3b2b25] hover:text-white transition cursor-pointer"
                    >
                        Prev
                    </button>

                    {/* Numbered Page Buttons */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`w-10 h-10 rounded-lg border ${currentPage === i + 1
                                ? 'bg-[#c65d32] text-white border-[#c65d32] cursor-pointer'
                                : 'border-[#3b2b25] text-[#3b2b25] hover:bg-[#3b2b25] hover:text-white cursor-pointer'
                                } transition`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className=" px-4 py-2 rounded-lg border border-[#3b2b25] text-[#3b2b25] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#3b2b25] hover:text-white transition cursor-pointer"
                    >
                        Next
                    </button>
                </div>

            </div>
        </section>
    )
}

export default BlogCard

