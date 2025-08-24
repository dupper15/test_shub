import { useState, useMemo, useCallback } from 'react';

export const useTimeFilter = data => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const filteredData = useMemo(() => {
    if (!startTime || !endTime) return data;

    return data.filter(row => {
      const rowTime = row.gio?.slice(0, 5);
      return rowTime >= startTime && rowTime <= endTime;
    });
  }, [data, startTime, endTime]);

  const totalAmount = useMemo(() => {
    return filteredData.reduce((sum, row) => sum + Number(row.thanhTien || 0), 0);
  }, [filteredData]);

  const hasTimeFilter = startTime && endTime;
  const isFiltered = hasTimeFilter && filteredData.length !== data.length;

  const clearFilters = useCallback(() => {
    setStartTime(null);
    setEndTime(null);
  }, []);

  return {
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    filteredData,
    totalAmount,
    hasTimeFilter,
    isFiltered,
    clearFilters,
    filteredCount: filteredData.length,
    totalCount: data.length,
  };
};
