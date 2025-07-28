# MERN Full-Stack Booking App with Admin Panel

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT">
</p>

This is a comprehensive full-stack hotel booking platform built with the MERN stack. The project is architected as a monorepo containing three separate applications:

1.  **Backend API (`api`)**: A robust Node.js and Express server that powers the entire platform.
2.  **User Client (`client`)**: A user-facing React application for searching, viewing, and booking hotels.
3.  **Admin Panel (`admin`)**: A dedicated React application for administrators to manage users, hotels, and bookings.

The application ensures security through a JWT-based authentication system and provides a rich set of features for users, hotel owners, and administrators.

## Key Features

### User-Facing App (`client`)
* **Complete User Authentication**: Secure registration and login with password hashing and JWT sessions.
* **Advanced Hotel Search**: Search for hotels by destination, dates, and number of guests.
* **Detailed Hotel & Room Views**: Browse hotels, view amenities, and see available rooms with pricing.
* **Seamless Booking System**: Users can select rooms and book them for specific dates, with real-time availability checks.
* **My Bookings Page**: Authenticated users have a personal dashboard to view their reservation history.
* **Property Management**: Allows users to register their own properties, including image uploads, and manage them via their account page.

### Admin Panel (`admin`)
* **Centralized Dashboard**: A dedicated interface for administrators to oversee the platform.
* **User Management**: Ability to view, manage, and potentially suspend user accounts.
* **Hotel Management**: Admins can oversee all hotel listings, verify new submissions, and edit or remove properties.
* **Booking Management**: View and manage all bookings made across the platform.

## Tech Stack

* **Backend (`api`)**:
    * [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)
    * Authentication: [JWT](https://jwt.io/), [Bcrypt.js](https://www.npmjs.com/package/bcrypt), [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
    * File Handling: [Multer](https://www.npmjs.com/package/multer)

* **Frontend (`client` & `admin`)**:
    * [React.js](https://reactjs.org/) (Client bootstrapped with Vite, Admin with Create React App)
    * Routing: [React Router](https://reactrouter.com/)
    * Styling: [Tailwind CSS](https://tailwindcss.com/)
    * HTTP Client: [Axios](https://axios-http.com/)

## Folder Structure

The repository is a monorepo containing three top-level directories for each part of the application.
```text
├── admin/            # Admin Panel Frontend (React)
│   ├── public/
│   ├── src/
│   └── package.json
│
├── api/              # Backend Server (Node.js, Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
└── client/           # User-Facing Frontend (React)
├── public/
├── src/
└── package.json
```
## Getting Started

To run this project locally, you will need to set up and run all three applications concurrently.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) installed.
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running, or a MongoDB Atlas account.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/AwantikaTiwari13/Booking-App.git](https://github.com/AwantikaTiwari13/Booking-App.git)
    cd Booking-App
    ```

2.  **Set up the Backend (`api`):**
    (Open a terminal in the project root)
    ```sh
    cd api
    npm install
    ```
    Create a `.env` file in the `/api` directory and add your environment variables:
    ```env
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    ```
    Start the backend server:
    ```sh
    npm start
    ```
    The API will now be running on `http://localhost:4000`.

3.  **Set up the User Client (`client`):**
    (Open a **new terminal** in the project root)
    ```sh
    cd client
    npm install
    ```
    Start the client development server:
    ```sh
    npm run dev
    ```
    The user-facing app will be running, typically on `http://localhost:5173`.

4.  **Set up the Admin Panel (`admin`):**
    (Open a **third terminal** in the project root)
    ```sh
    cd admin
    npm install
    ```
    Start the admin panel development server:
    ```sh
    npm start
    ```
    The admin dashboard will be running on a different port, typically `http://localhost:3000`.

## 👤 About Me

This project was developed by Awantika Tiwari. Connect with me:

* **GitHub**: [AwantikaTiwari13](https://github.com/AwantikaTiwari13)
* **LinkedIn**: [Awantika Tiwari](https://www.linkedin.com/in/awantika-tiwari-aa6b97263/)
