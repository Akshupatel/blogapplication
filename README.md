# Simple Blog Application (MERN Stack)

This is a basic blog application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to view, add, edit, and delete blog posts. It also includes an admin panel for managing the content.

---

## Features

1. **Homepage**
   - Displays a list of blog posts with titles and short excerpts.
   - Includes a search functionality to filter posts by title or tags.

2. **Post Details Page**
   - View the full content of a selected blog post.

3. **Admin Panel**
   - Add new blog posts with a title, content, and tags.
   - Edit or delete existing blog posts.

4. **Form Validation**
   - Ensures required fields are filled when adding or editing blog posts.

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js and Express.js
- **Database:** MongoDB (using MongoDB Atlas for cloud storage)
- **Deployment:**  Vercel

---

## APIs

- `GET /api/posts`: Retrieve all blog posts.
- `GET /api/posts/:id`: Retrieve a single blog post by its ID.
- `POST /api/posts`: Add a new blog post.
- `PUT /api/posts/:id`: Edit a blog post by its ID.
- `DELETE /api/posts/:id`: Delete a blog post by its ID.

---

## Installation and Setup

### Prerequisites
1. Node.js installed on your system.
2. Git installed for cloning the repository.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
    `cd <repository-name>`
3. Set up the backend:
   ● Navigate to the backend folder
       `cd backend`
   ● Install dependencies:
       `npm install`
   ● Start the backend server
       `npm start`
4. Set up the frontend:
   ● Navigate to the frontend folder
       `cd ../frontend`
   ● Install dependencies
       `npm install`
   ● Start the development server
       `npm start`


