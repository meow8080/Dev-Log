export default function PostCard({ post, onDelete }) {
    return (
        <div className="border border-zinc-800 bg-zinc-900 rounded-xl p-5 space-y-3
                 hover:border-zinc-700 transition">
            <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <span
                    className={`text-xs px-2 py-1 rounded ${post.category === "Tech"
                            ? "bg-blue-600/20 text-blue-400"
                            : post.category === "Life"
                                ? "bg-green-600/20 text-green-400"
                                : post.category === "Projects"
                                    ? "bg-purple-600/20 text-purple-400"
                                    : post.category === "College"
                                        ? "bg-yellow-600/20 text-yellow-400"
                                        : post.category === "Thoughts"
                                            ? "bg-pink-600/20 text-pink-400"
                                            : "bg-zinc-700 text-zinc-300"
                        }`}
                >
                    {post.category}
                </span>
            </div>

            <p className="text-zinc-300">{post.body}</p>

            <div className="flex justify-between text-xs text-zinc-400 pt-2">
                <span>
                    {new Date(post.createdAt).toLocaleString()}
                </span>
                <button
                    onClick={() => onDelete(post._id)}
                    className="text-red-400 hover:underline"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}