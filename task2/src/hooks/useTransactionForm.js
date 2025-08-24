import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { transactionSchema } from '../schemas/transactionSchema';

export const useTransactionForm = () =>
  useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      thoiGian: new Date(),
      soLuong: 0,
      doanhThu: 0,
      donGia: 0,
      tru: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
