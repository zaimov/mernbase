const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.green.underline);
  } catch (error) {
    console.log(`Error ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDb;
