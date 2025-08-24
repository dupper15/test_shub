import Modal from './Modal';

const ErrorModal = ({ isOpen, onClose, errorMessage, onRetry }) => (
  <Modal isOpen={isOpen} onClose={onClose} title='Tệp không hợp lệ'>
    <p className='mb-4 text-center'>
      {errorMessage || 'Vui lòng chọn tệp Excel (.xls hoặc .xlsx) hợp lệ.'}
    </p>

    <div className='flex justify-center gap-4'>
      <button
        onClick={onRetry}
        className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'
      >
        Chọn lại file
      </button>
      <button
        onClick={onClose}
        className='px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition'
      >
        Đóng
      </button>
    </div>

    <input type='file' id='file-upload' accept='.xls,.xlsx' className='hidden' onChange={onRetry} />
  </Modal>
);

export default ErrorModal;
