let myLibrary = [
  {
    title: 'The Jazz Piano Book',
    author: 'Mark Levine',
    pages: 222,
    status: 'finished',
  },
  {
    title: 'The Jazz Theory Book',
    author: 'Mark Levine',
    pages: 322,
    status: 'finished'
  }
];

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBookToLibrary() {
  // take user’s input and store the new book object into the array myLibrary: currently working on no.2
  let title = document.getElementById("title").value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  
  let newObj = Book(title, author, pages, status);
}

function displayMyLibrary() {
  // 3. loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”
  for (let i=0; i<myLibrary.length; i++) {
    document.createElement(div);
  }
}

function toggleHidden() {
  document.querySelector('#input').classList.toggle('hidden');
  document.querySelector('#add').classList.toggle('hidden');
}

document.querySelector('#close-form').addEventListener('click', toggleHidden);
document.querySelector('#add').addEventListener('click', toggleHidden);