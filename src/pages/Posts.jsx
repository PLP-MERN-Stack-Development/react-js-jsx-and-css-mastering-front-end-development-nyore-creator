import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      />
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.slice(0, 20).map(p => (
          <Card key={p.id} title={p.title}>
            <p>{p.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
