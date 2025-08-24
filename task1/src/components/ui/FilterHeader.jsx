import React from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';

const FilterHeader = ({ hasTimeFilter, onClearFilters }) => {
  return (
    <div className='flex items-center justify-between mb-6'>
      <div className='flex items-center gap-3'>
        <div className='p-2 bg-blue-100 rounded-lg'>
          <FaFilter className='text-blue-600' size={20} />
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-800'>Lọc theo khoảng thời gian</h3>
          <p className='text-sm text-gray-600'>Chọn khoảng thời gian để tính tổng doanh thu</p>
        </div>
      </div>

      {hasTimeFilter && (
        <button
          onClick={onClearFilters}
          className='flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 
                   bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200'
          title='Xóa bộ lọc'
        >
          <FaTimes size={14} />
          Xóa bộ lọc
        </button>
      )}
    </div>
  );
};

export default React.memo(FilterHeader);
