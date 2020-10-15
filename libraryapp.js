let myLibrary = [
  {
    title: 'How To Train Goldfish',
    author: 'Arty Fischel',
    status: true,
    notes: 'ISBN: 123456. I especially liked the chapter "Walking on Their Tail".'
  },

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
  let notes = document.getElementById('notes').value;

  let newObj = new Book(title, author, status, notes);
  myLibrary.push(newObj);
  displayMyLibrary();
  closeForm();
}

function clearTable() {
  let rows = document.getElementsByClassName('row');
  while (rows.length > 0) {
    document.getElementById('library-display').removeChild(rows[0]);
  }
}

function displayMyLibrary() {
  // loops through the array and displays each book on the page
  clearTable();

  for (let i = 0; i < myLibrary.length; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', i);
    if (myLibrary[i].status) {
      row.classList.add('true');
    } else {
      row.classList.add('false');
    };

    let titleAuthor = document.createElement('div');
    titleAuthor.classList.add('title-author');
    row.appendChild(titleAuthor);

    let tit = document.createElement('div');
    tit.classList.add('title');
    tit.textContent = myLibrary[i].title;
    titleAuthor.appendChild(tit);

    let auth = document.createElement('div');
    auth.classList.add('author');
    auth.textContent = 'by ' + myLibrary[i].author;
    titleAuthor.appendChild(auth);

    let edit = document.createElement('div');
    edit.classList.add('edit-icon');
    row.appendChild(edit);

    let del = document.createElement('div');
    del.classList.add('delete-icon');
    row.appendChild(del);

    document.querySelector('#library-display').appendChild(row);
  };

  const allDeleteBtns = document.querySelectorAll('.delete-icon');
  allDeleteBtns.forEach((btn) => btn.addEventListener('click', deleteAlert));

  const allEditBtns = document.querySelectorAll('.edit-icon');
  allEditBtns.forEach((btn) => btn.addEventListener('click', editBook));

}
displayMyLibrary();

function editBook(e) {
  let libIndex = e.target.parentNode.getAttribute('id');
  document.getElementById('edit-form').classList.toggle('hidden');
  document.getElementById('edit-title').value = myLibrary[libIndex].title;
  document.getElementById('edit-author').value = myLibrary[libIndex].author;
  document.getElementById('edit-status').checked = myLibrary[libIndex].status;
  document.getElementById('edit-notes').value = myLibrary[libIndex].notes;
  // give the edit form a data attribute that is the array index.
  document.getElementById('confirm-edit').setAttribute('data-index', libIndex);
}

function confirmChanges() {
  let libIndex = document.getElementById('confirm-edit').getAttribute('data-index');
  myLibrary[libIndex].title = document.getElementById("edit-title").value;
  myLibrary[libIndex].author = document.getElementById('edit-author').value;
  myLibrary[libIndex].status = document.getElementById('edit-status').checked;
  myLibrary[libIndex].notes = document.getElementById('edit-notes').value;

  displayMyLibrary();
  document.querySelector('#edit-form').classList.toggle('hidden');
}
document.querySelector('#confirm-edit').addEventListener('click', confirmChanges);
document.querySelector('#cancel-edit').addEventListener('click', () => {document.querySelector('#edit-form').classList.toggle('hidden');});

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

function deleteAlert(e) {
  if (confirm('Are you sure want to delete this book?')) {
    deleteBook(e);
  } else { return; }
}

function deleteBook(e) {
  let arrayIndex = e.target.parentNode.getAttribute('id');
  myLibrary.splice(arrayIndex, 1);
  displayMyLibrary();
}

document.querySelector('#close-form').addEventListener('click', closeForm);
document.querySelector('#add').addEventListener('click', toggleHidden);
document.querySelector('#add-book').addEventListener('click', addBookToLibrary);