const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// Send message
router.post('/send', async (req, res) => {
    try {
        const { senderId, recipientId, content } = req.body;
        // Save message to the database
        const message = new Message({ senderId, recipientId, content });
        await message.save();
        res.status(201).send("Message sent successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while sending the message");
    }
});

module.exports = router;
