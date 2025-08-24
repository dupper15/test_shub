import { FaArrowLeft } from 'react-icons/fa';

const Header = ({ onClose }) => {
  return (
    <header className='flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white w-full py-4 px-4 sm:px-6 shadow-md rounded-t-xl gap-2 sm:gap-0'>
      <div>
        <button
          onClick={onClose}
          className='flex items-center text-gray-600 hover:text-gray-800 text-sm'
        >
          <FaArrowLeft className='mr-1' size={14} />
          Đóng
        </button>
        <h1 className='text-xl sm:text-2xl font-bold mt-1'>Nhập giao dịch</h1>
      </div>
      <div>
        <button
          type='submit'
          form='transaction-form'
          className='w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl shadow'
        >
          Cập nhật
        </button>
      </div>
    </header>
  );
};

export default Header;
