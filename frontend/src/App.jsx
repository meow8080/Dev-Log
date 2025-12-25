import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Write from "./pages/Write";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900 text-zinc-100">
        <Navbar />

        <main className="flex justify-center px-4 py-10">
          <div className="w-full max-w-xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/write" element={<Write />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}