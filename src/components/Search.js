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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
}
