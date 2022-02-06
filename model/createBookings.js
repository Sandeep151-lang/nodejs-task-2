const mongoose = require('mongoose');

const booking = new mongoose.Schema({
    customerName: { type: String, required: true },
    Date: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    RoomID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    }
})

module.exports = mongoose.model('RoomBooking', booking);