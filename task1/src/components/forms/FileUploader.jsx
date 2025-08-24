import { FiUpload } from 'react-icons/fi';

const FileUploader = ({ handleUpload }) => {
  return (
    <div className='flex items-center justify-center'>
      <label
        htmlFor='file-upload'
        className='cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition duration-200 shadow'
      >
        <FiUpload className='text-lg' />
        Tải lên Excel
      </label>
      <input
        id='file-upload'
        type='file'
        accept='.xlsx, .xls'
        onChange={handleUpload}
        className='hidden'
      />
    </div>
  );
};

export default FileUploader;
