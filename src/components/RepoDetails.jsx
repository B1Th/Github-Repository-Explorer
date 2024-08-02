import React from "react";
import { useParams } from "react-router-dom";
import useGithubApi from "../hooks/useGithubApi";

function RepoDetails() {
  const { owner, name } = useParams();
  const {
    data: contributors,
    loading: loadingContributors,
    error: errorContributors,
  } = useGithubApi(
    `https://api.github.com/repos/${owner}/${name}/contributors`
  );
  const {
    data: commits,
    loading: loadingCommits,
    error: errorCommits,
  } = useGithubApi(`https://api.github.com/repos/${owner}/${name}/commits`);

  if (loadingContributors || loadingCommits) return <p>Loading...</p>;
  if (errorContributors || errorCommits)
    return <p>Error: {errorContributors || errorCommits}</p>;

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
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default RepoDetails;
