## **Day 2 — JWT Authentication with Express**

### **Learn**

- JWT structure: header, payload, signature
- Signing JWT tokens (`jsonwebtoken`)
- Auth middleware
- Token expiration & refresh basics
- Protected routes

### **References**

- jsonwebtoken — [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- Express Middleware — [https://expressjs.com/en/guide/using-middleware.html](https://expressjs.com/en/guide/using-middleware.html)

### **What to Build**

- Initialize an Express project & enable `express.json()`
- Implement `/signup` and `/login` using the in-memory users store
- On successful login, generate a JWT token using `jsonwebtoken`
- Create `authMiddleware` that verifies tokens & attaches user to `req.user`
- Create a protected route `/me` returning user info only with a valid token
- Test using **Postman** or **Thunder Client**

---
