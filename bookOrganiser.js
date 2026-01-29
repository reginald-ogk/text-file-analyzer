/* filter the books released before or in 1950 and sort them by release year */

const books = [
  {
    title: "Deep Work",
    authorName: "Cal Newport",
    releaseYear: 2026
  },

  {
    title: "Principles",
    authorName: "Ray Dalio",
    releaseYear: 2025
  },

  {
    title: "Do Epic SHit",
    authorName: "Ankur Warikoo",
    releaseYear: 2024
  },

  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1948
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }

  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks)