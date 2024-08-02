"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Search from "../components/Search";
import RepoList from "../components/RepoList";

export default function Home() {
  const [username, setUsername] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const userParam = searchParams.get("user");
    if (userParam) {
      setUsername(userParam);
    }
  }, [searchParams]);

  const handleSearch = (searchTerm) => {
    setUsername(searchTerm);
  };

  return (
    <div>
      <Search onSearch={handleSearch} initialValue={username} />
      {username && <RepoList username={username} />}
    </div>
  );
}
