import InputNumber from './components/InputNumber';
import InputDate from './components/InputDate';
import SelectColumn from './components/SelectColumn';
import Header from './components/Header';
import { useState } from 'react';
import SuccessModal from './components/SuccessModal';
import { useTransactionForm } from './hooks/useTransactionForm';
import TransactionFormBody from './components/TransactionFormBody';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, control, formState: { errors }, reset } = useTransactionForm();
    const onSubmit = (data) => {
      console.log('Dữ liệu submit:', data); 
      setIsModalOpen(true); 
      reset();   
    };
    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-300 to-purple-500'>
          <form id="transaction-form" onSubmit={handleSubmit(onSubmit)} className="w-1/2 min-w-[320px] bg-gray-50 shadow-lg rounded-xl">            
            <Header/>
            <TransactionFormBody control={control} register={register} errors={errors} />
          </form>
        {isModalOpen && <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </div>
    );
}

export default App
