let myBooks = [];

let addBook = document.getElementById("addbook");
let loadBook = document.getElementById("loadbook")
let display = document.getElementById("display");


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  // Adds books to myBooks array
  myBooks.push(book);
  return 0;
}

function loadLibrary() {
  // Deleting previous Book Cards
  const bookCards = document.getElementsByClassName("book-card");
  for (i = 0; i < bookCards.length; i++) {
    bookCards[i].remove()
  }

  // Loading new Book Cards
  for(i = 0; i < myBooks.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card", i);
    display.append(bookCard);

    for (const item in myBooks[i]) {
      bookCard.innerHTML += myBooks[i][item] + " ";
    }
  }


}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not Read");

addBook.addEventListener("click", () => {addBookToLibrary(theHobbit)});
loadBook.addEventListener("click", () => {loadLibrary()});



theRing = new theHobbit.constructor("The Ring", "J.R.R. Tolkien", 295, "Not Read")

loadLibrary();