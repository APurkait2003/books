const express = require('express')
const bookRoutes = express.Router()

const bookController = require('../controllers/bookController')

bookRoutes.post("/add",bookController.addBooks)

bookRoutes.get("/all",bookController.allBooks)

bookRoutes.get("/:id",bookController.getBookId)

bookRoutes.put("/update/:id",bookController.updateById)

bookRoutes.patch("/patch/:id",bookController.updateSomeById)

bookRoutes.delete("/delete/:id",bookController.deleteById)

module.exports = bookRoutes
console.log("Book router is working.")