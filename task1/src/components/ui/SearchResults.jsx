import React from 'react';

const SearchResults = ({ searchTerm, filteredCount, totalCount }) => {
  if (!searchTerm) return null;
  return (
    <div className='mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'>
      <div className='flex items-center justify-between text-sm'>
        <span className='text-blue-800'>
          <strong>Tìm thấy {filteredCount}</strong> kết quả cho "{searchTerm}"
        </span>
        {filteredCount !== totalCount && (
          <span className='text-gray-600'>(từ tổng {totalCount} bản ghi)</span>
        )}
      </div>
    </div>
  );
};

export default React.memo(SearchResults);
