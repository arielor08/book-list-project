const Author = require('../models/author');
const BookAuthor = require('../models/book-author');

exports.getAuthor = (req, res) => {
  Author.findAll()
    .then((authors) => res.json(authors))
    .catch((err) => {
      console.error('there is an error:', err);
    });
};

exports.getAuthorById = (req, res) => {
  const authorId = req.params.id;
  Author.findByPk(authorId)
    .then((author) => res.json(author))
    .catch((err) => {
      console.error('there is an error:', err);
    });
};

exports.createAuthor = (req, res) => {
  const authorName = req.body.name;
  Author.create({ name: authorName })
    .then(() => {
      res.json({ message: 'Author Created' });
    })
    .catch((err) => {
      console.error('There is an error:', err);
    });
};

exports.deleteAuthor = (req, res) => {
  const authorId = req.params.id;
  Author.destroy({ where: { id: authorId } })
    .then(() => res.json({ message: 'Author Deleted' }))
    .catch((err) => {
      console.error('There is an error:', err);
    });
};

exports.updateAuthor = (req, res) => {
  const authorName = req.body.name;
  const authorId = req.body.id;
  Author.update({ name: authorName }, { where: { id: authorId } })
    .then(() => {
      res.json({ message: 'Author Updated' });
    })
    .catch((err) => {
      console.error('There is an error', err);
    });
};
