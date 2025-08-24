export const TABLE_COLUMNS = [
  { key: 'stt', label: 'STT', type: 'number' },
  { key: 'ngay', label: 'Ngày', type: 'date' },
  { key: 'gio', label: 'Giờ', type: 'time' },
  { key: 'tram', label: 'Trạm', type: 'string' },
  { key: 'truBom', label: 'Trụ bơm', type: 'string' },
  { key: 'matHang', label: 'Mặt hàng', type: 'string' },
  { key: 'soLuong', label: 'Số lượng', type: 'number' },
  { key: 'donGia', label: 'Đơn giá', type: 'number' },
  { key: 'thanhTien', label: 'Thành tiền (VNĐ)', type: 'number' },
  { key: 'trangThaiThanhToan', label: 'Trạng thái TT', type: 'string' },
  { key: 'maKhachHang', label: 'Mã KH', type: 'string' },
  { key: 'tenKhachHang', label: 'Tên KH', type: 'string' },
  { key: 'loaiKhachHang', label: 'Loại KH', type: 'string' },
  { key: 'ngayThanhToan', label: 'Ngày TT', type: 'date' },
  { key: 'nhanVien', label: 'Nhân viên', type: 'string' },
  { key: 'bienSoXe', label: 'Biển số xe', type: 'string' },
  { key: 'trangThaiHoaDon', label: 'Trạng thái HĐ', type: 'string' },
];

export const PAGE_SIZE = 20;

export const NUMERIC_COLUMNS = ['soLuong', 'donGia', 'thanhTien'];
