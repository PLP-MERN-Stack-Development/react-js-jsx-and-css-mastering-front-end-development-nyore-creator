export default function Button({ variant = "primary", children, ...props }) {
  const base = "px-4 py-2 rounded text-white font-medium transition";
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button {...props} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
