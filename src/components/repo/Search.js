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
    // router.push(`/?user=${searchTerm}`);
  };

  return (
    <div className="w-screen text-center mt-16">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-[40%] md:w-[25%] text-black h-12 rounded-xl m-3 px-4 border-0 outline outline-2 outline-[#A465D7] outline-offset-4 focus:outline-offset-8 duration-150 "
        />
        <button
          type="submit"
          className="w-[20%] md:w-[10%] h-12 border-2 border-white rounded-xl"
        >
          <p className="text-base">Search</p>
        </button>
      </form>
    </div>
  );
}
