import { Header, ResultDisplay } from './components/layout';
import { Table } from './components/Table';
import { ErrorModal } from './components/ui';
import { VIRTUAL_DATA } from './constants/virtualData';
import { useExcelUpload } from './hooks/useExcelUpload';

function App() {
  const { meta, tableData, showError, errorMessage, setShowError, handleUpload } = useExcelUpload(
    VIRTUAL_DATA,
    {}
  );
  return (
    <div className='min-h-screen flex flex-col bg-slate-50 px-4 w-full max-w-full py-4'>
      <Header meta={meta} handleUpload={handleUpload} />
      <main className='flex-1 bg-slate-50  w-full max-w-full py-4'>
        <Table tableData={tableData} />
      </main>
      <ResultDisplay tableData={tableData} />
      {showError && (
        <ErrorModal
          isOpen={showError}
          onClose={() => setShowError(false)}
          errorMessage={errorMessage}
          onRetry={() => document.getElementById('file-upload').click()}
        />
      )}
    </div>
  );
}

export default App;
