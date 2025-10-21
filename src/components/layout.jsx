import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
