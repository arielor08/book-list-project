const express = require('express');
const { port } = require('./config/config');
const db = require('./server');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json())

const Book = require('./models/book');
const Author = require('./models/author');
const BookAuthor = require('./models/book-author');

const bookRoutes = require('./api/routes/books');

app.use('/books', bookRoutes);

Book.belongsToMany(Author, { through: BookAuthor });
Author.belongsToMany(Book, { through: BookAuthor });

db.sync()
  .then(() => {
    // Author.create({name:'Ariel'})
    // Book.create({title:'My first book',description:'This is my first book in life'})
    app.listen(port);
  })
  .catch((error) => console.error('There is an error: ', error));
