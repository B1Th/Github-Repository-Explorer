import React, { useState } from "react";
import Search from "./components/Search";
import RepoList from "./components/RepoList";
import useGithubApi from "./hooks/useGithubApi";

function App() {
  const [username, setUsername] = useState("");
  const { repos, loading, error } = useGithubApi(username);

  const handleSearch = (searchTerm) => {
    setUsername(searchTerm);
  };

  return (
    <div className="App">
      <h1>GitHub Repository Explorer</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {repos && <RepoList repos={repos} />}
    </div>
  );
}

export default App;
