const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    // Add more fields as needed
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
