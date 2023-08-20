import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Repository from "./Repository";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Pagination from "./Pagination";
import { fetchRepositories } from "../utils/api";
import { paginate } from "../utils/pagination";

const User = () => {
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [totalRepositories, setTotalRepositories] = useState(0);
    const [languages, setLanguages] = useState([]);
    const [stars, setStars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [repositoriesPerPage] = useState(10);

    useEffect(() => {
        if (username) {
            fetchRepositories(username).then((data) => {
                setRepositories(data.repositories);
                setTotalRepositories(data.total);
                setLanguages(data.languages);
                setStars(data.stars);
                setCurrentPage(1);
            });
        }
    }, [username]);

    const handleSearch = (query) => {
        setUsername(query);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedRepositories = paginate(
        repositories,
        currentPage,
        repositoriesPerPage
    );
    console.log(repositories);

    return (
        <div className="container mx-auto py-8">
            <SearchBar onSearch={handleSearch} />
            {username && (
                <div>
                    <h1 className="text-3xl font-medium mb-4">
                        {username}'s repositories
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <BarChart data={{ labels: languages, stars }} />
                        </div>
                        <div>
                            <PieChart
                                data={{
                                    labels: languages,
                                    traffic: stars,
                                    colors: [
                                        "#10B981",
                                        "#3B82F6",
                                        "#EF4444",
                                        "#F59E0B",
                                        "#6366F1",
                                    ],
                                }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {paginatedRepositories.map((repo) => (
                            <Repository
                                key={repo.id}
                                name={repo.name}
                                description={repo.description}
                                stars={repo.stargazers_count}
                                language={repo.language}
                                url={repo.html_url}
                            />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(
                            totalRepositories / repositoriesPerPage
                        )}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
};

export default User;
