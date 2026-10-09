## **Day 4 — Task Manager API: Architecture & Core Setup**

### **Goal**

Build a backend API for task management with full authentication support.

### **Learn**

- Designing API endpoints
- Choosing MongoDB or PostgreSQL
- Linking users to tasks (relationships)
- Structuring controllers & services

### **Endpoints to Plan**

#### **Auth**

| Method | Endpoint  |
| ------ | --------- |
| POST   | `/signup` |
| POST   | `/login`  |

#### **Tasks**

| Method | Endpoint     |
| ------ | ------------ |
| POST   | `/tasks`     |
| GET    | `/tasks`     |
| GET    | `/tasks/:id` |
| PUT    | `/tasks/:id` |
| DELETE | `/tasks/:id` |

### **Tasks to Build**

- Bootstrap backend folder structure
- Connect database (**MongoDB recommended** for project)
- Create **User model**
- Create **Task model** (`title`, `description`, `status`, `dueDate`, `userId`)
- Implement JWT authentication (re-use Day 2)
- Create protected `/tasks` route (placeholder logic is ok for now)
- Write API documentation outline (in a separate `.md` file)

### **Optional Enhancements**

- Task categories / tags
- Priority field

---
