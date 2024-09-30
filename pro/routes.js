// routes/apparel.js
const express = require('express');
const router = express.Router();
const Apparel = require('../models/Apparel');

// @route   POST /api/apparel/submit
// @desc    Submit apparel details
// @access  Public
router.post('/submit', async (req, res) => {
    const { type, condition, preference } = req.body;

    // Basic validation
    if (!type || !condition || !preference) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const newApparel = new Apparel({
            type,
            condition,
            preference
        });

        const savedApparel = await newApparel.save();
        res.json(savedApparel);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/apparel
// @desc    Get all apparel submissions
// @access  Public
router.get('/', async (req, res) => {
    try {
        const apparels = await Apparel.find().sort({ createdAt: -1 });
        res.json(apparels);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
