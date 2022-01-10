//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.deleteBook = (i) => {
  const btn = document.getElementById(i);
  btn.addEventListener("click", () => {
    myLibrary.splice(i, 1);
    console.table(myLibrary);
    createDisplay();
  });
};

Book.prototype.toggleRead = (i) => {
  const readbtn = document.getElementById(`read${i}`);
  readbtn.addEventListener("click", () => {
    if (readbtn.innerText === "Not Read") {
      readbtn.innerText = "Read";
      readbtn.classList.add("active");
      myLibrary[i].read = true;
    } else {
      readbtn.innerText = "Not Read";
      readbtn.classList.remove("active");
      myLibrary[i].read = false;
    }
  });
};

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
};

//Creates display
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
    const authorNode = document.createTextNode(`by ${myLibrary[i].author}`);
    addAuthor.appendChild(authorNode);
    display.appendChild(addAuthor);

    const addPages = document.createElement("h2");
    const pagesNode = document.createTextNode(`${myLibrary[i].pages} pages`);
    addPages.appendChild(pagesNode);
    display.appendChild(addPages);
    let readResult;
    const addRead = document.createElement("button");
    addRead.classList.add("readbtn");
    if (myLibrary[i].read === true) {
      readResult = "Read";
      addRead.classList.add("active");
    } else {
      readResult = "Not Read";
    }
    addRead.setAttribute("id", `read${i}`);
    addRead.innerText = readResult;
    display.appendChild(addRead);
    const addDelete = document.createElement("button");
    addDelete.innerText = "Delete";
    addDelete.classList.add("deletebtn");
    addDelete.setAttribute("id", `${i}`);

    display.appendChild(addDelete);
    document.getElementById("bookContainer").appendChild(display);
    myLibrary[i].deleteBook(i);
    myLibrary[i].toggleRead(i);
    clearInput();
    document.querySelector(".popup").style.display = "none";
  }
}

function clearInput() {
  document.getElementById("myTitle").value = "";
  document.getElementById("myAuthor").value = "";
  document.getElementById("myPages").value = "";
  document.getElementById("myRead").checked = false;
}
