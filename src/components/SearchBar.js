import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center">
            <div className="relative text-gray-600 w-64">
                <input
                    type="search"
                    name="search"
                    placeholder="Search repositories..."
                    value={query}
                    onChange={handleInputChange}
                    className="w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M9.5 3C5.364 3 2 6.364 2 10.5c0 4.136 3.364 7.5 7.5 7.5 1.68 0 3.23-.56 4.48-1.5l5.52 5.52 1.5-1.5-5.52-5.52c.94-1.25 1.5-2.8 1.5-4.48C17 6.364 13.636 3 9.5 3zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
