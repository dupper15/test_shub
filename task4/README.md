# README

## Cách thực hiện
- Tạo **function** để **GET data**.  
- Tạo **function** để **POST data**  
  - Method: `POST`  
  - Headers: `Content-Type`, `Authorization: Bearer <token>` (token lấy từ dữ liệu GET).  
- Trích xuất **data**, **query**, **token** từ dữ liệu GET.  
- Tính **prefix sum** cho loại 1.  
- Tính **prefix sum đặc biệt** cho loại 2 (vị trí lẻ chuyển thành số âm).  
- Sử dụng 2 prefix sum (độ phức tạp `O(n)`), duyệt qua query (độ phức tạp `O(q)`).  
  - Kiểm tra `type` để tính kết quả và thêm vào mảng `results`.  
- Gửi mảng `results` vào hàm `postOutput`.  

---

## Hướng dẫn thực thi
Chạy lệnh sau trong terminal:  
```bash
node index.js
