# Task Manager

A frontend-only task management app built with **React, TypeScript, and Vite**. It provides a dashboard for task progress and pages for viewing and managing tasks. Task data is persisted in the browser with `localStorage`.

> **Project status:** Learning project. Check the current repository for the exact feature set and installed dependencies. The sign-up screen is a UI/validation exercise and does not provide real authentication unless a backend or authentication provider has been added.

## Features

- Dashboard with task statistics.
- View and filter tasks by status.
- Create tasks with details such as title, description, due date, and priority.
- Mark tasks as completed and delete tasks, where implemented.
- Form validation using React Hook Form and Zod.
- Browser-local persistence using `localStorage`.
- Client-side navigation with React Router.

## Tech stack

- React
- TypeScript
- Vite
- React Router DOM
- React Hook Form
- Zod
- `@hookform/resolvers`
- CSS
- Browser `localStorage`

See `PROJECT_DOCUMENTATION.txt` for the architecture, limitations, setup instructions, and future roadmap. Verify the definitive package list in `package.json`.

## Getting started

### Requirements

- Node.js compatible with the version of Vite used by this project.
- npm.
- A modern web browser.

### 1. Get the code

Clone the repository if it is hosted on Git:

```bash
git clone <repository-url>
cd <project-folder>
```

Replace the placeholders with your repository URL and project directory. Alternatively, download and extract the project folder.

### 2. Install dependencies

Run in the directory containing `package.json`:

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open the local URL printed by Vite in the terminal (commonly `http://localhost:5173/`).

### 4. Build and preview

```bash
npm run build
npm run preview
```

Available commands are defined in `package.json`.

## Future improvements

- Refactor shared task state using React Context and `useReducer`.
- Extract reusable logic into custom hooks, including a `useLocalStorage` hook where appropriate.
- Add tests for reducers, validation, and core task flows.
- Migrate to Tailwind CSS and introduce shadcn/ui components gradually.
- Add TanStack Query when the application uses a backend/API and needs server-state caching and mutations.
- Add a backend and secure authentication if real user accounts and cross-device synchronisation are required.

These are planned improvements; they should not be considered implemented until they are added to the codebase.

## Documentation

- Full project notes: [`PROJECT_DOCUMENTATION.txt`](./PROJECT_DOCUMENTATION.txt)
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/docs/
- Vite: https://vite.dev/guide/
- React Router: https://reactrouter.com/
- React Hook Form: https://react-hook-form.com/
- Zod: https://zod.dev/
- TanStack Query: https://tanstack.com/query/latest
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/docs

## Notes

This project is currently described as a frontend-only learning project. 
