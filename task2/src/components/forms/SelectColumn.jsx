import { IoMdArrowDropdown } from 'react-icons/io';

const SelectColumn = ({ register, error }) => {
  return (
    <div>
      <div className='border border-gray-300 rounded-xl px-4 focus-within:ring-1 focus-within:ring-blue-500'>
        <div className='flex flex-col pt-1 pb-2'>
          <label htmlFor='tru' className='text-xs text-gray-500'>
            Trụ
          </label>
          <div className='flex justify-between'>
            <select
              id='tru'
              {...register('tru')}
              className='w-full appearance-none bg-transparent outline-none text-sm font-semibold text-gray-800 pr-6'
            >
              <option value=''></option>
              <option value='1'>Trụ 1</option>
              <option value='2'>Trụ 2</option>
              <option value='3'>Trụ 3</option>
            </select>
            <IoMdArrowDropdown className='my-auto text-gray-500 text-xl pointer-events-none' />
          </div>
        </div>
      </div>
      {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
    </div>
  );
};

export default SelectColumn;
