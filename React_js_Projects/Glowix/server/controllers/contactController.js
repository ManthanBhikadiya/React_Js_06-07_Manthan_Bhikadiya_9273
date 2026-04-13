const Contact = require("../models/Contact")

exports.createContact = async (req, res) => {
    try {
        const { firstName, lastName, phone, email, message } = req.body
        const contact = await Contact.create({
            name: firstName + " " + lastName,
            email: email,
            phone: phone,
            message: message
        })
        res.json(contact)
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to send message" })
    }
}
