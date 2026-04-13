const express = require("express")
const router = express.Router()

const { createBlog, getBlogs, deleteBlog } = require("../controllers/blogController")

router.post("/", createBlog)
router.get("/", getBlogs)
router.delete("/:id", deleteBlog)

module.exports = router