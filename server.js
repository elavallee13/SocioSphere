const express = require('express');
const mongoose = require('mongoose');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();

const PORT = process.env.PORT || 3000;

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

// Middlewares for parsing JSON data and form data from POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

const thoughtRoutes = require('./routes/thoughtRoutes');
app.use(thoughtRoutes);


// Consider removing this if the registration logic is already in userRoutes.js
app.post('/register', async (req, res) => {
  try {
    const User = require('./models/user');
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`SocioSphere API is running on http://localhost:${PORT}`);
});
