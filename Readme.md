# 🔐 Auth App — MERN Authentication System

> 🚧 **Project Status:** *UNDER ACTIVE DEVELOPMENT*
> 🧩 **Backend Completed | Frontend (React) In Progress**

A secure and scalable **Authentication System** built using the **MERN stack**, featuring registration, login, password reset, and email verification.
This repository currently contains the **completed backend**, while the **frontend** is actively being developed.

---



## 🔄 Development Roadmap

| Phase             |     Status     | Description                            |
| ----------------- | :------------: | -------------------------------------- |
| Backend API       |     ✅ Done     | Auth logic with JWT, email, and bcrypt |
| Frontend Setup    | ⚙️ In Progress | React + Axios + Router + Toastify      |
| Integration       |     🔜 Next    | Connect frontend with backend APIs     |
| Role-Based Access |   🔜 Planned   | Admin/User control                     |
| OAuth Login       |   🔜 Planned   | Google & GitHub authentication         |
| 2FA Security      |   🔜 Planned   | Two-Factor Authentication              |


---

## ⚡ Backend Features (Completed)

* 🧾 User Registration
* 🔑 Login & Logout
* 🛡️ JWT Authentication
* 📧 Email Verification (via Nodemailer)
* 🔁 Password Reset via Email
* 🔒 Encrypted Passwords (bcryptjs)

---

## 🎨 Frontend (In Progress)

* ⚙️ Built with **React.js**
* 📡 API Calls handled by **Axios**
* 🧭 Navigation via **React Router DOM**
* 🔔 Notifications with **React-Toastify**
* 🔐 Secure cookie-based JWT Auth Integration (in progress)

---

## 🧰 Tech Stack

| Layer                      | Libraries / Frameworks                            |
| :------------------------- | :------------------------------------------------ |
| **Backend**                | Node.js, Express.js, MongoDB, Mongoose            |
| **Auth & Security**        | JWT, bcryptjs, cookie-parser, cors                |
| **Email Service**          | Nodemailer                                        |
| **Configuration**          | dotenv                                            |
| **Dev Tools**              | nodemon                                           |
| **Frontend (In Progress)** | React.js, Axios, React Router DOM, React-Toastify |

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

   * Copy `.env.example` → `.env`
   * Add your private credentials
     *(Note: `.env` is ignored by Git for security reasons)*

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
├── controllers/     # Route logic & handling
├── models/          # Mongoose schemas
├── routes/          # Express API routes
├── middleware/      # Auth & error middleware
├── utils/           # Email, JWT helper functions
├── .env.example     # Example env file (safe)
├── server.js        # Main server entry point
└── package.json
```


## 📜 License

Licensed under the **MIT License** — you’re free to use, modify, or extend this project.

---

**Status:** 🚧 *Under Development (Frontend in Progress)*

**Stack:** MERN

**Author:** Sumit Rathod
