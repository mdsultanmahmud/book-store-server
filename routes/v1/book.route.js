const express = require("express")
const booksControllers = require("../../controllers/book.controller")
const router = express.Router()
router.route("/")
   .get(booksControllers.getAllBook)
   .post(booksControllers.addABook)

router.route("/:id")
    .patch(booksControllers.updateABook)
    .delete(booksControllers.deleteABook)

module.exports = router