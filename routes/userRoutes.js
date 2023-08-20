const router = require('express').Router();
const User = require('../models/user');

// GET all users
router.get('/api/users', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET a single user by its `_id` with populated thought and friend data
router.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
        if (!user) {
            res.status(404).json({ message: 'User not found!' });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST a new user
router.post('/api/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

// PUT to update a user by its `_id`
router.put('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found!' });
            return;
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE to remove a user by its `_id`
router.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id);
        if (!deletedUser) {
            res.status(404).json({ message: 'User not found!' });
            return;
        }
        res.json({ message: 'User removed!' });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
