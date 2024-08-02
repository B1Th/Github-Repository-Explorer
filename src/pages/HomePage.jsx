import React, { useState } from "react";
import Search from "../components/Search";
import RepoList from "../components/RepoList";

function HomePage() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <Search onSearch={setUsername} />
      {username && <RepoList username={username} />}
    </div>
  );
}

export default HomePage;
