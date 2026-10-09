## **Day 3 — Backend Security Essentials**

### **Learn**

- CORS
- Rate limiting (`express-rate-limit`)
- Validation (`express-validator`, Zod, or Yup)
- Environment variables (`dotenv`)
- Folder structure organization
- Error-handling middleware
- Logging basics

### **References**

- express-validator — [https://express-validator.github.io/docs/](https://express-validator.github.io/docs/)
- dotenv — [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
- CORS — [https://expressjs.com/en/resources/middleware/cors.html](https://expressjs.com/en/resources/middleware/cors.html)

### **What to Build**

- Add validation to `/signup` and `/login` using express-validator or custom logic
- Enable and configure CORS middleware (allow specific domains)
- Add rate limiting to `/login` to prevent brute force attempts
- Load environment variables (ex: `JWT_SECRET`, `DB_URI`, `PORT`) using `.env`

---
