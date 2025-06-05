const mongoose = require("mongoose");

const {Schema} = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publisher: {
    type: String,
  },
  genre: {
    type: String,
  },
  pages: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  synopsis: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;