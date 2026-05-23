# TrackExpense Frontend: Complete Folder & File Guide

This document explains every file and folder in the `frontend` directory of TrackExpense, including the main logic, data flow, and component responsibilities.

---

## Folder Structure

```
frontend/
  package.json
  vite.config.js
  eslint.config.js
  index.html
  public/
  src/
    App.jsx
    main.jsx
    index.css
    assets/
      color.jsx
      dummy.js
      dummyStyles.js
    components/
      Add.jsx
      FinancialCard.jsx
      GaugeCard.jsx
      Helpers.jsx
      Layout.jsx
      Login.jsx
      Navbar.jsx
      Sidebar.jsx
      Signup.jsx
      TimeFrame.jsx
      TransactionItem.jsx
    pages/
      Dashboard.jsx
      Expense.jsx
      Income.jsx
      Profile.jsx
    utils/
      exportUtils.js
```

---

## File & Folder Details

### package.json

- Declares all frontend dependencies (React, Vite, etc.).
- Defines scripts (e.g., `dev` for development server).

### vite.config.js

- Vite configuration for fast development and optimized builds.

### eslint.config.js

- Linting rules for code quality and consistency.

### index.html

- The main HTML file loaded by Vite. Contains the root `<div id="root">` for React to mount.

### public/

- Static assets (images, icons, etc.) served as-is.

### src/

- **App.jsx**: Main React component. Sets up routes, layout, and global providers.
- **main.jsx**: Entry point. Renders `<App />` into the DOM.
- **index.css**: Global styles for the app.

#### src/assets/

- **color.jsx**: Color palette and theme definitions (JS/JSX export).
- **dummy.js**: Example/mock data for development/testing.
- **dummyStyles.js**: Example styles for mock/demo components.

#### src/components/

- **Add.jsx**: Form for adding new expenses or incomes. Handles input, validation, and submit logic.
- **FinancialCard.jsx**: Displays financial summary cards (e.g., total income, total expense).
- **GaugeCard.jsx**: Visual gauge for savings rate or budget usage.
- **Helpers.jsx**: Utility React components (e.g., formatting helpers, reusable UI bits).
- **Layout.jsx**: Main layout wrapper (sidebar, navbar, content area).
- **Login.jsx**: Login form. Handles authentication and error display.
- **Navbar.jsx**: Top navigation bar (links, user info, logout).
- **Sidebar.jsx**: Side navigation menu (links to Dashboard, Expense, Income, Profile).
- **Signup.jsx**: Registration form. Handles user creation and validation.
- **TimeFrame.jsx**: Selector for date range (daily, weekly, monthly, yearly).
- **TransactionItem.jsx**: Displays a single expense or income entry.

#### src/pages/

- **Dashboard.jsx**: Main dashboard. Fetches and displays overview data (totals, charts, recent transactions).
- **Expense.jsx**: Expense management page. Lists, adds, edits, deletes expenses.
- **Income.jsx**: Income management page. Lists, adds, edits, deletes incomes.
- **Profile.jsx**: User profile page. Allows updating user info and password.

#### src/utils/

- **exportUtils.js**: Utility functions for exporting data (e.g., to Excel or CSV).

---

## Data Flow Example

1. **User logs in**: Login.jsx sends credentials to backend, receives JWT, stores it (e.g., in localStorage).
2. **User adds expense**: Add.jsx form submits to backend with JWT. On success, Expense.jsx updates the list.
3. **Dashboard loads**: Dashboard.jsx fetches overview data from backend using JWT, displays charts and summaries.

---

## Component Communication

- **Props**: Data flows from parent to child via props (e.g., Dashboard.jsx passes summary data to FinancialCard.jsx).
- **State**: Each page/component manages its own state (e.g., form fields, loading, errors).
- **API Calls**: Components use fetch/axios to communicate with backend endpoints. JWT is sent in headers for protected routes.

---

## Extending the Frontend

- Add new components in `src/components/` for reusable UI.
- Add new pages in `src/pages/` for new features.
- Use `src/utils/` for shared logic (e.g., formatting, exporting).
- Update `color.jsx` for theming.

---

**This document covers only the frontend folder. For backend details, see the backend-overview.md file.**
