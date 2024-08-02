import React from "react";
import { Link } from "react-router-dom";
import useGithubApi from "../hooks/useGithubApi";

function RepoList({ username }) {
  const {
    data: repos,
    loading,
    error,
    hasMore,
    loadMore,
  } = useGithubApi(`https://api.github.com/users/${username}/repos`, []);

  if (loading && !repos.length) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${username}/${repo.name}`}>
              <h3>{repo.name}</h3>
            </Link>
            <p>{repo.description}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Language: {repo.language}</p>
          </li>
        ))}
      </ul>
      {hasMore && <button onClick={loadMore}>Load More</button>}
    </div>
  );
}

export default RepoList;
