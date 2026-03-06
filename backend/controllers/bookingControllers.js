// const Booking = require("../models/Booking");

// const createBooking = async (req, res) => {
//   try {
//     const allowedSlots = [
//       "10:00",
//       "11:00",
//       "12:00",
//       "13:00",
//       "14:00",
//       "15:00",
//       "16:00",
//       "17:00",
//     ];

//     // Validate time slot
//     if (!allowedSlots.includes(req.body.time)) {
//       return res.status(400).json({
//         message: "Invalid time slot",
//       });
//     }

//     const { date, time } = req.body;
//     const existing_booking = await Booking.findOne({ date, time });
//     if (existing_booking) {
//       return res.status(400).json({
//         message: "Slot already booked, please find the other suitable slot",
//       });
//     } else {
//       const booking = new Booking(req.body);
//       await booking.save();
//       return res.status(201).json({ message: "Slot Booked!" });
//     }
//   } catch (err) {
//     if (err.code === 11000) {
//       return res.status(400).json({
//         message: "This slot is already booked",
//       });
//     }

//     res.status(500).json({
//       message: "Server error",
//     });
//   }
// };

// module.exports = { createBooking };

const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

const createBooking = async (req, res) => {
  try {
    const allowedSlots = [
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ];

    if (!allowedSlots.includes(req.body.time)) {
      return res.status(400).json({
        message: "Invalid time slot",
      });
    }

    const { date, time } = req.body;

    const existing_booking = await Booking.findOne({ date, time });

    if (existing_booking) {
      return res.status(400).json({
        message: "Slot already booked, please find another slot",
      });
    }

    const booking = new Booking(req.body);
    await booking.save();
    console.log(booking._id);

    // EMAIL SENDER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Studio 27 Booking Confirmation",
      text: `
    Dear ${req.body.name},

    Thank you for booking your appointment with Studio 27.

    Your booking has been successfully confirmed with the following details:

    Service: ${req.body.service}
    Date: ${req.body.date}
    Time: ${req.body.time}
    
    Booking ID : ${booking._id}

    Please arrive 5-10 minutes before your scheduled time. If you need to reschedule or cancel your appointment, feel free to contact us.

    We look forward to serving you and giving you a great experience.

    Best regards,
    Studio 27 Salon
    Mobile No: 9594257690
    
    `,
    });

    return res.status(201).json({
      message: "Slot Booked! Confirmation email sent.",
    });
  } catch (err) {
    console.log("ERROR:", err);
    if (err.code === 11000) {
      return res.status(400).json({
        message: "This slot is already booked",
      });
    }

    res.status(500).json({
      message: "Server error",
    });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    // EMAIL SENDER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: booking.email,
      subject: `Studio 27 Booking Cancellation of Booking Id ${booking._id}`,
      text: `
Dear ${booking.name},

Your appointment at Studio 27 has been successfully cancelled.

Cancelled Booking Details:

Service: ${booking.service}
Date: ${booking.date}
Time: ${booking.time}

If this was done by mistake, you are welcome to book another slot through our website.

Thank you for choosing Studio 27.

Best regards,
Studio 27 Salon
Mobile No: 9594257690
`,
    });

    res.status(200).json({
      message: "Booking cancelled successfully and confirmation email sent",
    });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { createBooking, cancelBooking };
