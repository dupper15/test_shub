CÁCH THỰC HIỆN:
- tạo project reactjs
- cài tailwindcss để thuận tiện trong việc làm đẹp giao diện
- bám sát đề bài (xác định các components, chức năng của components)
- tinh chỉnh cho giao diện đẹp, code gọn lại để trông ngăn nắp, dễ hiểu, dễ bảo trì,...

CẤU TRÚC DỰ ÁN:
-src:
-   components:
-           chứa các components đã được chia nhỏ, để dễ sử dụng, bảo trì, có thể tái sử dụng, 
            code gọn hơn, giữ cho code gọn, có tổ chức,...
-   utils:
-           chứa lớp tiện ích xử lý logic: lấy dữ liệu từ excel
-   constants:
-           chứa data ảo để web khi mở lên trông đẹp mắt hơn, các cột trong file excel
-   hooks:
-           chứa custom hook để xử lý excel gọn gàng hơn

HƯỚNG DẪN THỰC THI:
- chạy lệnh "npm install"
- chạy lệnh "npm run dev"