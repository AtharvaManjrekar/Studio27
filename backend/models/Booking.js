const mongoose = require("mongoose");

const booking_schema = new mongoose.Schema({
    name: String,
    email: String,
    mobile_no: String,
    service: String,
    date:String,
    time:String,
    notes:String,
    createdAt:{
        type : Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Booking", booking_schema);