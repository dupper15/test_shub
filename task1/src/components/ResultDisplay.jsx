import { useState, useMemo } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const ResultDisplay = ({ tableData }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const filteredData = useMemo(() => {
    if (!startTime || !endTime) return tableData;

    return tableData.filter((row) => {
      const rowTime = row.gio?.slice(0, 5);
      return rowTime >= startTime && rowTime <= endTime;
    });
  }, [tableData, startTime, endTime]);

  const totalAmount = useMemo(() => {
    return filteredData.reduce((sum, row) => sum + Number(row.thanhTien || 0), 0);
  }, [filteredData]);

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center w-full bg-white p-6 shadow rounded-lg gap-6">
      <div className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-800">
            Lọc theo giờ và tính tổng
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-col">
            <label className="block text-sm text-gray-600 mb-1">Giờ bắt đầu:</label>
            <TimePicker
              onChange={setStartTime}
              value={startTime}
              disableClock={true}
              format="HH:mm"
              clearIcon={null}
              className="react-time-picker rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm text-gray-600 mb-1">Giờ kết thúc:</label>
            <TimePicker
              onChange={setEndTime}
              value={endTime}
              disableClock={true}
              format="HH:mm"
              clearIcon={null}
              className="react-time-picker rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold text-green-700 whitespace-nowrap">
        Tổng thành tiền: {totalAmount.toLocaleString()} VNĐ
      </div>
    </footer>
  );
};

export default ResultDisplay;
