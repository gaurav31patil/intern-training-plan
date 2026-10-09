## **Day 5 — Mini Project: Express CRUD API**

### **Learn**

- Combining routing, controllers, middleware, and validation
- Structuring small production-ready Express apps
- Thinking in terms of RESTful resources

### **References**

- Generic CRUD Tutorial — [https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp](https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp)

---

### **What to Build — Mini Project**

Choose one resource (e.g., `tasks`, `notes`, `books`, `contacts`) and build a full CRUD API:

| Method | Endpoint     | Description |
| ------ | ------------ | ----------- |
| POST   | `/items`     | Create      |
| GET    | `/items`     | List        |
| GET    | `/items/:id` | Detail      |
| PUT    | `/items/:id` | Update      |
| DELETE | `/items/:id` | Remove      |

#### **Key Requirements**

- Use Express routing + controllers
- Add at least **one custom middleware**
- Add basic validation
- Use a **mock database** (array or JSON file)
- Return proper **error messages & status codes**

---

Would you like a **folder structure template** for Express projects (e.g., `routes/`, `controllers/`, `middleware/`, `config/`, etc.) to pair with this plan?
