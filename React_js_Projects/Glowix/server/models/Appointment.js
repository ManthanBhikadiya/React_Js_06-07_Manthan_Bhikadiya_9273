const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    service: String,
    date: String,
    message: String
}, {
    timestamps: true
})

module.exports = mongoose.model("Appointment", appointmentSchema)