"use client";

import { useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 flex-1 outline-none bg-transparent"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
