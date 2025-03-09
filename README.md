# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
# Job Listing Platform

## Overview
This is a full-stack Job Listing Platform built using the MERN stack with Sequelize and PostgreSQL/MySQL. It allows employers to post job listings and job seekers to search and apply for jobs.

## Features
- **JWT Authentication & Role-Based Access Control**
- **CRUD Operations for Jobs**
- **Search, Sort, Filter, and Pagination**
- **Bookmark Jobs**
- **Employer Dashboard for Managing Jobs**
- **Applicant Dashboard for Tracking Applications**
- **Admin Panel (Optional) for User & Job Management**
- **UI/UX Enhancements with Toast Notifications**
- **Deployment Considerations for Backend & Frontend**

## Tech Stack
### Frontend
- React (Class Components)
- React Router
- Axios
- Normal CSS Styling (No UI Libraries)

### Backend
- Node.js, Express.js
- Sequelize ORM
- PostgreSQL/MySQL
- JWT & Bcrypt for Authentication

## Folder Structure
```
├── src
│   ├── components       # Reusable components
│   ├── pages            # Page-specific components
│   │   ├── dashboard    # Employer Dashboard
│   │   ├── signinpage   # Sign-in Page
│   │   ├── signuppage   # Sign-up Page
│   ├── services         # API calls and authentication logic
│   ├── App.js           # Main App component
│   ├── index.js         # React entry point
│
├── package.json
├── README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/job-listing-platform.git
   ```
2. Install dependencies:
   ```sh
   cd job-listing-platform
   npm install
   ```
3. Start the backend server:
   ```sh
   cd backend
   npm install
   npm start
   ```
4. Start the frontend:
   ```sh
   cd frontend
   npm start
   ```

## Contributing
Feel free to submit issues and pull requests to improve the platform!

## License
This project is licensed under the MIT License.

