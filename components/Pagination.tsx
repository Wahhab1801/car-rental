// Pagination.js

import React, { FC } from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <nav>
        <ul className="pagination flex items-center">
          <li className="page-item">
            <button
              className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          <li className="page-item mx-4">
            {`Page ${currentPage} of ${totalPages}`}
          </li>
          <li className="page-item">
            <button
              className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
