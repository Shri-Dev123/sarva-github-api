const Repository = ({ name, description, stars, language, url }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-lg font-medium mb-2">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                </a>
            </h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <div className="flex items-center text-gray-700">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-1"
                >
                    <path d="M22 5H2V19H22V5Z" />
                    <path d="M6 9H18V11H6V9Z" />
                    <path d="M6 13H16V15H6V13Z" />
                </svg>
                <span>{stars}</span>
                <span className="mx-2">•</span>
                <span>{language}</span>
            </div>
        </div>
    );
};

export default Repository;
