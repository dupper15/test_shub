import React from 'react';
import { formatTableCurrency } from '../../utils/formatCurrency';

const TableRow = ({ row, index }) => (
  <tr className={`${index % 2 === 1 ? 'bg-gray-50' : ''} hover:bg-blue-50 transition`}>
    <td className='p-3 text-center font-medium'>{row.stt}</td>
    <td className='p-3'>{row.ngay}</td>
    <td className='p-3'>{row.gio}</td>
    <td className='p-3'>{row.tram}</td>
    <td className='p-3'>{row.truBom}</td>
    <td className='p-3'>{row.matHang}</td>
    <td className='p-3 text-right'>{row.soLuong}</td>
    <td className='p-3 text-right'>{formatTableCurrency(row.donGia)}</td>
    <td className='p-3 text-right font-semibold text-blue-700'>{formatTableCurrency(row.thanhTien)}</td>
    <td className='p-3'>{row.trangThaiThanhToan}</td>
    <td className='p-3'>{row.maKhachHang}</td>
    <td className='p-3'>{row.tenKhachHang}</td>
    <td className='p-3'>{row.loaiKhachHang}</td>
    <td className='p-3'>{row.ngayThanhToan}</td>
    <td className='p-3'>{row.nhanVien}</td>
    <td className='p-3'>{row.bienSoXe}</td>
    <td className='p-3'>{row.trangThaiHoaDon}</td>
  </tr>
);

export default React.memo(TableRow);
