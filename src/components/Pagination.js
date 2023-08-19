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
        } else {
            setInputPage(currentPage);
        }
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

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
