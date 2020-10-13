let myLibrary = [
  {
    title: 'The Jazz Piano Book',
    author: 'Mark Levine',
    status: true,
  },
  {
    title: 'The Jazz Theory Book',
    author: 'Mark Levine',
    status: true,
  }
];

function Book(title, author, status, notes) {
  this.title = title
  this.author = author
  this.status = status
  this.notes = notes
}

function addBookToLibrary() {
  // take user’s input and store the new book object into the array myLibrary
  let title = document.getElementById("title").value;
  let author = document.getElementById('author').value;
  let status = document.getElementById('status').checked;
  
  let newObj = new Book(title, author, pages, status);
  myLibrary.push(newObj);
  //put code to create the DOM object and add it to the library display

  closeForm();


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

function closeForm() {
  toggleHidden();
  document.getElementById("title").value = '';
  document.getElementById('author').value = '';
  document.getElementById('notes').value = '';
  document.getElementById('status').checked = false;
}

document.querySelector('#close-form').addEventListener('click', closeForm);
document.querySelector('#add').addEventListener('click', toggleHidden);
document.querySelector('#add-book').addEventListener('click', addBookToLibrary);