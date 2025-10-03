# 🧑‍🏫 Buổi 4: Câu Lệnh Điều Kiện `if...else`

## 🎯 Mục tiêu buổi học
- Biết sử dụng câu lệnh điều kiện `if`, `else if`, `else`.
- Ra quyết định dựa trên điều kiện.
- Biết dùng biểu thức so sánh và logic trong điều kiện.

---

## 🧠 1. Cấu trúc điều kiện

### `if...else`

```js
if (điều_kiện) {
  // chạy khi điều kiện đúng
} else {
  // chạy khi điều kiện sai
}
```

### `if...else if...else`

```js
if (điều_kiện_1) {
  // nếu điều kiện 1 đúng
} else if (điều_kiện_2) {
  // nếu điều kiện 2 đúng
} else {
  // nếu không điều kiện nào đúng
}
```

---

## 🔍 2. Biểu thức điều kiện

| Loại biểu thức | Ví dụ | Ý nghĩa |
|----------------|-------|---------|
| So sánh số     | `a > b`, `a == b`, `a !== b` | So sánh giữa hai giá trị |
| Logic          | `&&`, `||`, `!` | Kết hợp điều kiện |

---

## 🧪 Bài tập thực hành

### Bài 1: Kiểm tra số âm hay dương

```js
let so = -3;

if (so >= 0) {
  console.log("Số dương");
} else {
  console.log("Số âm");
}
```

---

### Bài 2: Xếp loại học lực

```js
let diem = 7.5;

if (diem >= 8) {
  console.log("Giỏi");
} else if (diem >= 6.5) {
  console.log("Khá");
} else if (diem >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
```

---

### Bài 3: Kiểm tra tuổi vào lớp 1

```js
let tuoi = 6;

if (tuoi === 6) {
  console.log("Bạn đủ tuổi vào lớp 1");
} else {
  console.log("Bạn chưa đủ hoặc quá tuổi");
}
```

---

### Bài 4: Kiểm tra năm nhuận

```js
let nam = 2024;

if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log("Là năm nhuận");
} else {
  console.log("Không phải năm nhuận");
}
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| Câu lệnh điều kiện | `if`, `else if`, `else` |
| So sánh số | `>`, `<`, `===`, `!==`, ... |
| Logic | `&&`, `||`, `!` |
| Ứng dụng | Dùng ra quyết định theo điều kiện |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể yêu cầu học sinh viết thêm ví dụ như kiểm tra điểm tốt nghiệp, tuổi nghỉ hưu, thời tiết,...