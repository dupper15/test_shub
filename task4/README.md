CÁCH THỰC HIỆN:
- Tạo 1 function để get data
- Tạo 1 function để post data (đặt method post, thêm header với content type và authorization với bearer và token được get về)
- Trích xuất data, query, token từ dữ liệu get được
- Tính prefix sum cho loại 1 và prefix sum đặc biệt cho loại 2 (vị trí lẻ chuyển nó thành âm)
- Dùng 2 prefix sum đó (độ phức tạp O(n)), duyệt qua query (độ phức tạp O(q)) -> check type để tính result và thêm vào mảng results
- Gửi mảng results vào hàm postOutput

HƯỚNG DẪN THỰC THI:
- Dùng lệnh: "node index.js" vào terminal