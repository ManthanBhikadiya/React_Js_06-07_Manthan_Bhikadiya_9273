const Appointment = require("../models/Appointment")

exports.createAppointment = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, doctor, date } = req.body
        const appointment = await Appointment.create({
            name: `${firstName} ${lastName}`,
            email,
            phone,
            service: doctor,
            date
        })
        res.json(appointment)
    } catch (error) {
        res.status(500).json({ message: error.message || "Failed to create appointment" })
    }
}
