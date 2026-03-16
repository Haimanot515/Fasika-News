# Fasika News

Fasika News is a full-stack news platform built to deliver modern, category-based news content with a clean user experience and scalable backend architecture. The project is designed to demonstrate practical full-stack development skills, including REST API design, database integration, authentication-ready structure, and responsive frontend implementation.

## Features
- Browse news articles by category
- View detailed article pages
- Clean and responsive user interface
- Backend API for managing news content
- MongoDB database integration
- Structured MVC-style backend organization
- Ready for future enhancements such as:
  - User authentication
  - Admin dashboard
  - Comments system
  - Search and filtering
  - Bookmarking articles

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS / Tailwind CSS (depending on your setup)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Development Tools
- Git & GitHub
- Postman
- VS Code

## Project Structure
Fasika-News/
│
├── client/                 # Frontend (React app)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main application pages
│   │   ├── services/       # API requests / Axios config
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/                 # Backend (Node.js / Express API)
│   ├── config/             # Database configuration
│   ├── controllers/        # Request handling logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API route definitions
│   ├── middleware/         # Custom middleware
│   ├── app.js / server.js  # Entry point
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json (optional root workspace file)
