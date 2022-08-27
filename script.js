let myBooks = [];

let addBook = document.getElementById("addbook");
let display = document.getElementById("display");
let submitButton = document.getElementById("submit-button");
let addBookModal = document.getElementById("add-book-modal");
let addBookForm = document.getElementById("add-book-form");
let title = document.getElementById("book-title");
let author = document.getElementById("book-author");
let pages = document.getElementById("book-pages");
let read = document.getElementById("read");
let overlay = document.getElementById("overlay");

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
  display.textContent = "";

  // Loading new Book Cards
  for(i = 0; i < myBooks.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card", i);
    display.append(bookCard);

    let j = 0;

    // Writing content of book into book cards
    for (const item in myBooks[i]) {
      const bookCardElement = document.createElement("p");
      bookCardElement.classList.add(Object.keys(myBooks[i])[j]);
      bookCardElement.innerHTML += Object.keys(myBooks[i])[j] + ": " + myBooks[i][item];
      bookCard.append(bookCardElement);
      j++;
    }
  }


}



//Displaying add book modal
addBook.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
  addBookModal.classList.add("modal-active");
});

submitButton.addEventListener("click", () => {
  //Checks if form is properly filled out before running rest of function
  if (addBookForm.checkValidity()) {
    newBook = new Book(title.value, author.value, pages.value, read.checked)

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;

    addBookToLibrary(newBook);
    
    //Making add book modal not active
    addBookModal.classList.remove("modal-active");
    overlay.classList.remove("overlay-active");

    loadLibrary();
  }
})

overlay.addEventListener("click", () => {
  addBookModal.classList.remove("modal-active");
  overlay.classList.remove("overlay-active");
})

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not Read");
addBookToLibrary(theHobbit);
loadLibrary();

console.log(Object.keys(theHobbit));