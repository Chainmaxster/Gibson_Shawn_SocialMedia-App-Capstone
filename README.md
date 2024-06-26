# Personal Media Web Application
Created a full-stack personal media web application built with MongoDB, Express, React, and Node.js (MERN stack).

## Features

- User authentication and authorization
- CRUD operations for posts
- User profile management
- Secure password storage with bcrypt
- File uploads for user pictures and post images
- JWT token-based authentication

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add your MongoDB URL and JWT secret:
    ```
    MONGO_URL=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

1. Register a new user account.
2. Login with the registered user credentials.
3. Create, view, and like posts.
4. View user profiles and manage friends.

## File Structure

### Backend

