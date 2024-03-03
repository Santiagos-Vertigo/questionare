const mongoose = require('mongoose');

const questionnaireResponseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    responses: [{ type: String, required: true }],
    // Add more fields as needed
});

const QuestionnaireResponse = mongoose.model('QuestionnaireResponse', questionnaireResponseSchema);

module.exports = QuestionnaireResponse;
