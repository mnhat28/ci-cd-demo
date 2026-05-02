# 🚀 CI/CD Node.js + Docker + Self-Hosted Runner

## 📌 Introduction

This project is a complete demo of a **CI/CD pipeline** using:

* Node.js (Express)
* Docker & Docker Compose
* GitHub Actions
* Self-hosted runner
* Docker Hub (image registry)
* Telegram (notification)

👉 Goal: Automatically build, deploy, and notify when code changes.

---

## 🏗️ System Architecture

```text
Developer pushes code → GitHub
        ↓
GitHub Actions (CI/CD)
        ↓
Build Docker Image
        ↓
Push to Docker Hub
        ↓
Self-hosted Runner (VPS)
        ↓
Pull image & run container
        ↓
Web runs at http://localhost:5000/ci-cd
        ↓
Send Telegram notification
```

---

## ⚙️ Technologies Used

* Node.js (Express)
* Docker
* Docker Compose
* GitHub Actions
* Self-hosted Runner

---

## 📂 Project Structure

```bash
.
├── server.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── makefile
├── .gitignore
└── .github/
    └── workflows/
        └── ci-cd.yml

```

---

## 🚀 Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Create `.env` file

```env
PORT=5000
```

### 3. Start the server

```bash
npm start
```

👉 Access:

```
http://localhost:5000/ci-cd
```

---

## 🐳 Run with Docker

### Build & run using Docker Compose

```bash
docker compose up -d --build
```

### Or using Makefile

```bash
make run-build
```

---

## 🔄 CI/CD Pipeline

The workflow consists of 3 main stages:

### 1. Build

* Create `.env` from GitHub Secrets
* Build Docker image
* Push to Docker Hub

### 2. Deploy

* Pull latest image
* Remove old container
* Run new container

### 3. Notification

* Send notification via Telegram

---

## 🔐 Required GitHub Secrets

Go to:

```
Settings → Secrets → Actions
```

Create the following variables:

| Name                | Description                     |
| ------------------- | ------------------------------- |
| DOCKER_HUB_USERNAME | Docker Hub username             |
| DOCKER_HUB_PASSWORD | Docker Hub password/token       |
| PROD_ENV            | `.env` content (e.g. PORT=5000) |
| TELEGRAM_TOKEN      | Telegram bot token              |
| TELEGRAM_TO         | Telegram chat ID                |

---

## 🖥️ Self-hosted Runner

The runner is installed on your VPS or server.

### Requirements:

* Docker installed
* Port 5000 open
* Runner is active

---

## 🌐 Endpoint

| URL    | Description     |
| ------ | --------------- |
| /ci-cd | CI/CD demo page |

---

## 📸 UI

The web page displays:

* 🚀 CI/CD Running
* Status: 200 OK
* Beautiful gradient UI

---

## ⚠️ Notes

* Do not commit `.env` file
* Use GitHub Secrets for sensitive data
* Docker container runs on self-hosted runner

---

## 🎯 Achievements

✔ Automated build & deployment
✔ Docker container deployment
✔ Complete CI/CD integration
✔ Real-time notifications

---

## 🔥 Future Improvements

* Deploy to Kubernetes (k3s)
* Add HTTPS (Nginx + SSL)
* Zero-downtime deployment
* Monitoring (Prometheus, Grafana)

---

## 👨‍💻 Author

Tran Minh Nhat 🤖

---

## ⭐ Note

This project is built for learning and demonstrating CI/CD concepts.
