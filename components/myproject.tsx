"use client";
import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
  };
  languages_url: string;
};

export default function GitHubRepos() {
  const [ownedRepos, setOwnedRepos] = useState<Repository[]>([]);
  const [contributedRepos, setContributedRepos] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<{ [key: number]: string[] }>({});
  const username = "Wency7"; // Replace with your GitHub username
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Ensure you add this to your .env file

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch owned repositories
        const ownedResponse = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        if (!ownedResponse.ok) {
          throw new Error("Failed to fetch owned repositories");
        }
        const ownedData = await ownedResponse.json();
        if (Array.isArray(ownedData)) {
          setOwnedRepos(ownedData);
        }

        // Fetch repositories where the user is a contributor
        const contributedResponse = await fetch(
          `https://api.github.com/users/${username}/repos?type=all`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        if (!contributedResponse.ok) {
          throw new Error("Failed to fetch contributed repositories");
        }
        const contributedData = await contributedResponse.json();

        if (Array.isArray(contributedData)) {
          const filteredContributedRepos = contributedData.filter(
            (repo: Repository) => repo.owner.login !== username
          );
          setContributedRepos(filteredContributedRepos);

          // Fetch languages for each repository
          const fetchLanguages = async (repo: Repository) => {
            const response = await fetch(repo.languages_url, {
              headers: {
                Authorization: `token ${token}`,
              },
            });
            const data = await response.json();
            return Object.keys(data);
          };

          const languagesData: { [key: number]: string[] } = {};

          for (const repo of [...ownedData, ...filteredContributedRepos]) {
            languagesData[repo.id] = await fetchLanguages(repo);
          }

          setLanguages(languagesData);
        }
      } catch (error) {
        console.error("Error fetching repositories or languages:", error);
      }
    };

    fetchRepos();
  }, []);

  const renderRepos = (repos: Repository[]) => {
    if (!Array.isArray(repos)) {
      return null; // or some error message
    }

    return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105 hover:shadow-lg"
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-semibold text-[#213139ff] hover:underline">
                {repo.name}
              </h3>
            </a>
            <p className="text-gray-700 mt-2">
              {repo.description || "No description available"}
            </p>
            <div className="mt-2">
              {languages[repo.id]?.map((language) => (
                <span
                  key={language}
                  className="text-xs font-medium text-white bg-[#BDA588ff] rounded-full px-2 py-1 mr-2"
                >
                  {language}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full max-w-5xl ">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#213139ff]">
        My GitHub Repositories
      </h2>

      <h3 className="text-xl font-semibold mb-4 text-[#213139ff]">
        Owned Repositories
      </h3>
      {renderRepos(ownedRepos)}

      {contributedRepos.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-[#213139ff]">
            Contributed Repositories
          </h3>
          {renderRepos(contributedRepos)}
        </>
      )}
    </div>
  );
}
