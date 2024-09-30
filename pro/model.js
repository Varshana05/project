// models/Apparel.js
const mongoose = require('mongoose');

const ApparelSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['T-shirt', 'Jeans', 'Jacket', 'Dress', 'Shirt', 'Other']
    },
    condition: {
        type: String,
        required: true,
        enum: ['Worn-out', 'Unused']
    },
    preference: {
        type: String,
        required: true,
        enum: ['Recycle', 'Donate', 'Dispose']
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Processed']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Apparel', ApparelSchema);
