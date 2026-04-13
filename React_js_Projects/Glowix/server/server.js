const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const contactRoutes = require("./routes/contactRoutes")
const appointmentRoutes = require("./routes/appointmentRoutes")
const blogRoutes = require("./routes/blogRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/appointment", appointmentRoutes)
app.use("/api/blog", blogRoutes)

app.get("/", (req, res) => {
    res.send("Glowix Backend Running")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})