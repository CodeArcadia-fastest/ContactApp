# 🧪 Contact App (Mini Project)

This is a very simple full-stack contact book built with **Django (backend)** and **React (frontend)**.  
The backend is deployed on **Render**, and the frontend on **Netlify**.

> ⚠️ This project is NOT secure and NOT meant for production. It is for **learning/demo purposes only**.

---

## 🌐 Live Demo

- Backend: https://contactapp-3zax.onrender.com
- Frontend: [Netlify URL here]

---

## 🚀 Tech Stack

- **Backend**: Django + Django REST Framework + PostgreSQL
- **Frontend**: React (JavaScript) + Axios
- **Hosting**: Render (backend) + Netlify (frontend)

---

## 📦 Features

- View all contacts
- Add new contact
- Simple JSON API
- Basic form with Axios POST/GET

---

## ⚠️ Warnings

This project:

- Does **not** use environment variables (`.env`)
- Has **hardcoded API URLs and settings**
- Is **not protected** against security threats (e.g., CSRF, XSS, authentication, rate limits)
- Is **not recommended** for storing or handling real data

Use at your own risk. This project is strictly for **educational/demo** use only.

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and share it, but **do NOT use it in production without improving its security**.

---

## 🛠 Setup (Optional)

If you want to run it locally:

```bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py runserver

# Frontend
cd frontend
npm install
npm start
