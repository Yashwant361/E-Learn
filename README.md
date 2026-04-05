# E-Learning Backend (Node.js)

##  Project Overview

This is a backend system for an E-Learning platform built using **Node.js**, **Express**, and **MongoDB**.
It includes user authentication and email functionality with secure practices.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Nodemailer
* dotenv

---

##  Project Structure

```
server/
├── middleware/
│   └── sendMail.js
├── templates/
│   └── otpTemplate.js
├── .env
├── .gitignore
└── package.json
```

---

## Email System (Nodemailer)

We implemented a reusable email system using Nodemailer.

###  Features:

* Dynamic email templates
* OTP email support
* Clean separation of logic and design

### 🔹 sendMail Function

* Handles email sending logic
* Uses SMTP (Gmail)
* Accepts dynamic data

### 🔹 Template System

* Email HTML stored in separate files
* Example: `otpTemplate.js`
* Supports dynamic values like:

  * User name
  * OTP code

---

## Security Best Practices

###  Environment Variables

Sensitive data is stored in `.env`:

```
PORT=8085
MONGODB_URL=your_mongodb_url
ACTIVATION_SECRET=your_secret
GMAIL=your_email
PASSWORD=your_app_password
```

---

###  .gitignore Setup

```
node_modules/
.env
.env.*
```

 Prevents sensitive data from being pushed to GitHub

---

###  Credential Protection

* Gmail App Password used instead of real password
* MongoDB password updated and secured
* Special characters encoded in MongoDB URL

---

###  MongoDB Security

* Database user password rotated
* IP access restricted (not using 0.0.0.0/0)

---

##  OTP Email Template

* Built using **email-compatible HTML**
* Inline CSS used for better compatibility
* Table-based layout for email clients

---

##  Key Learnings

* Separation of concerns (logic vs template)
* Secure handling of environment variables
* Email client limitations (no flexbox, no external CSS)
* Real-world backend folder structure

---

## Next Steps

* OTP generation and storage in database
* OTP verification system
* User authentication (Signup/Login)
* JWT-based authentication
* Password hashing (bcrypt)

---

##  Author
**Yashwant Ray** 

---
© 2026 Yashwant Ray & RayCrop. All rights reserved.
---

---


