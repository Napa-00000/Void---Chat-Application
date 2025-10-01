# Void - Real-Time Chat Application

A full-stack real-time messaging application built with the MERN stack and Socket.io.

## Features

- Real-time one-on-one and group messaging
- Secure JWT authentication with bcrypt password hashing
- User search functionality
- Instant message notifications
- Profile management
- MongoDB schema with proper indexing

## Tech Stack

**Frontend:** React.js, Chakra UI  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Real-time Communication:** Socket.io  
**Authentication:** JWT, bcrypt

## Installation

### Prerequisites
- Node.js installed
- MongoDB running locally or cloud instance

### Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/void-chat.git
cd void-chat
```

2. Install dependencies
```bash
npm install
cd frontend && npm install
```

3. Create `.env` file in root directory
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=yoursecretkey
NODE_ENV=development
```

4. Run the application
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
cd frontend
npm start
```

Application runs on `http://localhost:3000`

## License
MIT
