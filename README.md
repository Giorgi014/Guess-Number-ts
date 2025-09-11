# Guess My Number Game

A web-based number guessing game built with React, TypeScript, Vite, and TailwindCSS.

## Game Principle

- The game randomly selects a secret number between 1 and 20.
- You start with a score of 20.
- Enter your guess and click **Check!**.
- If your guess is correct, you win and your score may become the new high score.
- If your guess is wrong, you lose one point and get a hint ("Too high!" or "Too low!").
- If your score reaches 0, you lose the game.
- Click **Again!** to restart and try again.

## How to Play

1. Enter a number between 1 and 20 in the input box.
2. Click **Check!** to submit your guess.
3. Read the message for hints and track your score.
4. Try to guess the correct number before your score reaches zero.
5. Click **Again!** to play another round.

## Tech Stack

- **React** (UI library)
- **TypeScript** (type safety)
- **Vite** (build tool)
- **TailwindCSS** (utility-first CSS framework)
- **React Router DOM** (routing)
- **React Icons** (icon library)
- **ESLint** (linting)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/guess-number-ts.git
   cd guess-number-ts
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running the Project

- **Start development server:**
  ```sh
  npm run dev
  ```

- **Build for production:**
  ```sh
  npm run build
  ```

- **Preview production build:**
  ```sh
  npm run preview
  ```

- **Lint the code:**
  ```sh
  npm run lint
  ```

## License

Font used: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) under the SIL Open Font License ([OFL.txt](src/assets/fonts/Press_Start_2P/OFL.txt)).

---

Enjoy playing and improving your guessing skills!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
