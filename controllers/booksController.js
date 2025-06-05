const { status } = require('express/lib/response');
const bookData = require('../data/books');

const getAllBooks = async (req, res, next) => {
  // const books = bookData;
  try {
    const books = await Book.find();

      return res.status(200).json({ 
        success: {message: "Books Catalog Retrieve"},
        data: {books},
        siteData,
      });
    } catch (error) {
    return next(error)
      // res.status(400).json({
      //   error: { message: "Error retrieving books" },
      }
};

const getBook = async (req, res, next) => {
  const{_id} = req.params;
  try {
    if (!id) {
      throw new Error("ID is required");
    }
    const book = await Book.findById(id);
    if (!book) {
      throw new Error("Book not found");
    }
    return res.status(200).json({
      success: { message: "Book retrieved" },
      data: { book },
      });
  } catch (error) {
    return next(error);
  }
};

const createBook = async (req, res, next) => {
  const { title, author, price, publisher, genre, pages, rating, synopsis, imageUrl } = req.body;
  try {
  if (!title || !author || !price || !publisher || !genre || !pages || !rating || !synopsis || !imageUrl) {
    throw new Error("Missing required fields, please review");
  }

   const newBook = ({
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    });
    await newBook.save();
  // try {
  //   bookData.push(newBook);

    res.status(201).json({
      success: { message: "Book created successfully" },
      data: { newBook },
      statusCode: 201
    });
  } 
  catch (error) {
          return next(error)
          // res.status(400).json({
          //   error: { message: "Error creating book" },
          // });
        }
    };

const updateBook = async (req, res, next) => {
  const { _id } = req.params;
  const { title, author, price, publisher, genre, pages, rating, synopsis, imageUrl } = req.body;

  try {
    if (!_id || !title || !author || !price || !publisher || !genre || !pages || !rating || !synopsis || !imageUrl) {
      throw new Error("Missing required fields, please review");
    } 
    const updatedBook = await Book.findByIdAndUpdate(_id,
   {
    $set: {
      title,
      author,
      price,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    }
  }, 
  { new: true }
);

    if (!updatedBook) {
      throw new Error("Book not found");
    }
    return res.status(201).json({
      success: { message: "Book updated" },
      data: { updatedBook },
      statusCode: 201
    });
  } catch (error) {
    return next(error)
  }
};

//     const foundBookIndex = bookData.find((book) => book._id === _id);
//     bookData[foundBookIndex] = updatedBook;
//     res.status(201).json({
//       success: { message: "Book updated successfully" },
//       data: { updatedBook },
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: { message: "Error updating book" },
//     });
//   }
// }

const deleteBook = async (req, res, next) => {
  const { _id } = req.params;

  try {
    if (!_id) {
      throw new Error("ID is required");
    }
    await Book.findByIdAndDelete(_id);
    return res.status(200).json({
      success: { message: "Book deleted successfully" },
      statusCode: 200   
    });
    // const books = bookData.filter((book) => book._id !== _id);
    // res.status(200).json({
    //   success: { message: "Book deleted successfully" },
    //   data: { books },
    // });
  } catch (error) {
    return next(error);
  }
};


module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
