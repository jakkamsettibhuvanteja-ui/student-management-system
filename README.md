# Student Management System

A full-stack web application for managing student records with complete CRUD functionality. The application allows users to add, view, update, and delete student information through a responsive React interface.

## Live Application

- **Frontend:** https://student-management-system-one-lilac.vercel.app/
- **Backend API:** https://student-management-system-8w6u.onrender.com/api/students

## Tech Stack

**Frontend**
- React.js
- Vite
- HTML, CSS, JavaScript

**Backend**
- Node.js
- Express.js
- Mongoose

**Database**
- MongoDB Atlas

**Deployment**
- Vercel – Frontend hosting
- Render – Backend hosting

## Features

- Add new student records
- View all student records
- Update existing student information
- Delete student records
- Store student information in MongoDB Atlas
- Responsive and modern user interface
- Cloud deployment with separate frontend and backend services

## Project Structure

```text
student-management-system/
│
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── services/
│   │   │   └── studentService.js
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
├── .gitignore
└── README.md
```

## Student Information

Each student record contains:

- Roll Number
- Name
- Branch
- Year
- Marks
- Email

## API Endpoints

Base URL: `/api/students`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Add a student |
| GET | `/` | Retrieve all students |
| GET | `/:id` | Retrieve a student by ID |
| PUT | `/:id` | Update a student |
| DELETE | `/:id` | Delete a student |

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/jakkamsettibhuvanteja-ui/student-management-system.git
cd student-management-system
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```bash
npm run dev
```

### 3. Set up the frontend

Open another terminal:

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

## Deployment Architecture

- The React frontend is hosted on Vercel.
- The Express.js backend is hosted on Render.
- MongoDB Atlas provides cloud database storage.
- The frontend communicates with the backend through REST API endpoints.

## Security

- Database credentials are stored in environment variables.
- Sensitive `.env` files are excluded from Git.
- The frontend communicates with the backend using HTTP requests.

## Project Objective

The objective of this project is to develop and deploy a full-stack Student Management System while understanding frontend development, REST API integration, database connectivity, CRUD operations, and cloud deployment.