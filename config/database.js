const mongoose = require("mongoose");

require("dotenv").config();

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place a string similar to the following
 * string into the `.env` file
 *
 * DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 */

const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const noteSchema = new mongoose.Schema({
  text: String,
  checked: Boolean,
  index: Number,
});

const animeSchema = new mongoose.Schema({
  id: Number,
  title: {
    romaji: String,
    english: String,
  },
  description: String,
  genres: [String],
  episodes: Number,
  duration: Number,
  coverImage: {
    extraLarge: String,
  },
});

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const UserSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
  notes: [noteSchema],
  animelist: [animeSchema],
});

const User = connection.model("User", UserSchema);

// Export the connection
module.exports = connection;
