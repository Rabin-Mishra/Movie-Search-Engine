
# 🎬 Movie Search Engine

A sleek, web-based Movie Search Engine built with React and Vite. This application fetches data from the [TMDB API](https://www.themoviedb.org/) to help users search for and explore movies seamlessly. It's a single-shot project leveraging React fundamentals and modern web development tools.

---

## 🚀 Features

- **Dynamic Search:** Fetch and display movies from TMDB in real-time.
- **Responsive Design:** Works seamlessly across all device sizes.
- **React Essentials:**
  - **JSX** for declarative UI creation.
  - **Components** for modular and reusable design.
  - **Conditional Rendering** to show/hide elements dynamically.
  - **`.map()`** for rendering lists of data.
  - **State Management** with `useState`.
  - **Context API** for sharing global states across components.
  - **Routing** using `react-router-dom` for seamless navigation.
  - **useEffect** to handle side effects, such as API calls.
- **Performance:** Built with **Vite**, a fast build tool for modern web projects.
- **Code Quality:** Linted with **ESLint** for cleaner and error-free code.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React `^18.3.1`
- **Build Tool:** Vite `^6.0.5`
- **Routing:** React Router Dom `^7.1.1`
- **Linting:** ESLint with React-specific plugins.

---

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or later)
- **npm** (comes bundled with Node.js)

---

## 📂 Project Structure

```plaintext
src/
├── components/       # Reusable React components
├── pages/            # Individual page components for routing
├── context/          # Global state management
├── assets/           # Images and static assets
├── App.jsx           # Main app component
├── index.jsx         # Entry point
```

---

## ⚙️ Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Rabin-Mishra/Movie-Search-Engine.git
   cd frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up API Key:**
   - Create a `.env` file in the root directory.
   - Add your TMDB API key:
     ```env
     VITE_API_KEY=your_api_key
     ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   - Open your browser and navigate to the provided URL (usually `http://localhost:5173`).

5. **Build for Production:**
   ```bash
   npm run build
   ```
   - The production-ready files will be available in the `dist` directory.

6. **Preview the Production Build:**
   ```bash
   npm run preview
   ```

7. **Run Linter:**
   ```bash
   npm run lint
   ```

---

## 🧪 Testing the Application

1. After starting the development server (`npm run dev`), explore these features:
   - Search movies using the input bar.
   - Click on movie titles to view detailed information.
   - Navigate between pages via routing.

---

## 🤝 Contributing

We welcome contributions! Here's how you can contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

## 🌟 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the API.
- React and Vite for enabling rapid development.
- Community contributors for helping improve this project.

---

If you'd like to see additional enhancements or find any bugs, feel free to open an issue. Let’s make this project even better together! 😊

--- 
