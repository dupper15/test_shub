import React, { useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 relative animate-[fadeIn_0.25s_ease-out]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          aria-label="Đóng"
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>
        {title && (
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            {title}
          </h2>
        )}
        <div className="text-gray-700 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
