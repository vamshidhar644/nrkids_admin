require('dotenv').config();

const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const adminRoutes = require('./route/admin');

// Express app
const app = express();

// middleware
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

mongoose.set('strictQuery', false);

// connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB Listening on port ', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
