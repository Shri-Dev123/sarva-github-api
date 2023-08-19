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
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14.293 14.293a1 1 0 01-1.414 0l-3.022-3.022a5.5 5.5 0 111.414-1.414l3.022 3.022a1 1 0 010 1.414zM6.5 10.5a4 4 0 117.999.001A4 4 0 016.5 10.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
