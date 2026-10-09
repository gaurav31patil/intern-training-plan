Here is your **Markdown formatted** Week 4 plan:

---

# **Week 4 — Next.js Advanced Concepts**

### 🎯 **Goal:** Continue structured learning while building the **Task Management System UI** step-by-step.

---

## **Day 1 — Next.js Layouts, Shared Components & Project Architecture**

### **Learn**

- Next.js Layout system for shared UI
- Folder structure for scalable project architecture
- Global state management using Context API across pages

### **What to Build**

- Initialize **Task Management System UI** project in Next.js
- Create a **global Layout** containing:

  - Navbar
  - Sidebar
  - Main content container

- Set up folder structure:

  ```
  components/
  layouts/
  context/
  hooks/
  pages/
  utils/
  ```

- Create pages:

  - `/login`
  - `/dashboard`
  - `/tasks`
  - `/tasks/[id]`

- Create `AuthContext` & `ThemeContext` for authentication and UI state
- Wrap app with Context Providers inside `_app.js` or `layout.js` (depending on Next.js version)

---
