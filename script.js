//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Library array
let myLibrary = [];

//Cretes and adds new book to library array
function createObject(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

//Exit button
const exit = document.getElementById("exitbtn");
exit.onclick = () => {
  document.querySelector(".popup").style.display = "none";
};

//Add book button
const addBook = document.getElementById("addbtn");
addBook.onclick = () => {
  document.querySelector(".popup").style.display = "flex";
};

//Submit Button
const submit = document.getElementById("submitbtn");
submit.onclick = () => {
  const title = document.getElementById("myTitle").value;
  const author = document.getElementById("myAuthor").value;
  const pages = document.getElementById("myPages").value;
  const read = document.getElementById("myRead").checked;
  createObject(title, author, pages, read);
  console.table(myLibrary);
  createDisplay();

  console.table(myLibrary);
  console.log("Ran to this point");
};

function createDisplay() {
  document.querySelector("#bookContainer").innerHTML = " ";
  for (let i = 0; i < myLibrary.length; i++) {
    const display = document.createElement("div");
    display.classList.add("book");

    const addTitle = document.createElement("h1");
    const titleNode = document.createTextNode(`${myLibrary[i].title}`);
    addTitle.appendChild(titleNode);
    display.appendChild(addTitle);

    const addAuthor = document.createElement("h2");
    const authorNode = document.createTextNode(`${myLibrary[i].author}`);
    addAuthor.appendChild(authorNode);
    display.appendChild(addAuthor);

    const addPages = document.createElement("h2");
    const pagesNode = document.createTextNode(`${myLibrary[i].pages}`);
    addPages.appendChild(pagesNode);
    display.appendChild(addPages);

    const addRead = document.createElement("h2");
    const readNode = document.createTextNode(`${myLibrary[i].read}`);
    addRead.appendChild(readNode);
    display.appendChild(addRead);
    document.getElementById("bookContainer");
    document.getElementById("bookContainer").appendChild(display);
  }
}
