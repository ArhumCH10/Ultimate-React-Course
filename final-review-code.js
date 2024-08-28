const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false, // boolean
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // Destructuring

const book = getBook(5);

const publicationDate = book.publicationDate;

publicationDate;

const { title, author, genres, pages, hasMovieAdaptation } = book;

console.log(`This book has ${hasMovieAdaptation ? "" : "not"} been adapted`);

console.log(title, author, genres);

// const primary = genres[0];
// const secondary = genres[1];

const [primary, secondary, ...other] = genres;

primary;
secondary;
other;

// //spread objects / arrays

// // arrays spread

const newGeneres = [" epic fantasy", "Arhum", ...genres];

newGeneres;

// // spread objects

const newBook = {
  ...book,
  // Adding a new Property
  moviePublicationDate: "2024-05-18",
  // Overrinting an existing property
  pages: "1201",
};

// newBook;

// // Template Literals

// 'book {count} '

const summary = `${title} is a book, the book author name is ${author}, ${genres[0]}, it was published in ${publicationDate}`;

summary;

// // Ternary operator/ statements if else

// // ternary 3 parts 1, condition

// // Arrow Functions in line

function getValue() {
  return pages > 1000 ? "pages is greater than 1000" : "not greater than 1000";
}

const value = () =>
  pages > 1000 ? "pages is greater than 1000" : "not greater than 1000";

value();

console.log(`book pages are ${value()}`);

// // Optional Chaining Operator

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  librarything;
  goodreads;

  const total = librarything + goodreads;

  return total;
}

const total = getTotalReviewCount(book);

total;

// // Array Map

const array = [1, 2, 3, 4, 5].map((cl) => cl * 2);

// array;

const books = getBooks();

const titles = books.map((book) => book.title);

// titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  count: getTotalReviewCount(book),
}));

// essentialData;

// // Array Filter

const longBooks = books
  .filter((book) => book.pages >= 500)
  .filter((book) => book.hasMovieAdaptation);

longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// // Array Reduce Method

const pagesOfAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

pagesOfAllBooks;

// // Array Sort

const x = [3, 1, 8, 4, 10, 2];

const sortedArray = x.slice().sort((a, b) => a - b);

sortedArray;

// x;

const sortedBooks = books.slice().sort((a, b) => b.pages - a.pages);

// sortedBooks;

// // Immutable Array

// // Add, delete , update

// // 1) Add inside an object

const newBooks = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J. kolin",
};

// // Spread Operator

const updatedBooks = [...books, newBooks];

// updatedBooks;

// // 2 Delete an Object

const deletedArrayOfBooks = updatedBooks.filter((book) => book.id !== 3);

// deletedArrayOfBooks;

// // 3. Update and Array

const updatesArrayodBooks = books.map((book) =>
  book.id === 1
    ? {
        ...book,
        pages: "300",
      }
    : book
);

// updatesArrayodBooks;

// Asynchronous JavaScript Promises

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// 1 Pending, 2 Successful  3 error

console.log("Dream to be Unique");

// Async and Await cleaner

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();

  return data;
}

const todos = await getTodos();

console.log(todos);

console.log("Dream to be Unique");
