import { useEffect, useState } from "react";
import { fetchPosts, deletePost } from "../api/posts";
import PostCard from "../components/PostCard";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        fetchPosts().then(setPosts);
    }, []);

    const CATEGORIES = [
        "All",
        "Tech",
        "Life",
        "Projects",
        "College",
        "Thoughts",
        "Others",
    ];

    const handleDelete = async (id) => {
        await deletePost(id);
        setPosts((prev) => prev.filter((p) => p._id !== id));
    };

    const filteredPosts =
        filter === "All"
            ? posts
            : posts.filter((p) => p.category === filter);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center">
                DevLog
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-3 py-1 rounded-full text-sm border transition ${filter === cat
                            ? "bg-zinc-800 border-zinc-700 text-white"
                            : "border-zinc-800 text-zinc-400 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {filteredPosts.length === 0 ? (
                <p className="text-center text-zinc-400">
                    No posts in this category.                </p>
            ) : (
                filteredPosts.map((p) => (<PostCard
                    key={p._id}
                    post={p}
                    onDelete={handleDelete}
                />
                ))
            )}
        </div>
    );
}