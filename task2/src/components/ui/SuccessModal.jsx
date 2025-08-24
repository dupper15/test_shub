import Modal from './Modal';

const SuccessModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title='Thành công!'>
    <p className='mb-6 text-center text-gray-700'>Dữ liệu đã được cập nhật thành công.</p>

    <div className='flex justify-center'>
      <button
        onClick={onClose}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
      >
        Đóng
      </button>
    </div>
  </Modal>
);

export default SuccessModal;
