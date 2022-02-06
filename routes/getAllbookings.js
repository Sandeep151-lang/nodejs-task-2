const createBooking = require('../model/createBookings');
const express = require('express');
const router = express.Router();


require('./conn')
router.get('/getbooked', async (req, res) => {
    try {
        await createBooking.find().populate('RoomID', 'RoomName price seats').then((room) => {
            res.json(room)
        })
    } catch (error) {
        res.status(400).json('error')
    }

})

module.exports = router;