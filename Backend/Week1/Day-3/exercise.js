// ----------------------------------------------------
// Exercise A — Functions
// TODO:
// Create a normal function called greet(name)
// Create an arrow function called farewell(name)
// Print both messages
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise B — Mock Async + Callbacks
// TODO:
// Simulate loading a list of books using setTimeout()
// Use a callback to print: "Loaded X books"
// ----------------------------------------------------

function loadBooks(callback) {
  setTimeout(() => {
    callback(["Book A", "Book B", "Book C"]);
  }, 1000);
}



// ----------------------------------------------------
// Exercise C — Promises + async/await
// TODO:
// Convert loadBooks to return a Promise
// Then call it using async/await and print result
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise D — Promise.all()
// TODO:
// Load books and authors at the same time
// Print both results when completed
// ----------------------------------------------------

function loadAuthors() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["John", "Sara", "David"]);
    }, 800);
  });
}



// ----------------------------------------------------
// Exercise E — Error Handling
// TODO:
// Create a function loadData() with 30% chance to reject
// Use try/catch to print success message or error message
// ----------------------------------------------------
