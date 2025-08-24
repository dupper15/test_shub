import { FileUploader } from '../forms';
const Header = ({ meta, handleUpload }) => {
  return (
    <header className='bg-white w-full shadow-md px-8 py-4 mb-2'>
      <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-6 h-max'>
        <aside className='flex flex-col'>
          <h1 className='text-2xl font-semibold mb-2 border-b border-blue-700 pb-2'>
            Chi tiết doanh thu
          </h1>
          <dl className='grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-2 text-gray-700 mb-2'>
            <div>
              <dt className='font-semibold'>Chuỗi:</dt>
              <dd>{meta.chuoi || '-'}</dd>
            </div>
            <div>
              <dt className='font-semibold'>Trạm:</dt>
              <dd>{meta.tram || '-'}</dd>
            </div>
            <div>
              <dt className='font-semibold'>Từ ngày:</dt>
              <dd>{meta.tuNgay || '-'}</dd>
            </div>
            <div>
              <dt className='font-semibold'>Đến ngày:</dt>
              <dd>{meta.denNgay || '-'}</dd>
            </div>
            <div>
              <dt className='font-semibold'>Tổng tiền:</dt>
              <dd>{meta.tongTien || '-'}</dd>
            </div>
            <div>
              <dt className='font-semibold'>Tổng lít:</dt>
              <dd>{meta.tongLit || '-'}</dd>
            </div>
          </dl>
        </aside>
        <section className='mt-auto'>
          <FileUploader handleUpload={handleUpload} />
        </section>
      </div>
    </header>
  );
};

export default Header;
