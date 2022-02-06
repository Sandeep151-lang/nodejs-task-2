const createRoom = require('../model/createRoom');
const express = require('express');
const router = express.Router();


require('./conn')
router.post('/createRooms', async (req, res) => {
    try {
        var room = new createRoom(req.body);
        await room.save()
        res.status(200).send({ Room: room })
    } catch (error) {
        return res.status(400).json('Error')
    }
})

module.exports = router