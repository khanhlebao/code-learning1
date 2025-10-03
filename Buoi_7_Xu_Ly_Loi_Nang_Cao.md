
# 🧠 Buổi 7: Xử lý lỗi nâng cao trong JavaScript

## 🎯 Mục tiêu học tập
- Biết cách bắt lỗi bằng `try/catch` và sử dụng `throw`.
- Tạo lỗi tùy chỉnh (Custom Error).
- Xử lý lỗi bất đồng bộ trong Promise và Async/Await.

---

## 📘 1. `try/catch` – Bắt lỗi đồng bộ

### ✅ Cú pháp:
```js
try {
  // đoạn code có thể gây lỗi
} catch (error) {
  // xử lý lỗi
}
```

### ✅ Ví dụ:
```js
try {
  let a = b + 1; // b chưa khai báo → lỗi
} catch (err) {
  console.error("Lỗi xảy ra:", err.message);
}
```

> ⚠️ `try/catch` chỉ hoạt động với lỗi đồng bộ.

---

## 📘 2. `throw` – Tự tạo lỗi

### ✅ Dùng khi muốn ngắt luồng chương trình với thông báo cụ thể.

```js
function kiemTraTuoi(tuoi) {
  if (tuoi < 0) {
    throw new Error("Tuổi không hợp lệ!");
  }
  return `Tuổi bạn là ${tuoi}`;
}

try {
  console.log(kiemTraTuoi(-5));
} catch (e) {
  console.error(e.message); // Tuổi không hợp lệ!
}
```

---

## 📘 3. Custom Error – Lỗi tùy chỉnh

### ✅ Tạo class kế thừa `Error`

```js
class LoiDangNhap extends Error {
  constructor(message) {
    super(message);
    this.name = "LoiDangNhap";
  }
}

function dangNhap(user) {
  if (!user) {
    throw new LoiDangNhap("Không có thông tin đăng nhập");
  }
}

try {
  dangNhap(null);
} catch (err) {
  console.log(err.name); // LoiDangNhap
  console.log(err.message); // Không có thông tin đăng nhập
}
```

---

## 📘 4. Xử lý lỗi bất đồng bộ

### ✅ Với Promise:
```js
new Promise((resolve, reject) => {
  reject("Lỗi rồi!");
})
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); // Lỗi rồi!
```

### ✅ Với async/await:
```js
async function layDuLieu() {
  try {
    throw new Error("Lỗi từ async");
  } catch (e) {
    console.error(e.message); // Lỗi từ async
  }
}

layDuLieu();
```

---

## 📌 Tổng kết

| Khái niệm           | Mô tả                                                        |
|---------------------|--------------------------------------------------------------|
| try/catch           | Bắt lỗi khi code ném ra lỗi                                  |
| throw               | Tự tạo lỗi để ngắt chương trình                              |
| Custom Error        | Tự định nghĩa loại lỗi cụ thể                                |
| Xử lý lỗi async     | Promise dùng `.catch`, async/await dùng `try/catch`          |

---

## ❓ Câu hỏi ôn tập

1. Sự khác nhau giữa `throw` và `return`?
2. Vì sao `try/catch` không hoạt động với lỗi bất đồng bộ?
3. Cách tạo custom error class?
4. Làm sao để xử lý lỗi khi dùng async/await?
5. Ưu điểm của việc tạo custom error?

---

## 🧪 Bài tập thực hành

### Bài 1:
Viết hàm kiểm tra chia 2 số, nếu mẫu số bằng 0 thì `throw` lỗi.

### Bài 2:
Tạo custom error `LoiNhapLieu` và ném ra nếu input không phải số.

### Bài 3:
Tạo Promise bị `reject` sau 2s → bắt lỗi bằng `.catch()`.

### Bài 4:
Viết hàm async `goiAPI` giả lập lỗi bằng `throw`, bắt lỗi bằng `try/catch`.

### Bài 5:
Tạo form giả (object), nếu thiếu `email` hoặc `password`, ném lỗi riêng cho từng trường bằng class lỗi riêng biệt.

---
