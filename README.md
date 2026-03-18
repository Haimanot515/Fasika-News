<h1 align="center">Fasika News</h1>

<h3 align="center">
  A full-stack news platform delivering modern, category-based news content with a clean UI and structured backend. This project also demonstrates Git & GitHub workflows including PRs, merging, squashing, rebasing, and stashing.
</h3>

<img src="https://res.cloudinary.com/dq3jkpys8/image/upload/v1770186676/projects/news_screenshot.png" width="100%" style="border-radius:10px;" />

<br>

<p align="center">
  <a href="https://your-live-demo-link.com" target="_blank">
    <img src="https://img.shields.io/badge/_Live_Demo-View_Project-2ea44f?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://github.com/Haimanot515/Fasika-News" target="_blank">
    <img src="https://img.shields.io/badge/_GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
  </a>
</p>

---

## Project Overview

**Fasika News** is a modern full-stack news platform that allows users to browse news articles by category, view detailed articles, and interact with a clean, responsive interface. This project is also a **Princeton Tech Solution learning project** to demonstrate advanced **Git & GitHub workflows** such as pull requests, branch merging, squashing commits, rebasing, and stashing. 

The frontend is built with **React**, and the backend uses **Node.js, Express, and MongoDB**, following a structured MVC approach. The project highlights my full-stack development skills, responsive design capabilities, and understanding of professional version control practices in collaborative environments.

---

## Features

- Browse news articles by category  
- View detailed article pages  
- Clean and responsive user interface  
- Backend API for managing news content  
- MongoDB database integration  
- Structured MVC-style backend organization  
- Ready for future enhancements:
  - User authentication  
  - Admin dashboard  
  - Comments system  
  - Search and filtering  
  - Bookmarking articles  
- Demonstrates Git & GitHub workflows (PRs, merging, rebasing, stashing, squashing)

---

## Tech Stack

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

### Backend
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

### Development Tools
<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
  <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" />
</p>

---

## Project Structure

```bash
Fasika-News/
│
├── client/                # Frontend (React app)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main application pages
│   │   ├── services/      # API requests / Axios config
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                # Backend (Node.js / Express)
│   ├── config/            # Database configuration
│   ├── controllers/       # Request handling logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── middleware/        # Custom middleware
│   ├── app.js / server.js  # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
