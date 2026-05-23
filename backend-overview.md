# TrackExpense Backend: Complete Folder & File Guide

This document explains every file and folder in the `backend` directory of TrackExpense, including how data flows, security, and the main logic for each part.

---

## Folder Structure

```
backend/
  package.json
  server.js
  config/
    db.js
  controllers/
    dashboardController.js
    expenseController.js
    incomeController.js
    userController.js
  middleware/
    auth.js
  models/
    expenseModel.js
    incomeModel.js
    userModel.js
  routes/
    dashboardRoute.js
    expenseRoute.js
    incomeRoute.js
    userRoute.js
  utils/
    dateFilter.js
```

---

## File & Folder Details

### package.json

- Declares all backend dependencies (Express, Mongoose, JWT, etc.).
- Defines scripts (e.g., `start` runs the server with nodemon).

### server.js

- Main entry point. Sets up Express, applies middleware (CORS, JSON parsing), connects to MongoDB, and mounts all API routes.
- Listens on a port (default 5000).
- Example: When you visit `/api/expense/get`, the request is routed to the expense controller.

### config/db.js

- Connects to MongoDB using Mongoose.
- Reads the connection URI from environment variables for security.
- Handles connection errors and logs status.

### controllers/

- **dashboardController.js**: Aggregates income and expense data for the dashboard (monthly totals, savings, category breakdowns, recent transactions).
- **expenseController.js**: Handles all expense logic:
  - Add, update, delete, and list expenses for the logged-in user.
  - Download expenses as Excel.
  - Calculate overviews (totals, averages, recent, by date range).
- **incomeController.js**: Handles all income logic:
  - Add, update, delete, and list incomes for the logged-in user.
  - Download incomes as Excel.
  - Calculate overviews (totals, averages, recent, by date range).
- **userController.js**: Handles user registration, login, profile update, and password change.
  - Passwords are hashed with bcrypt.
  - JWT tokens are issued for authentication.

### middleware/auth.js

- Protects routes by verifying JWT tokens in the `Authorization` header.
- If valid, attaches the user to the request; otherwise, blocks access.
- Ensures only authenticated users can access their data.

### models/

- **expenseModel.js**: Mongoose schema for expenses (description, amount, category, date, userId, type, timestamps).
- **incomeModel.js**: Mongoose schema for incomes (same fields as expenses, type is "income").
- **userModel.js**: Mongoose schema for users (name, email, hashed password).

### routes/

- **dashboardRoute.js**: `/api/dashboard` (GET): Returns dashboard overview for the logged-in user.
- **expenseRoute.js**: `/api/expense` endpoints:
  - `POST /add`: Add expense
  - `GET /get`: List all expenses
  - `PUT /update/:id`: Update expense
  - `DELETE /delete/:id`: Delete expense
  - `GET /downloadexcel`: Download all expenses as Excel
  - `GET /overview`: Get expense summary for a date range
- **incomeRoute.js**: `/api/income` endpoints (same as expense, but for incomes).
- **userRoute.js**: `/api/user` endpoints:
  - `POST /register`: Register new user
  - `POST /login`: Login
  - `GET /me`: Get current user info (protected)
  - `PUT /profile`: Update profile (protected)
  - `PUT /password`: Change password (protected)

### utils/dateFilter.js

- Provides a function to calculate date ranges (daily, weekly, monthly, yearly) for filtering expenses/incomes.

---

## Data Flow Example

1. **User logs in**: `/api/user/login` → userController authenticates, returns JWT.
2. **User adds expense**: `/api/expense/add` (with JWT) → expenseController validates and saves the expense for that user.
3. **User views dashboard**: `/api/dashboard` (with JWT) → dashboardController aggregates all data for that user.

---

## Security

- **Passwords**: Always hashed before storing (bcrypt).
- **Authentication**: JWT tokens required for all sensitive routes. Middleware checks token validity and user existence.
- **Data Isolation**: All queries filter by `userId` so users only see their own data.
- **Environment Variables**: Sensitive info (DB URI, JWT secret) is never hardcoded.

---

## Error Handling

- All controllers catch errors and return clear JSON error messages.
- Database connection errors are logged and stop the server from running.

---

## Extending the Backend

- Add new models/controllers for more features (e.g., budgets, notifications).
- Add more utility functions in `utils/` for analytics or reporting.
- Use environment variables for all secrets and configuration.

---

**This document covers only the backend folder. For frontend details, see a separate document.**
