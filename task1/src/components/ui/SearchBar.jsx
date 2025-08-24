import { useState, useCallback } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ onSearch, placeholder = 'Tìm kiếm...', value = '' }) => {
  const [searchTerm, setSearchTerm] = useState(value);

  const handleInputChange = useCallback(
    e => {
      const newValue = e.target.value;
      setSearchTerm(newValue);
      onSearch(newValue);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setSearchTerm('');
    onSearch('');
  }, [onSearch]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      onSearch(searchTerm);
    },
    [onSearch, searchTerm]
  );

  return (
    <div className='mb-4'>
      <form onSubmit={handleSubmit} className='relative max-w-md'>
        <div className='relative flex items-center'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <FaSearch className='h-4 w-4 text-gray-400' />
          </div>

          <input
            type='text'
            value={searchTerm}
            onChange={handleInputChange}
            placeholder={placeholder}
            className='w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition-all duration-200 ease-in-out
                     bg-white text-gray-900 placeholder-gray-500
                     hover:border-gray-400'
            autoComplete='off'
          />

          {searchTerm && (
            <button
              type='button'
              onClick={handleClear}
              className='absolute inset-y-0 right-0 pr-3 flex items-center
                       hover:text-gray-600 text-gray-400 transition-colors duration-200'
              title='Xóa tìm kiếm'
            >
              <FaTimes className='h-4 w-4' />
            </button>
          )}
        </div>

        {searchTerm && (
          <div className='mt-2 text-sm text-gray-600'>
            <span className='font-medium'>Đang tìm kiếm:</span> "{searchTerm}"
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
