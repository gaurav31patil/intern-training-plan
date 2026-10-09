// ----------------------------------------------------
// Exercise A — Logging Middleware
// TODO:
// Create middleware logRequest that prints method + URL + timestamp
// Apply it globally to all routes
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise B — Validation Middleware
// TODO:
// For POST /items, ensure "name" field exists
// If missing, return status 400 with message "Name is required"
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise C — Controllers
// TODO:
// Move route handler logic to a separate controllers/itemsController.js file
// Export functions and import them into routes/items.js
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise D — Error Handler
// TODO:
// Create global error handler middleware that returns:
// status code, message, and stack (only in development)
// Trigger example error using next(new Error("Test error")) in a route
// ----------------------------------------------------
