const mongoose = require('mongoose');

const createRoom = new mongoose.Schema({
    RoomName: { type: String, required: true, unique: true },
    seats: { type: Number, required: true },
    amenities: {
        type: String,
        enum: ["Non-Ac", "Ac"],
        default: "Non-Ac",
        required: true
    },
    price: { type: Number, required: true },
    customerID: []
}, { timestamps: true })

module.exports = mongoose.model('Room', createRoom);