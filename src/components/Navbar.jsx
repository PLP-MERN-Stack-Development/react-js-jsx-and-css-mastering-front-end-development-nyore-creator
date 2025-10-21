import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 px-6 py-3 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">My React App</h1>
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          Home
        </Link>
        <Link to="/tasks" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          Tasks
        </Link>
        <Link to="/posts" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
          Posts
        </Link>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
