export const compareValues = (aValue, bValue, columnType) => {
  if (aValue == null && bValue == null) return 0;
  if (aValue == null) return 1;
  if (bValue == null) return -1;

  let comparison = 0;

  switch (columnType) {
    case 'number': {
      const numA = parseFloat(String(aValue).replace(/[^0-9.-]/g, '')) || 0;
      const numB = parseFloat(String(bValue).replace(/[^0-9.-]/g, '')) || 0;
      comparison = numA - numB;
      break;
    }
    case 'date': {
      const dateA = new Date(aValue);
      const dateB = new Date(bValue);
      comparison = dateA - dateB;
      break;
    }
    case 'time': {
      const timeA = aValue ? aValue.replace(':', '') : '0000';
      const timeB = bValue ? bValue.replace(':', '') : '0000';
      comparison = timeA.localeCompare(timeB);
      break;
    }
    default:
      comparison = String(aValue).localeCompare(String(bValue));
  }

  return comparison;
};

export const sortData = (data, sortConfig, columns) => {
  if (!sortConfig.key) return data;

  return [...data].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    const columnType = columns.find(col => col.key === sortConfig.key)?.type || 'string';
    const comparison = compareValues(aValue, bValue, columnType);
    return sortConfig.direction === 'asc' ? comparison : -comparison;
  });
};
