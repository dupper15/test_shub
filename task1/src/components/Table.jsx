import { useState, useMemo } from 'react';
import TableRow from './TableRow';
import PaginationControls from './PaginationControls';

const PAGE_SIZE = 20;

const Table = ({ tableData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableData.length / PAGE_SIZE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return tableData.slice(start, start + PAGE_SIZE);
  }, [tableData, currentPage]);

  return (
    <section>
      <div className="overflow-auto rounded-lg shadow border border-gray-300">
        <table className="min-w-[1200px] w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-600 text-white font-semibold text-xs uppercase">
            <tr>
              <th className="p-3">STT</th>
              <th className="p-3">Ngày</th>
              <th className="p-3">Giờ</th>
              <th className="p-3">Trạm</th>
              <th className="p-3">Trụ bơm</th>
              <th className="p-3">Mặt hàng</th>
              <th className="p-3 text-right">Số lượng</th>
              <th className="p-3 text-right">Đơn giá</th>
              <th className="p-3 text-right">Thành tiền (VNĐ)</th>
              <th className="p-3">Trạng thái TT</th>
              <th className="p-3">Mã KH</th>
              <th className="p-3">Tên KH</th>
              <th className="p-3">Loại KH</th>
              <th className="p-3">Ngày TT</th>
              <th className="p-3">Nhân viên</th>
              <th className="p-3">Biển số xe</th>
              <th className="p-3">Trạng thái HĐ</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((row, index) => (
              <TableRow key={index} row={row} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Table;
