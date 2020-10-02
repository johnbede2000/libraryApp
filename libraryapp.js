// let myLibrary = [
//   {
//     title: 'The Jazz Piano Book',
//     author: 'Mark Levine',
//     pages: 222,
//     status: 'finished',
//   },
//   {
//     title: 'The Jazz Theory Book',
//     author: 'Mark Levine',
//     pages: 322,
//     status: 'finished'
//   }
// ];

// function book(title, author, pages, status) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.status = status
// }

// book.prototype.info = () => `${title} by ${author}, ${pages} pages, ${status}.`;

// function addBookToLibrary() {
  //  take user’s input and store the new book object into the array myLibrary
// }

// function displayMyLibrary() {
//   // loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”
//   for (let i=0; i<myLibrary.length; i++) {
//     document.createElement(div);
//   }
// }

function toggleHidden() {
  document.querySelector('#input').classList.toggle('hidden');
  document.querySelector('#add').classList.toggle('hidden');
}

document.querySelector('#hello').addEventListener('click', toggleHidden);

document.querySelector('#add').addEventListener('click', toggleHidden);