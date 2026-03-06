const mongoose = require("mongoose");

const booking_schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

booking_schema.index({ date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model("Booking", booking_schema);
