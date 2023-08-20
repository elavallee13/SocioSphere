const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
  reactions: [{ text: String, createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }]
});

module.exports = mongoose.model('Thought', thoughtSchema);
