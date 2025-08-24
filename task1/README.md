# 🚀 Hướng dẫn cài đặt & chạy dự án

## 📌 Cách thực hiện
- Tạo project **ReactJS**  
- Cài **TailwindCSS** để thuận tiện trong việc làm đẹp giao diện  
- Bám sát đề bài (xác định các **components**, chức năng của **components**)  
- Tinh chỉnh để giao diện **đẹp, code gọn gàng, dễ hiểu, dễ bảo trì và tái sử dụng**  

---

## 📂 Cấu trúc dự án
```bash
src/
│
├── components/        # Chứa các components
│   ├── forms/         # File uploader
│   ├── layout/        # Layout chính của ứng dụng
│   ├── table/         # Các component liên quan tới bảng
│   └── ui/            # UI components (filter, modal, input,...)
│
├── utils/             # Lớp tiện ích xử lý logic (excel, filter, sort dữ liệu)
│
├── constants/         # Chứa data ảo & cấu hình cột trong file excel
│
├── hooks/             # Custom hooks để xử lý excel, bảng gọn gàng hơn
│
└── App.jsx            # File chính của ứng dụng
```

## ⚙️ Hướng dẫn thực thi

# Cài đặt dependencies
```bash
npm install
```

```bash
# Chạy dự án
npm run dev
```