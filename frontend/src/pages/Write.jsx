import { useState } from "react";
import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

export default function Write() {
    const [form, setForm] = useState({
        title: "",
        body: "",
        category: "Tech",
    });

    const nav = useNavigate();

    const CATEGORIES = [
        "Tech",
        "Life",
        "Projects",
        "College",
        "Thoughts",
        "Others",
    ];

    const submit = async () => {
        if (!form.title || !form.body) return;
        await createPost(form);
        nav("/");
    };

    return (
        <div className="border border-zinc-800 bg-zinc-900 rounded-xl p-6 space-y-4">
            <h1 className="text-xl font-semibold text-center">
                Write a post
            </h1>

            <input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                }
                className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
            />

            <textarea
                placeholder="Body"
                rows={5}
                value={form.body}
                onChange={(e) =>
                    setForm({ ...form, body: e.target.value })
                }
                className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
            />

            <select
                value={form.category}
                onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                }
                className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
            >
                {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                ))}
            </select>

            <div className="flex justify-center">
                <button
                    onClick={submit}
                    className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition"
                >
                    Publish
                </button>
            </div>
        </div>
    );
}