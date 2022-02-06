const createRoom = require('../model/createRoom');
const express = require('express');
const router = express.Router();


require('./conn')

router.get('/getAllrooms', async (req, res) => {
    try {
        await createRoom.find().then((doc) => {
            return res.status(200).send(doc);
        })
    } catch (error) {
        res.status(400).send('error')
    }
})
module.exports = router;