const express = require("express");
const router = express.Router();
const { createContact } = require("../controllers/contactController");
const { route } = require("./bookingRoutes");
router.post("/contact", createContact);
module.exports = router;
