const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
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

module.exports = { createContact };
