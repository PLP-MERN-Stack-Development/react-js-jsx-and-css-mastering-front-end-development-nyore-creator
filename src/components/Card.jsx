export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
