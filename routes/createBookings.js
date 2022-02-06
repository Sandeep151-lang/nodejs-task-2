const createBooking = require('../model/createBookings');
const express = require('express');
const router = express.Router();
const createRoom = require('../model/createRoom');



require('./conn')
router.post('/createBooking', async (req, res) => {
    const { Date, startTime, RoomID } = req.body;
    try {

        var book = new createBooking(req.body);

        const booking = await book.save();
        if (booking) {
            res.status(200).send(booking)
            await createRoom.findOneAndUpdate({ _id: RoomID }, { $push: { customerID: booking } }).select('customerName')
        } else {
            return res.status(400).json('error')
        }

    } catch (error) {
        return res.status(400).json('Error')
    }
})



module.exports = router;