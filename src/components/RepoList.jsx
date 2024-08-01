import React from "react";

function RepoList({ repos }) {
  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Language: {repo.language}</p>
        </li>
      ))}
    </ul>
  );
}

export default RepoList;
