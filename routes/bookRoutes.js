const express = require("express");
const router = express.Router();

const {getAllBooks, createNewBook,  updateBook, deleteBook} = require("../controllers/booksController");

//Tell the app to use the routing variables you defined earlier
app.use("/", booksRoutes);
app.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.status(200).json({ success: { message: "Book Catalog" } });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ success: { message: `Retrieve single: ${req.params.id}` } });
});

router.post("/create/new", (req, res) => {
  res.status(201).json({ success: { message: "Create a new book" } });
});

router.put("/update/:id", (req, res) => {
  res.status(200).json({ success: { message: `Book Updated: ${req.params.id}` } });
});

router.delete("/delete/:id", (req, res) => {
  res.status(200).json({ success: { message: `Book Deleted: ${req.params.id}` } });
});


module.exports = router;