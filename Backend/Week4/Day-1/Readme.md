Here is the content converted into **Markdown format**:

---

# **Week 4 — Authentication, JWT, Security & Task Manager Project**

---

## **Day 1 — Authentication Fundamentals**

### **Learn**

- Authentication vs Authorization
- Sessions vs JWT token-based auth
- Password hashing (`bcrypt`)
- Secure password storage
- Login logic, user identity, roles

### **References**

- JWT Basics — [https://www.w3schools.com/js/js_jwt.asp](https://www.w3schools.com/js/js_jwt.asp)
- bcrypt — [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)

### **What to Build**

- Use `bcrypt` to hash a plain-text password and verify using `compare`
- Create a simple in-memory users store (array of objects with `email`, `passwordHash`, `role`)
- **Signup:** store email, hashedPassword, and role (`"user"` or `"admin"`)
- **Login:** check email + password, return a success object with identity + role

---
