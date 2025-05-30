const express = require("express");
const router = express.Router();

const { register, login, logout, localLogin } = require("../controllers/authControllers");

router.post("/register", register);
router.get("/login", login);
router.get("/login/error", (req, res, next) => {
  return response.json("Login failed");
});
router.get("/logout", logout);
router.get("/local-login", localLogin);
router.get("/unauthenticated", (req, res) => {
  console.log("Returning to the homepage...");
  response.redirect("/");
});


module.exports = router;