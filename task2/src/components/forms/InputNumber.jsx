const InputNumber = ({ label, name, register, error }) => {
  return (
    <div>
      <div className='border border-gray-300 rounded-xl px-4 focus-within:ring-1 focus-within:ring-blue-500'>
        <div className='flex flex-col pt-1 pb-2'>
          <label htmlFor={name} className='text-xs text-gray-500'>
            {label}
          </label>
          <input
            id={name}
            type='number'
            step='any'
            {...register(name, {
              setValueAs: value => (value === '' ? undefined : Number(value)),
            })}
            onFocus={e => {
              if (e.target.value === '0') {
                e.target.value = '';
              }
            }}
            className='w-full outline-none bg-transparent text-sm font-semibold text-gray-800'
          />
        </div>
      </div>

      {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
    </div>
  );
};

export default InputNumber;
