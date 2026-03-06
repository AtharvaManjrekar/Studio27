const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/bookingControllers");
// console.log(createBooking);
router.post("/bookings", createBooking);

module.exports = router;
