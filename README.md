# React Post-Login Dashboard

A dynamic React application for multi-product platform dashboard with real-time data, customizable themes, and product type switching capabilities.

## Demo

**Live Preview:** [https://react-post-login-dashboard.onrender.com/](https://react-post-login-dashboard.onrender.com/)

## Architecture

This application is configured as a **remote microfrontend** setup using CRACO (Create React App Configuration Override) and includes **container queries** for responsive styling. The microfrontend architecture allows this dashboard to be consumed by other applications while maintaining its own development and deployment lifecycle.

## Features

### Core Dashboard Features

- **Dynamic Sections** - Section A, Section B, Section C, Section D
- **Real-time Timers** - Live countdown timers for upcoming events
- **Skeleton Loading** - Smooth loading states to prevent layout shifts

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Backend server running on port 4000 (or production server)

### Installation

1. Navigate to the project directory:

   ```bash
   cd apps/react-post-login-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## API Integration

The frontend automatically detects the environment and uses the appropriate backend URL:

- **Development:** `http://localhost:4000` (when running `npm start`)
- **Production:** `https://express-mock-server-rose.vercel.app` (when built for production)

### API Endpoints

#### Configuration

- `GET /api/post-login-dashboard/config` - Get dashboard configuration
  - Query params: `product_type` (optional)

#### Section Data APIs

- `GET /api/post-login-dashboard/section-a` - Get section A data
- `GET /api/post-login-dashboard/section-b` - Get section B data
- `GET /api/post-login-dashboard/section-c` - Get section C data
- `GET /api/post-login-dashboard/section-d` - Get section D data

## Author

- **[Devi R](https://www.linkedin.com/in/devi-r-06bb94a7)**
