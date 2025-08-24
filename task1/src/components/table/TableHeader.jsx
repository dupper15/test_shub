import React from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { TABLE_COLUMNS, NUMERIC_COLUMNS } from '../../constants/tableConfig';

const TableHeader = ({ sortConfig, onSort }) => {
  const getSortIcon = columnKey => {
    if (sortConfig.key !== columnKey) {
      return <FaSort className='ml-1 text-gray-300' size={12} />;
    }
    return sortConfig.direction === 'asc' ? (
      <FaSortUp className='ml-1 text-white' size={12} />
    ) : (
      <FaSortDown className='ml-1 text-white' size={12} />
    );
  };

  return (
    <thead className='bg-blue-600 text-white font-semibold text-xs uppercase'>
      <tr>
        {TABLE_COLUMNS.map(column => (
          <th
            key={column.key}
            className={`p-3 cursor-pointer hover:bg-blue-700 transition-colors select-none ${
              NUMERIC_COLUMNS.includes(column.key) ? 'text-right' : ''
            }`}
            onClick={() => onSort(column.key)}
            title={`Sắp xếp theo ${column.label}`}
          >
            <div className='flex items-center justify-between'>
              <span>{column.label}</span>
              {getSortIcon(column.key)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default React.memo(TableHeader);
