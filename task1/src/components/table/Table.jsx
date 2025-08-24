import React from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import PaginationControls from './PaginationControls';
import { SearchBar, SearchResults } from '../ui';
import { useTable } from '../../hooks/useTable';

const Table = ({ tableData }) => {
  const {
    currentPage,
    searchTerm,
    paginatedData,
    totalPages,
    handleSort,
    handleSearch,
    handlePageChange,
    totalItems,
    filteredItems,
    sortConfig,
  } = useTable(tableData);

  return (
    <section>
      <div className='mb-6'>
        <SearchBar
          onSearch={handleSearch}
          placeholder='Tìm kiếm theo tên khách hàng hoặc mã khách hàng...'
          value={searchTerm}
        />
        <SearchResults
          searchTerm={searchTerm}
          filteredCount={filteredItems}
          totalCount={totalItems}
        />
      </div>
      <div className='overflow-auto rounded-lg shadow border border-gray-300'>
        <table className='min-w-[1200px] w-full text-sm text-left text-gray-700'>
          <TableHeader sortConfig={sortConfig} onSort={handleSort} />
          <tbody className='bg-white divide-y divide-gray-200'>
            {paginatedData.map((row, index) => (
              <TableRow key={index} row={row} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={handlePageChange}
      />
    </section>
  );
};

export default React.memo(Table);
