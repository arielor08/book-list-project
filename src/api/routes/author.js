const express = require('express');
const authorController = require('../../controllers/author');
const router = express.Router();

router.get('/', authorController.getAuthor);

router.get('/:id', authorController.getAuthorById);

router.post('/create-author', authorController.createAuthor);

router.delete('/delete-author/:id', authorController.deleteAuthor);

router.patch('/update-author', authorController.updateAuthor);

module.exports = router;
