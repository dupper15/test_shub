import React from 'react';
import TimePicker from 'react-time-picker';
import { FaClock } from 'react-icons/fa';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const TimeFilter = ({ startTime, endTime, onStartTimeChange, onEndTimeChange }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='space-y-2'>
        <label className='flex items-center gap-2 text-sm font-medium text-gray-700'>
          <FaClock className='text-blue-500' size={14} />
          Giờ bắt đầu
        </label>
        <div className='relative'>
          <TimePicker
            onChange={onStartTimeChange}
            value={startTime}
            disableClock={true}
            format='HH:mm'
            clearIcon={null}
            className='w-full react-time-picker'
          />
        </div>
      </div>
      <div className='space-y-2'>
        <label className='flex items-center gap-2 text-sm font-medium text-gray-700'>
          <FaClock className='text-blue-500' size={14} />
          Giờ kết thúc
        </label>
        <div className='relative'>
          <TimePicker
            onChange={onEndTimeChange}
            value={endTime}
            disableClock={true}
            format='HH:mm'
            clearIcon={null}
            className='w-full react-time-picker'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TimeFilter);
