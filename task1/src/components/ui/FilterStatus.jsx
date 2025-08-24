import React from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterStatus = ({
  hasTimeFilter,
  startTime,
  endTime,
  isFiltered,
  filteredCount,
  totalCount,
}) => {
  if (!hasTimeFilter) return null;

  return (
    <div className='mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg'>
      <div className='flex items-center gap-2 text-sm text-blue-800'>
        <FaFilter size={12} />
        <span>
          Hiển thị dữ liệu từ <strong>{startTime}</strong> đến <strong>{endTime}</strong>
          {isFiltered && (
            <span className='ml-2 text-blue-600'>
              ({filteredCount}/{totalCount} bản ghi)
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default React.memo(FilterStatus);
