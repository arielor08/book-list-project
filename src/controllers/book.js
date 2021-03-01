const Book = require('../models/book');
const BookAuthor = require('../models/book-author');

exports.getBook = (req, res) => {
  Book.findAll()
    .then(books => res.json(books))
    .catch((err) => {
      console.error('There is an error: ', err);
    });
};

exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.findByPk(bookId)
    .then(book => res.json(book))
    .catch((err) => {
      console.error('There is an error:', err);
    });
};

exports.createBook = (req, res) => {
  const bookTitle = req.body.title;
  const bookDescription = req.body.description;
  Book.create({ title: bookTitle, description: bookDescription })
    .then(() => {
      return res.json({ message: 'Book created' });
    })
    .catch((err) => {
      console.error('There is an error:', err);
    });
};

exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  Book.destroy({ where: { id: bookId } })
    .then(() => {
      return res.json({ message: 'Book deleted' });
    })
    .catch((err) => {
      console.error('There is an error:', err);
    });
};

exports.updateBook = (req, res) => {
  const bookId = req.body.id;
  const bookTitle = req.body.title;
  const bookDescription = req.body.description;
  Book.update(
    { title: bookTitle, description: bookDescription },
    { where: { id: bookId } }
  )
    .then((rowsAffected) => {
      return res.json({ message: 'Book updated', rowsAffected: rowsAffected });
    })
    .catch((err) => {
      console.error('There is an error:', err);
    });
};
