"use client";

import useGithubApi from "@/hooks/useGithubApi";
import Link from "next/link";

export default function RepoList({ username }) {
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
            <Link href={`/repo/${username}/${repo.name}?user=${username}`}>
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
