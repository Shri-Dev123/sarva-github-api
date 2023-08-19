import axios from "axios";

export const fetchRepositories = async (username) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        const repositories = response.data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            language: repo.language,
            html_url: repo.html_url,
        }));

        const total = repositories.length;

        const languages = Array.from(
            new Set(repositories.map((repo) => repo.language))
        ).filter((language) => language !== null);

        const stars = languages.map((language) =>
            repositories
                .filter((repo) => repo.language === language)
                .reduce((total, repo) => total + repo.stargazers_count, 0)
        );

        return { repositories, total, languages, stars };
    } catch (error) {
        console.error(error);
        return { repositories: [], total: 0, languages: [], stars: [] };
    }
};
