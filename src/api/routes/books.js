const express = require('express');
const bookController = require('../../controllers/book');
const router = express.Router();

router.get('/', bookController.getBook);

router.get('/:id', bookController.getBookById);

router.post('/create-book', bookController.createBook);

router.delete('/delete-book/:id', bookController.deleteBook);

router.patch('/update-book', bookController.updateBook);

module.exports = router;
