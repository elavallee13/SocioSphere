const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Allow to parse JSON data from POST requests
app.use(express.json());

const User = require('./models/user');

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sociosphere', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!");
});

app.listen(3000, () => {
  console.log('SocioSphere API is running on http://localhost:3000');
});
