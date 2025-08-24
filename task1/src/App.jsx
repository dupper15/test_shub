import Header from './components/Header';
import Table from './components/Table';
import ResultDisplay from './components/ResultDisplay';
import { virtualData } from './constants/virtualData';
import { useExcelUpload } from './hooks/useExcelUpload';
import ErrorModal from './components/ErrorModal';

function App() {
   const {meta, tableData, showError, errorMessage, setShowError, handleUpload} = useExcelUpload(virtualData, {});
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 px-4 w-full max-w-full py-4">
      <Header meta={meta} handleUpload={handleUpload} />
      <main className="flex-1 bg-slate-50  w-full max-w-full py-4">
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
