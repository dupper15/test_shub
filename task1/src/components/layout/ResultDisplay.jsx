import React from 'react';
import { TimeFilter, FilterStatus, TotalSummary, FilterHeader } from '../ui';
import { useTimeFilter } from '../../hooks/useTimeFilter';

const ResultDisplay = ({ tableData }) => {
  const {
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    totalAmount,
    hasTimeFilter,
    isFiltered,
    clearFilters,
    filteredCount,
    totalCount,
  } = useTimeFilter(tableData);

  return (
    <footer className='w-full bg-gradient-to-br from-white via-blue-50 to-indigo-50 border-t border-gray-200 shadow-lg'>
      <div className='max-w-7xl mx-auto p-6'>
        <FilterHeader hasTimeFilter={hasTimeFilter} onClearFilters={clearFilters} />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-end'>
          <div className='lg:col-span-2'>
            <TimeFilter
              startTime={startTime}
              endTime={endTime}
              onStartTimeChange={setStartTime}
              onEndTimeChange={setEndTime}
            />
            <FilterStatus
              hasTimeFilter={hasTimeFilter}
              startTime={startTime}
              endTime={endTime}
              isFiltered={isFiltered}
              filteredCount={filteredCount}
              totalCount={totalCount}
            />
          </div>
          <div className='lg:col-span-1'>
            <TotalSummary
              totalAmount={totalAmount}
              hasTimeFilter={hasTimeFilter}
              filteredCount={filteredCount}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(ResultDisplay);
