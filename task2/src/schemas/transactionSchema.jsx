import { z } from 'zod';

export const transactionSchema = z.object({
  thoiGian: z
    .date({ required_error: 'Thời gian bắt buộc' })
    .nullable()
    .refine(val => val !== null && val !== undefined, {
      message: 'Chưa đặt thời gian giao dịch',
    }),
  soLuong: z
    .number({ invalid_type_error: 'Số lượng phải là số' })
    .optional()
    .refine(val => val !== undefined && val > 0, {
      message: 'Số lượng phải lớn hơn 0',
    }),
  doanhThu: z
    .number({ invalid_type_error: 'Doanh thu phải là số' })
    .optional()
    .refine(val => val !== undefined && val > 0, {
      message: 'Doanh thu phải lớn hơn 0',
    }),
  donGia: z
    .number({ invalid_type_error: 'Đơn giá phải là số' })
    .optional()
    .refine(val => val !== undefined && val > 0, {
      message: 'Đơn giá phải lớn hơn 0',
    }),
  tru: z.string().min(1, 'Vui lòng chọn trụ'),
});
