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
│   ├── forms/          # Các form nhỏ, tái sử dụng
│   ├── layout/        # Layout chính của ứng dụng
│   └── ui/            # UI components (modal)
│
├── schemas/           # Chứa schema validate dữ liệu
│                      # Đảm bảo thông tin chính xác, đầy đủ
│
├── hooks/             # Custom hooks để làm việc gọn gàng hơn
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