
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    noSeats: {
        type: String,
        required:true
    },
    amenities: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    }

})


const User = mongoose.model('USER', userSchema);
module.exports = User;