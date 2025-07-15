# URL Shortener App

A simple, modern URL shortener built with React and Vite. Create short links with optional custom codes and expiry, track visits, and view analytics—all in a beautiful Material UI interface. All data is stored in-memory (no backend required).

## Features

- **Shorten URLs:** Instantly generate a short URL for any long link.
- **Custom Shortcodes:** Optionally specify your own short code (4-12 alphanumeric characters).
- **Expiry:** Set a validity period (in minutes) for each short URL (defaults to 30 minutes).
- **Redirection:** Visiting a short URL redirects to the original link (if not expired).
- **Analytics:** View all your created URLs, their visit counts, creation/expiry times, and status (active/expired).
- **Copy to Clipboard:** Easily copy short URLs with one click.
- **Material UI:** Clean, responsive interface using MUI components.

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation

```bash
cd Solution
npm install
```

### Running the App (Development)

```bash
npm run dev
```

Open your browser to the local address shown in the terminal (usually http://localhost:5173).

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

- `src/`
  - `components/` – UI components (CreateShortURL, Analytics, RedirectHandler, URLCard)
  - `context/URLContext.jsx` – React context for URL state, creation, redirection, and analytics
  - `middleware/logger.js` – Simple event logger (logs to localStorage)
  - `utils/` – Utility functions (short code generation, validation, time helpers)
  - `App.jsx` – Main app with routing
  - `main.jsx` – Entry point
- `public/` – Static assets

## Usage

1. **Create a Short URL:**
   - Enter a long URL, optionally set a custom code and expiry.
   - Click "Shorten URL" to generate a short link.
2. **Copy & Share:**
   - Use the copy button to copy your new short URL.
3. **Redirection:**
   - Visiting the short URL will redirect to the original (if not expired).
4. **Analytics:**
   - Click the "Analytics" tab to view all your short URLs, their status, and visit counts.

## Limitations
- All data is stored in-memory (lost on page refresh).
- No backend or persistent storage.
- For demo/learning purposes only.

## Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/)

## License

This project is open source and available under the MIT License.
