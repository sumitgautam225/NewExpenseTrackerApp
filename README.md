# TrackExpense

A full-stack expense tracking application to manage your income, expenses, and financial overview. Built with a Node.js/Express backend and a modern React (Vite) frontend.

## Features

- User authentication (signup, login, logout)
- Dashboard with financial summary
- Add, edit, and delete income and expenses
- Profile management
- Data filtering by date
- Responsive sidebar navigation
- Contact/Support page

## Project Structure

```
TrackExpense/
├── backend/
│   ├── controllers/         # Route controllers for API
│   ├── middleware/          # Auth and other middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   ├── utils/               # Utility functions
│   ├── config/              # Database config
│   ├── server.js            # Main server entry
│   └── package.json         # Backend dependencies
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Colors, dummy data, styles
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components (Dashboard, Income, Expense, Profile, Contact)
│   │   ├── utils/           # Frontend utility functions
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # React entry point
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite config
│   └── README.md            # Frontend-specific info
├── backend-overview.md      # Backend architecture notes
├── frontend-overview.md     # Frontend architecture notes
└── README.md                # Project overview (this file)
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup

1. `cd backend`
2. `npm install`
3. Configure MongoDB in `config/db.js`
4. `npm start` (runs on http://localhost:4000)

### Frontend Setup

1. `cd frontend`
2. `npm install`
3. `npm run dev` (runs on http://localhost:5173)

## Usage

- Register or log in to your account
- Add income and expenses
- View dashboard for financial summary
- Manage your profile
- Use the sidebar to navigate
- Visit the Support page for contact info

## License

MIT

---

For more details, see the backend-overview.md and frontend-overview.md files.
