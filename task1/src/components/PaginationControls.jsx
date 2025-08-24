import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PaginationControls = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 text-sm">
      <span>Trang {currentPage} / {totalPages}</span>
      <div className="flex items-center gap-2">
        <button onClick={handlePrev} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50">
          Trang trước
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page => page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1))
          .map((page, index, arr) => (
            <React.Fragment key={page}>
              {index > 0 && page - arr[index - 1] > 1 && <span>...</span>}
              <button
                onClick={() => setCurrentPage(page)}
                className={`px-2 py-1 rounded ${page === currentPage ? 'bg-blue-600 text-white' : 'border hover:bg-gray-100'}`}
              >
                {page}
              </button>
            </React.Fragment>
          ))
        }
        <button onClick={handleNext} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50">
          Trang sau
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.page.value);
          if (!isNaN(page) && page >= 1 && page <= totalPages) {
            setCurrentPage(page);
          }
          e.target.reset();
        }}
        className="flex items-center gap-2"
      >
        <label htmlFor="page" className="text-gray-600">Đi đến trang:</label>
        <input
          type="number"
          name="page"
          min="1"
          max={totalPages}
          className="w-16 px-2 py-1 border rounded"
          placeholder="..."
        />
        <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center">
          <FaArrowRight size={16} />
        </button>
      </form>
    </div>
  );
};

export default PaginationControls;
