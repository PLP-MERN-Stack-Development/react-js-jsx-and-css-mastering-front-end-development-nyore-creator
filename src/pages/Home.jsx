import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = data.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <input
        className="border w-full p-2 rounded mb-4"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.map((post) => (
        <Card key={post.id} title={post.title}>
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  );
}
