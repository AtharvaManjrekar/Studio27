const express = require("express");
const router = express.Router();
const {
  createBooking,
  cancelBooking,
} = require("../controllers/bookingControllers");
// console.log(createBooking);
router.post("/bookings", createBooking);
router.delete("/bookings/:id", cancelBooking);

module.exports = router;
