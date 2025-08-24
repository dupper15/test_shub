import * as XLSX from 'xlsx';
import { FIXED_HEADER } from '../constants/excelHeaders';

export const parseExcel = async file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      const meta = {
        chuoi: jsonData[2]?.[1] || '',
        tram: jsonData[2]?.[4] || '',
        loaiBaoCao: jsonData[3]?.[1] || '',
        tuNgay: jsonData[4]?.[1] || '',
        denNgay: jsonData[4]?.[4] || '',
        tongTien: jsonData[5]?.[1] || '',
        tongLit: jsonData[5]?.[4] || '',
      };
      const headerRowIndex = 7;
      const tableRows = jsonData.slice(headerRowIndex + 1);
      const tableData = tableRows.map(row => {
        let obj = {};
        FIXED_HEADER.forEach((key, index) => {
          obj[key] =
            row[index] !== undefined && row[index] !== null ? String(row[index]).trim() : '';
        });
        return obj;
      });
      resolve({ meta, tableData });
    };
    reader.onerror = error => reject(error);
    reader.readAsArrayBuffer(file);
  });
};
