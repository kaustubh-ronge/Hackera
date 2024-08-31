const mongoose = require('mongoose');

const HotelBookingSchema = new mongoose.Schema({
    hotelName: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
});

const HotelBooking = mongoose.model('HotelBooking', HotelBookingSchema);

module.exports = HotelBooking;
