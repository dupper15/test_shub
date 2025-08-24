export const formatCurrency = (value) => {
  if (value === null || value === undefined || value === '') {
    return '0';
  }

  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numValue)) {
    return '0';
  }

  return numValue.toLocaleString('vi-VN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).replace(/,/g, '.');
};

export const formatTableCurrency = (value) => {
  const formatted = formatCurrency(value);
  return formatted;
};
