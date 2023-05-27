const express = require("express")
const booksControllers = require("../../controllers/book.controller")
const router = express.Router()
router.route("/")
   .get(booksControllers.getAllBook)
   .post(booksControllers.addABook)

module.exports = router