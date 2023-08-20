import { useState } from "react";
import classNames from "classnames";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const [inputPage, setInputPage] = useState(currentPage);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputPage(value);
    };

    const handleInputBlur = () => {
        const page = parseInt(inputPage);
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of page smoothly
        } else {
            setInputPage(currentPage);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of page smoothly
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of page smoothly
        }
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center space-x-2">
            <button
                className={classNames(
                    "px-3 py-1 rounded-md text-gray-700 bg-white hover:bg-gray-100",
                    { "cursor-not-allowed opacity-50": currentPage === 1 }
                )}
                onClick={handlePrevClick}
                disabled={currentPage === 1}
            >
                Prev
            </button>
            <div className="flex space-x-2">
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={inputPage}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="w-16 px-3 py-1 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span>{currentPage}</span>
                <span className="text-gray-700">of {totalPages}</span>
            </div>
            <button
                className={classNames(
                    "px-3 py-1 rounded-md text-gray-700 bg-white hover:bg-gray-100",
                    {
                        "cursor-not-allowed opacity-50":
                            currentPage === totalPages,
                    }
                )}
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
