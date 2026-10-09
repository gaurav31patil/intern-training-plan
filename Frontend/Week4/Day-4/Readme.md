## **Day 4 — Data Fetching Strategies, Filtering & Pagination**

### **Learn**

- CSR vs SSR vs SSG fetching strategies
- Performance considerations
- Search, filtering & pagination patterns
- Handling query params in URL

### **What to Build**

- Connect **Tasks UI** to backend API (GET, POST, PUT, DELETE)
- Implement CSR or SSR data fetching (per project decision)
- Add pagination & filtering using query params:

  ```
  /tasks?page=1&limit=10&status=completed
  ```

- Add status workflow: **Open → In Progress → Completed**
- Display loading, error & empty UI depending on fetch status

---
