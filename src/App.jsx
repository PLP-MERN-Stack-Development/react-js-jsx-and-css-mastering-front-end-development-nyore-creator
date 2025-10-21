import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import Posts from "./pages/Posts";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="/api" element={<Posts />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
