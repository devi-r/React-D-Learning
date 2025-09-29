# React Online Learning Dashboard

A React application for e-learning platform's student dashboard with real-time class management, assignments, tests, and course tracking.

## Demo

**Live Preview:** [https://react-online-learning-dashboard.onrender.com/](https://react-online-learning-dashboard.onrender.com/)

## Architecture

This application is also configured as a **remote microfrontend** setup using CRACO (Create React App Configuration Override) and includes **container queries** for responsive styling. The microfrontend architecture allows this dashboard to be consumed by other applications while maintaining its own development and deployment lifecycle.

## Features

- **Live & Upcoming Classes** - Real-time class status with countdown timers
- **Assignments**, **Tests**, **Courses** - Subject-based color coding
- **Skeleton Loading** - Smooth loading states to prevent layout shifts
- **Real-time Updates** - Live class status updates with timers

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Backend server running on port 3001 (or production server)

### Installation

1. Navigate to the project directory:

   ```bash
   cd <repo_name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Integration

The frontend automatically detects the environment and uses the appropriate backend URL:

- **Development:** `http://localhost:3001` (when running `npm start`)
- **Production:** `https://express-mock-server-rose.vercel.app` (when built for production)

- `GET /api/classes` - Fetch upcoming classes
- `GET /api/assignments` - Fetch assignments
- `GET /api/tests` - Fetch shared tests
- `GET /api/courses` - Fetch enrolled courses

## Author

- **[Devi R](https://www.linkedin.com/in/devi-r-06bb94a7)**
