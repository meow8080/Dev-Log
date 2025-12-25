import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation();

    const link = (active) =>
        `px-4 py-2 rounded-full text-sm ${active
            ? "bg-zinc-800 text-white"
            : "text-zinc-400 hover:text-white"
        }`;

    return (
        <nav className="flex justify-center py-6 border-b border-zinc-800">
            <div className="flex gap-2 bg-zinc-900 border border-zinc-800 rounded-full p-1 shadow-sm">
                <Link to="/" className={link(pathname === "/")}>
                    Home
                </Link>
                <Link to="/write" className={link(pathname === "/write")}>
                    Write
                </Link>
            </div>
        </nav>
    );
}