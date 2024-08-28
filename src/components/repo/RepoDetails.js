"use client";

import { useEffect, useState } from "react";

export default function RepoDetails({ owner, name }) {
  const [contributors, setContributors] = useState([]);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const [contributorsResponse, commitsResponse] = await Promise.all([
          fetch(`https://api.github.com/repos/${owner}/${name}/contributors`),
          fetch(`https://api.github.com/repos/${owner}/${name}/commits`),
        ]);

        if (!contributorsResponse.ok || !commitsResponse.ok) {
          throw new Error("Failed to fetch repository details");
        }

        const contributorsData = await contributorsResponse.json();
        const commitsData = await commitsResponse.json();

        setContributors(contributorsData);
        setCommits(commitsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, [owner, name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{name}</h2>
      <h3>Contributors</h3>
      <ul>
        {contributors.map((contributor) => (
          <li key={contributor.id}>{contributor.login}</li>
        ))}
      </ul>
      <h3>Recent Commits</h3>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            {commit.commit.message} - {commit.commit.author.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
