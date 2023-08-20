const router = require('express').Router();
const Thought = require('../models/thought');

// GET all thoughts
router.get('/api/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET a single thought by its `_id`
router.get('/api/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found!' });
        }
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST a new thought
router.post('/api/thoughts', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.json(newThought);
    } catch (error) {
        res.status(400).json(error);
    }
});

// PUT to update a thought by its `_id`
router.put('/api/thoughts/:id', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found!' });
        }
        res.json(updatedThought);
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE a thought by its `_id`
router.delete('/api/thoughts/:id', async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndRemove(req.params.id);
        if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found!' });
        }
        res.json({ message: 'Thought removed!' });
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST a reaction to a thought
router.post('/api/thoughts/:id/reactions', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, 
            { $push: { reactions: req.body } },
            { new: true }
        );
        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found!' });
        }
        res.json(updatedThought);
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE a reaction from a thought
router.delete('/api/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, 
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought or Reaction not found!' });
        }
        res.json(updatedThought);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
