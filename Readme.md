# 🔐 Auth App — MERN Authentication System

> 🚧 **Project Status:** *UNDER ACTIVE DEVELOPMENT*
> 🧩 Backend Completed | 🎨 Frontend (React) In Progress

A secure and scalable **Authentication System** built with the **MERN stack**, featuring user registration, login, logout, password reset, and email verification.
This repo currently contains the **backend**, while the **frontend** is being developed and will be integrated soon.

---

## ⚡ Features (Backend Completed)

* 🧾 User Registration
* 🔑 Login & Logout
* 🛡️ JWT Authentication
* 📧 Email Verification (via Nodemailer)
* 🔁 Password Reset via Email
* 🔒 Encrypted Passwords using bcryptjs

---

## 🧰 Tech Stack

| Purpose        | Library / Framework           |
| -------------- | ----------------------------- |
| Server         | Node.js, Express.js           |
| Database       | MongoDB + Mongoose            |
| Authentication | JSON Web Token (JWT)          |
| Security       | bcryptjs, cookie-parser, cors |
| Email Service  | Nodemailer                    |
| Config         | dotenv                        |
| Dev Tool       | nodemon                       |

---

## ⚙️ Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sumitr995/Auth-Service-App.git
   cd auth-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**

   * Copy `.env.example` to `.env` and fill in your credentials.
     *(Your actual `.env` file is ignored by Git for security.)*

   Example:

   ```bash
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   CLIENT_URL=http://localhost:3000
   ```

4. **Run the backend server**

   ```bash
   npm run server
   ```

   or

   ```bash
   nodemon server.js
   ```

---

## 🧩 Folder Structure

```
auth-app/
│
├── controllers/     # Request logic
├── models/          # MongoDB schemas
├── routes/          # Express routes
├── middleware/      # JWT auth & error handlers
├── utils/           # Email and token helpers
├── .env.example     # Example environment file
├── server.js        # App entry point
└── package.json
```

---

## 🔄 Development Roadmap

| Phase             |     Status     | Description                     |
| ----------------- | :------------: | ------------------------------- |
| Backend API       |     ✅ Done     | Authentication logic completed  |
| Frontend UI       | 🧠 In Progress | React + Axios + JWT Integration |
| Role-Based Access |   🔜 Planned   | Admin/User access control       |
| OAuth Login       |   🔜 Planned   | Google & GitHub Authentication  |
| 2FA Security      |   🔜 Planned   | Two-Factor Authentication       |

---

## 📜 License

Licensed under the **MIT License**.
You can use, modify, or extend this project freely.

---

**Status:** 🚧 *Under Development (Frontend in Progress)*

**Stack:** MERN

**Author:** Sumit Rathod
