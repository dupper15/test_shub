import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import { formatCurrency } from '../../utils/formatCurrency';

const TotalSummary = ({ totalAmount }) => {
  return (
    <div className='bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg'>
      <div className='flex items-center gap-3 mb-2'>
        <div className='p-2 bg-white/20 rounded-lg'>
          <FaCalculator className='text-white' size={20} />
        </div>
        <div>
          <p className='text-green-100 text-sm font-medium'>Tổng doanh thu</p>
          <h1 className='text-2xl font-bold'>{formatCurrency(totalAmount)} VNĐ</h1>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TotalSummary);
