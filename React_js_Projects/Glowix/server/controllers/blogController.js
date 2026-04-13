const Blog = require("../models/Blog")

exports.createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        res.json(blog)
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to create blog" })
    }
}

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to fetch blogs" })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.json({ message: "Blog Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to delete blog" })
    }
}