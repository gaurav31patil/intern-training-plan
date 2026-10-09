// ----------------------------------------------------
// Exercise A — dotenv Setup
// TODO:
// Load environment variables from .env
// Print process.env.MODE and process.env.PORT in server file
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise B — Fake Database Functions
// TODO:
// Create async functions: getAll(), getById(), createItem(), updateItem(), deleteItem()
// Each should return a Promise that resolves with mock data
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise C — CRUD API with Fake DB
// TODO:
// Use an array called records to simulate DB
// Implement GET, POST, PUT, DELETE endpoints using the fake DB functions
// ----------------------------------------------------

let records = [
  { id: 1, title: "Sample Record" }
];



// ----------------------------------------------------
// Exercise D — Request Validation
// TODO:
// In POST/PUT endpoints, validate that 'title' exists
// If missing, return status 400 with error message
// ----------------------------------------------------
