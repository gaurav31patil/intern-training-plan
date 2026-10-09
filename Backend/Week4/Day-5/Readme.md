## **Day 5 — Task Manager API: Full Implementation & Testing**

### **Goal**

Complete the full Task Manager API & prepare for submission.

### **Learn**

- Professional API structure
- Pagination
- Filtering & searching
- Testing with Postman
- Writing API documentation

### **Tasks to Build**

- Complete CRUD for Tasks
- Require JWT authentication for all task routes
- Add validation (`title` required, controlled value for status)
- Add filtering support:

  ```
  GET /tasks?status=completed
  GET /tasks?search=keyword
  ```

- Add pagination:

  ```
  GET /tasks?page=1&limit=10
  ```

- Add error responses for invalid or missing tasks

---
