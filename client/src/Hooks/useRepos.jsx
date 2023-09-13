import { useState, useEffect } from 'react';

function useGitHubRepos(accessToken) {
    
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Ensure the access token is provided
    if (!accessToken) {
      console.error('Access token is missing.');
      return;
    }

    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const repo = data.map((repo) => repo)
        const allRepoName = repo.map((repo) => repo.name)
        setRepos(allRepoName)
      })
      .catch((error) => {
        console.error('Error fetching data from GitHub API:', error);
      });
  }, [accessToken]);

  return repos;
}

export default useGitHubRepos;
