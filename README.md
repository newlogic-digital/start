# @newlogic-digital/start

A modern Vue 3 starter template with TypeScript

## Features

- 🚀 [Vue 3](https://vuejs.org/) with [TypeScript](https://www.typescriptlang.org/)
- 🎯 [VueUse](https://vueuse.org/) collection of Vue Composition Utilities
- ⚡️ [Vite](https://vitejs.dev/) for fast development and building
- 🔄 [Pinia](https://pinia.vuejs.org/) for state management
- 🌐 [Vue Router](https://router.vuejs.org/) with auto-generated routes
- 🌍 [Vue i18n](https://vue-i18n.intlify.dev/) for internationalization
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 💨 [Winduum](https://winduum.dev/) utility-first CSS framework
- ✨ [Reka UI](https://reka-ui.com/) Vue 3 component library
- 🧪 [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) for code linting
- 📊 [Sentry](https://sentry.io/) integration for error tracking
- 🔌 [OpenAPI Fetch](https://openapi-ts.dev/openapi-fetch/) for type-safe API calls
- 🔄 Auto-generated types for OpenAPI schemas
- 🔒 HTTPS support for local development

## Requirements

- Node.js >=22.0.0
- npm >=11.0.0

## Installation

```bash
npm install
```

## Environment Configuration

Configure the project by editing the `.env` file:

```
VITE_BASE_URL=/           # Base URL for the application
VITE_SENTRY_DSN=          # Sentry DSN for error tracking
VITE_API_URL=             # API URL for OpenAPI schema generation
```

## Custom Element Configuration
To mount the app as a custom HTML element, enable `customElement: true` in your `vite.config.ts`. When using this setup, use the `index.ce.html` template instead of the default `index.html`.

```
VITE_NAME=                # Your app name, used for custom element in index.ce.html
```

## Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Run ESLint
npm run eslint

# Fix ESLint issues
npm run eslint-fix

# Run Stylelint
npm run stylelint

# Fix Stylelint issues
npm run stylelint-fix

# Type check
npm run tsc
```

## Project Structure

```
start/
├── public/               # Static assets
├── src/
│   ├── assets/           # Static assets 
│   ├── components/       # Vue components
│   ├── composables/      # Vue composables
│   ├── layouts/          # Vue layouts
│   ├── locales/          # i18n translation files
│   ├── middleware/       # Middleware for vue-router
│   ├── mutations/        # Mutations for @pinia/colada
│   ├── pages/            # Pages for vue-router via unplugin-vue-router
│   ├── queries/          # Queries for @pinia/colada
│   ├── stores/           # Pinia state stores
│   ├── styles/           # CSS styles
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── app.css           # Main CSS file
│   ├── app.ts            # Main application entry
│   ├── app.vue           # Root Vue component
│   └── index.html        # HTML template
├── .env                  # Environment variables
├── .env.local            # Environment variables (local)
├── .env.production       # Environment variables (production)
├── .stylelintrc          # Stylelint configuration
├── eslint.config.ts      # Eslint configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```