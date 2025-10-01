```markdown
# Void - Real-Time Chat Application

A full-stack real-time messaging application built with the MERN stack.

## Features
- Real-time messaging with Socket.io
- JWT authentication with bcrypt password hashing
- One-on-one and group chats
- User search functionality
- Message notifications
- Profile management
- MongoDB schema with proper indexing

## Tech Stack
- **Frontend:** React.js, Chakra UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.io
- **Authentication:** JWT, bcrypt

## Setup

### Prerequisites
- Node.js installed
- MongoDB running locally

### Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
cd frontend && npm install
```

3. Create `.env` file in root directory:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=yoursecretkey
NODE_ENV=development
```

4. Run the application:
```bash
# Start backend
npm run server

# Start frontend (open new terminal)
cd frontend
npm start
```

The application will run on `http://localhost:3000`

## License
MIT
```
