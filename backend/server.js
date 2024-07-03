const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to DB
connectDB();

const app = express();

// Middleware to parse incoming JSON requests and make the JSON data accessible in req.body
app.use(express.json());

// Middleware to parse incoming URL-encoded form data and make it accessible in req.body
// Setting extended: false ensures that the querystring library is used for parsing
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
