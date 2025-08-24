import { useState, useMemo, useCallback } from 'react';
import { sortData } from '../utils/sortUtils';
import { filterData, paginateData, calculateTotalPages } from '../utils/filterUtils';
import { TABLE_COLUMNS, PAGE_SIZE } from '../constants/tableConfig';

export const useTable = data => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = useCallback(
    key => {
      let direction = 'asc';
      if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      setSortConfig({ key, direction });
      setCurrentPage(1);
    },
    [sortConfig.key, sortConfig.direction]
  );

  const handleSearch = useCallback(term => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, []);

  const filteredData = useMemo(() => {
    return filterData(data, searchTerm);
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    return sortData(filteredData, sortConfig, TABLE_COLUMNS);
  }, [filteredData, sortConfig]);

  const totalPages = useMemo(() => {
    return calculateTotalPages(sortedData.length, PAGE_SIZE);
  }, [sortedData.length]);

  const paginatedData = useMemo(() => {
    return paginateData(sortedData, currentPage, PAGE_SIZE);
  }, [sortedData, currentPage]);

  return {
    currentPage,
    sortConfig,
    searchTerm,
    filteredData,
    sortedData,
    paginatedData,
    totalPages,
    handleSort,
    handleSearch,
    handlePageChange: setCurrentPage,
    totalItems: data.length,
    filteredItems: filteredData.length,
    hasSearch: Boolean(searchTerm?.trim()),
  };
};
