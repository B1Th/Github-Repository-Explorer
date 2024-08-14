"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Search({ onSearch, initialValue = "" }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const router = useRouter();

  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    router.push(`/?user=${searchTerm}`);
  };

  return (
    <div className="w-screen text-center mt-16">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-[20%] text-black h-10 rounded m-3"
        />
        <button
          type="submit"
          className="w-[10%] h-10 border-2 border-white rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
}
