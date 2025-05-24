# Night Breeze Inn Website

<p align="center">
  <a href="https://night-breeze-inn.github.io/">
    <img src="https://raw.githubusercontent.com/Night-Breeze-Inn/night-breeze-inn.github.io/main/public/images/Logo.png" alt="Night Breeze Inn Logo" width="100">
  </a>
</p>

<p align="center">
  <a href="https://github.com/Night-Breeze-Inn/night-breeze-inn.github.io/deployments/activity_log?environment=github-pages">
    <img src="https://img.shields.io/github/deployments/Night-Breeze-Inn/night-breeze-inn.github.io/github-pages?style=for-the-badge&logo=github&label=Build%20%26%20Deploy" alt="GitHub Pages Deployment Status">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier" alt="Code Style: Prettier">
  </a>
</p>

This is the official website for the Night Breeze Inn, a modern web application built with React, TypeScript, Vite, and Tailwind CSS. It provides a clean and responsive interface for users to learn about the inn and get in touch.

## ✨ Features

- **Responsive Design:** Adapts to various screen sizes using Tailwind CSS.
- **Modern Tech Stack:** Built with React, TypeScript, and Vite for a fast and efficient development experience.
- **Component-Based Architecture:** Organized into reusable React components.
- **Styling with Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Iconography:** Uses Font Awesome for clear and consistent icons.
- **Linting & Formatting:** Configured with ESLint and Prettier for code quality and consistency.

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Icons:** Font Awesome
- **Linting:** ESLint
- **Formatting:** Prettier

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (v8.x or later, usually comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
    git clone https://github.com/Night-Breeze-Inn/night-breeze-inn.github.io.git
    cd night-breeze-inn.github.io
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## 📜 Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`**
  Runs the app in development mode with HMR (Hot Module Replacement).
  Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

- **`npm run build`**
  Builds the app for production to the `dist` folder.
  It correctly bundles React in production mode and optimizes the build for the best performance. This script also runs TypeScript checks (`tsc -b`).

- **`npm run lint`**
  Lints the project files using ESLint to check for code quality and potential errors.

- **`npm run preview`**
  Serves the production build from the `dist` folder locally. This is useful for testing the production build before deployment.

- **`npm run predeploy`**
  This script is automatically run by npm before the `deploy` script. It executes `npm run build` to ensure the project is built before deployment.

- **`npm run deploy`**
  Deploys the built application from the `dist` folder to GitHub Pages using the `gh-pages` package.

## 📂 Project Structure

```md
night-breeze-inn.github.io/
├── .git/
├── .gitignore
├── .prettierignore
├── .prettierrc.yaml # Prettier configuration
├── eslint.config.js # ESLint configuration
├── index.html # Main HTML entry point
├── package-lock.json
├── package.json # Project dependencies and scripts
├── postcss.config.cjs # PostCSS configuration (for Tailwind)
├── README.md # This file
├── tailwind.config.cjs # Tailwind CSS configuration
├── tsconfig.app.json # TypeScript configuration for the app
├── tsconfig.json # Main TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Node.js specific files (e.g., vite.config)
├── vite.config.ts # Vite build tool configuration
├── node_modules/
├── public/
│ └── images/ # Static assets like logos
│ ├── Logo-dark.png
│ ├── logo-light.png
│ └── Logo.png
└── src/
├── App.css # Global styles for App component (if any)
├── App.tsx # Main application component
├── index.css # Global styles and Tailwind directives
├── main.tsx # Main entry point for React application
├── vite-env.d.ts # Vite environment type definitions
├── components/ # Reusable UI components (like header, footer, etc.)
└── pages/ # Page-level components
```

## 🔧 Configuration Files

- **`vite.config.ts`**: Configures Vite, the build tool. Includes plugins like `@vitejs/plugin-react-swc`.
- **`tailwind.config.cjs`**: Customizes Tailwind CSS, including fonts, colors, and plugins.
- **`postcss.config.cjs`**: Configures PostCSS, used by Tailwind CSS for processing styles.
- **`eslint.config.js`**: Defines ESLint rules for code linting and quality checks.
- **`.prettierrc.yaml`**: Specifies Prettier options for consistent code formatting.
- **`tsconfig.json` (and its variants)**: Manages TypeScript compiler options for the project.

## 🎨 Styling

The project uses Tailwind CSS for styling.

- Global styles and Tailwind directives are imported in `src/index.css`.
- Custom Tailwind theme (colors, fonts) is defined in `tailwind.config.cjs`.
- A custom `.active` class for navigation links is defined in `src/index.css`.
