import { useState } from 'react';
import { parseExcel } from '../utils/parseExcel';

export function useExcelUpload(initialData, initialMeta) {
  const [tableData, setTableData] = useState(initialData);
  const [meta, setMeta] = useState(initialMeta);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isExcel =
      file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.type === 'application/vnd.ms-excel' ||
      file.name.endsWith('.xls') ||
      file.name.endsWith('.xlsx');

    if (!isExcel) {
      setErrorMessage('Vui lòng chọn tệp Excel (.xls hoặc .xlsx) hợp lệ.');
      setShowError(true);
      return;
    }

    try {
      const { meta, tableData } = await parseExcel(file);

      if (!Array.isArray(tableData) || tableData.length === 0) {
        throw new Error('Không tìm thấy dữ liệu trong tệp Excel.');
      }

      if (!('thanhTien' in tableData[0]) || !('gio' in tableData[0])) {
        throw new Error('Thiếu cột "thanhTien" hoặc "gio" trong dữ liệu.');
      }

      setMeta(meta);
      setTableData(tableData);
      setShowError(false);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || 'Có lỗi xảy ra khi xử lý tệp.');
      setShowError(true);
    }
  };

  return { meta, tableData, showError, errorMessage, setShowError, handleUpload };
}