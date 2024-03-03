const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// User registration
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during registration");
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        // Check if the password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send("Invalid password");
        }
        res.status(200).send("Login successful");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during login");
    }
});

module.exports = router;
