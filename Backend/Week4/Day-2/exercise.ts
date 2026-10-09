// ----------------------------------------------------
// Exercise A — JWT Sign
// TODO:
// On successful login, sign a JWT token containing:
// { id, email, role }
// Print the generated token
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise B — JWT Verify
// TODO:
// Create authMiddleware that:
// 1) Reads token from Authorization header
// 2) Verifies token using jwt.verify()
// 3) Attaches decoded payload to req.user
// 4) Returns 401 if invalid or missing
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise C — Protected Route
// TODO:
// Create /me route that returns req.user
// Test with valid and invalid tokens
// ----------------------------------------------------



// ----------------------------------------------------
// Exercise D — Token Expiry
// TODO:
// Add token expiration (e.g., 1h)
// Test expired token response
// ----------------------------------------------------
