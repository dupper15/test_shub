import InputDate from './InputDate';
import InputNumber from './InputNumber';
import SelectColumn from './SelectColumn';

const TransactionFormBody = ({ control, register, errors }) => (
  <main className='flex flex-col px-4 py-6 gap-4'>
    <InputDate control={control} error={errors.thoiGian?.message} />
    <InputNumber
      label='Số lượng (lít)'
      name='soLuong'
      register={register}
      error={errors.soLuong?.message}
    />
    <SelectColumn register={register} error={errors.tru?.message} />
    <InputNumber
      label='Doanh thu'
      name='doanhThu'
      register={register}
      error={errors.doanhThu?.message}
    />
    <InputNumber label='Đơn giá' name='donGia' register={register} error={errors.donGia?.message} />
  </main>
);

export default TransactionFormBody;
