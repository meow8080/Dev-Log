const API = "http://localhost:5001/posts";

export const fetchPosts = () =>
    fetch(API).then((res) => res.json());

export const createPost = (data) =>
    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

export const deletePost = (id) =>
    fetch(`${API}/${id}`, { method: "DELETE" });