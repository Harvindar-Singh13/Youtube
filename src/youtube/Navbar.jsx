import { useState } from "react";

function Navbar({ onSearch }) {

  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center justify-between px-6 py-4  bg-white">

      <h1 className="text-2xl font-bold text-red-600">
        YouTube
      </h1>

      <div className="flex w-full max-w-xl">

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-full border-2 border-black text-black"
        />

        <button
          onClick={() => onSearch(search)}
          className="border px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700"
        >
          Search
        </button>

      </div>
    </nav>
  );
}

export default Navbar;