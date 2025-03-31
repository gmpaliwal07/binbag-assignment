# BinBag Backend Assignment

This repository contains the backend API for the BinBag assignment, built with Express.js and MongoDB.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on port 27017
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/binbag-assignment.git
cd binbag-assignment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory with the following configurations:

```
PORT=8000
MONGO_URI=mongodb://localhost:27017
CORS_ORIGIN=http://localhost:5173
ACCESS_TOKEN_SECRET=17e954e215165e7b383b757e9725faddd980783fa2439c7d4af65ce62dfe1a724567uhnsdvxsg
REFRESH_TOKEN_SECRET=0d0c6ec437fe45a43f0aea55e933567f7e008cc1197a60483cfe5d1f336e955d43567gyxbhsxjxs
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=7d
```

> **Note:** For a production environment, replace the token secrets with your own secure values.

### 4. Run the development server
```bash
npm run dev
```

The server will start on http://localhost:8000

## API Documentation

A complete Postman collection documenting all API endpoints is available at:
[BinBag API Documentation](https://documenter.getpostman.com/view/31798108/2sB2cRC4Zu)

## Available Endpoints

### User Management
- **POST /api/v1/users/register** - Register a new user
- **POST /api/v1/users/login** - User login
- **POST /api/v1/users/logout** - User logout (protected)
- **POST /api/v1/users/refresh-token** - Refresh access token
- **POST /api/v1/users/change-password** - Change user password (protected)
- **GET /api/v1/users/current-user** - Get current user details (protected)
- **PATCH /api/v1/users/update-account** - Update user account details (protected)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication:
- Protected routes require a valid access token
- Send tokens in the Authorization header as: `Authorization: Bearer {token}`
- Access tokens expire after 1 day
- Refresh tokens expire after 7 days

## Project Structure

```
binbag-assignment/
├── controllers/
│   └── user.controller.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
├── constants.js
├── app.js
├── server.js
├── .env
└── package.json
```

## Error Handling

The API uses a custom ApiError class for standardized error responses:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 409: Conflict
- 500: Internal Server Error

## License

[MIT](LICENSE)
