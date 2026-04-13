const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: "Email already registered" })

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        const { password: _, ...safeUser } = user.toObject()
        res.json({ user: safeUser, token })

    } catch (error) {
        res.status(500).json({ message: error.message || "Registration failed" })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "Invalid email or password" })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" })

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        const { password: _, ...safeUser } = user.toObject()
        res.json({ user: safeUser, token })

    } catch (error) {
        res.status(500).json({ message: error.message || "Login failed" })
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const { name, email } = req.body
        const userId = req.user.id

        const user = await User.findByIdAndUpdate(
            userId,
            { name, email },
            { new: true, runValidators: true }
        )

        if (!user) return res.status(404).json({ message: "User not found" })

        const { password: _, ...safeUser } = user.toObject()
        res.json(safeUser)
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to update profile" })
    }
}
