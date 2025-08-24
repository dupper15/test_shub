export const filterData = (data, searchTerm, searchFields = ['tenKhachHang', 'maKhachHang']) => {
  if (!searchTerm?.trim()) return data;
  const searchLower = searchTerm.toLowerCase().trim();
  return data.filter(row => {
    return searchFields.some(field => {
      const value = row[field]?.toLowerCase() || '';
      return value.includes(searchLower);
    });
  });
};

export const paginateData = (data, currentPage, pageSize) => {
  const start = (currentPage - 1) * pageSize;
  return data.slice(start, start + pageSize);
};

export const calculateTotalPages = (totalItems, pageSize) => {
  return Math.ceil(totalItems / pageSize);
};
