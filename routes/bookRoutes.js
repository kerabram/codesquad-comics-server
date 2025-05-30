const express = require("express");
const router = express.Router();

const {getAllBooks, getBook, createBook,  updateBook, deleteBook} = require("../controllers/booksController");

//Tell the app to use the routing variables you defined earlier
app.use("/", booksRoutes);
app.use("/auth", authRoutes);

router.get("/", getAllBooks);
router.get("/:id", getBook);
router.post("/create/new", createBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);



module.exports = router;