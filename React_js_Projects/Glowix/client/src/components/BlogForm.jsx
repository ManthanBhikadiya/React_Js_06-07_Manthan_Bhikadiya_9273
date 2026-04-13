import { useState } from "react"

function BlogForm({ onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        image: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const token = localStorage.getItem("token")
            const response = await fetch("http://localhost:5000/api/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { Authorization: `Bearer ${token}` })
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                onSuccess()
                onClose()
            }
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#efe7e1] p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-serif text-[#3b1d14]">Create New Blog</h2>
                    <button onClick={onClose} className="text-2xl text-[#3b1d14] hover:text-#c65f2f">
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-[#3b1d14] mb-2 font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter blog title"
                            className="w-full bg-white px-5 py-3 rounded-full outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#3b1d14] mb-2 font-medium">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="Enter author name"
                            className="w-full bg-white px-5 py-3 rounded-full outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#3b1d14] mb-2 font-medium">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="w-full bg-white px-5 py-3 rounded-full outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-[#3b1d14] mb-2 font-medium">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter blog description"
                            rows="6"
                            className="w-full bg-white px-5 py-4 rounded-2xl outline-none resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#c65f2f] hover:bg-[#a84b27] text-white py-4 rounded-full transition disabled:opacity-50"
                    >
                        {loading ? "Creating..." : "Create Blog"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BlogForm