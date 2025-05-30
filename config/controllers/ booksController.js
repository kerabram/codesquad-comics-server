const bookData = require('../data/books');

const getAllBooks = async (req, res, next) => {
  const books = bookData;
  try {
      return res.status(200).json({ 
        success: {message: "Books Catalog Retrieve"},
        data: books
      })
    } catch (error) {
      res.status(400).json({
        error: { message: "Error retrieving books" },
      })
  }
};

const getBook = async (req, res, next) => {
  const{_id} = req.params;
  try {
    const book = bookData.find((book) => book._id === id);
      return res.status(200).json({
        success: {message: "Book not found" },
        data: {book},
      });
  } catch (error) {
    res.status(400).json({
      error: { message: "Error retrieving book" },
    })
  }
};

const createBook = async (req, res, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } = req.body;
   const newBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    };
  try {
    bookData.push(newBook);

    res.status(201).json({
      success: { message: "Book created successfully" },
      data: { newBook }
    });
  }
  catch (error) {
    res.status(400).json({
      error: { message: "Error creating book" },
    });
  }
};

const updateBook = async (req, res, next) => {
  const { _id } = req.params;
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } = req.body;

  try {
    const updatedBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    };

    const foundBookIndex = bookData.find((book) => book._id === _id);
    bookData[foundBookIndex] = updatedBook;
    res.status(201).json({
      success: { message: "Book updated successfully" },
      data: { updatedBook },
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Error updating book" },
    });
  }
}

const deleteBook = async (req, res, next) => {
  const { _id } = req.params;

  try {
    const books = bookData.filter((book) => book._id !== _id);
    res.status(200).json({
      success: { message: "Book deleted successfully" },
      data: { books },
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Error deleting book" },
    });
  }
}

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
