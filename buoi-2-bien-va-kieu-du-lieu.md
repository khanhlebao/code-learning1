# 🧑‍🏫 Buổi 2: Biến và Kiểu Dữ Liệu

## 🎯 Mục tiêu buổi học
- Hiểu biến là gì và tại sao cần dùng biến trong lập trình.
- Biết cách khai báo biến bằng `let` và `const`.
- Nắm các kiểu dữ liệu cơ bản trong JavaScript.
- Biết dùng `typeof` để kiểm tra kiểu dữ liệu.
- Làm quen với cách đặt tên biến đúng quy tắc.

---

## 📦 1. Biến là gì?

### 🧾 Khái niệm
Biến (variable) là một **tên đại diện cho vùng nhớ lưu trữ dữ liệu**. Mỗi khi ta cần lưu trữ và xử lý thông tin (như tên, tuổi, điểm số), ta sẽ gán thông tin đó vào biến.

### 🛠️ Khai báo biến

```js
let ten = "Lan";
const tuoi = 15;
```

| Từ khóa | Ý nghĩa |
|--------|---------|
| `let`  | Khai báo biến có thể thay đổi giá trị sau này |
| `const` | Khai báo biến cố định, không được gán lại giá trị khác |

> ⚠️ Nên dùng `const` khi giá trị không thay đổi, dùng `let` khi cần thay đổi sau này.

---

## 🧠 2. Quy tắc đặt tên biến

- Không bắt đầu bằng số (❌ `1ten`)
- Không chứa dấu cách hay ký tự đặc biệt, trừ `_` và `$`
- Không trùng với từ khóa của JavaScript (như `let`, `if`, `for`)
- Nên đặt tên **có ý nghĩa**, viết thường, dùng camelCase nếu nhiều từ:
  - Ví dụ: `diemTrungBinh`, `soLuongSanPham`

---

## 🔢 3. Các kiểu dữ liệu cơ bản trong JavaScript

| Kiểu dữ liệu | Ví dụ | Ý nghĩa |
|--------------|--------|-------------|
| `Number`     | `10`, `3.14` | Số (nguyên hoặc thực) |
| `String`     | `"Hello"` | Chuỗi ký tự |
| `Boolean`    | `true`, `false` | Đúng / Sai (thường dùng trong điều kiện) |
| `Undefined`  | `let x;` | Biến khai báo nhưng chưa có giá trị |
| `Null`       | `let x = null;` | Không có gì cả (rỗng có chủ ý) |
| `Array`      | `[1, 2, 3]` | Danh sách dữ liệu |
| `Object`     | `{ ten: "Lan", tuoi: 15 }` | Tập hợp dữ liệu có cấu trúc |

---

## 🔍 4. Dùng `typeof` để kiểm tra kiểu dữ liệu

```js
let a = 10;
let b = "Hello";

console.log(typeof a); // 👉 "number"
console.log(typeof b); // 👉 "string"
```

> ✅ `typeof` giúp kiểm tra loại dữ liệu của biến, rất hữu ích khi debug.

---

## 📝 5. Bài tập thực hành

### Bài 1: Khai báo thông tin cá nhân

Tạo 3 biến: tên, tuổi, điểm trung bình. In ra thông tin.

```js
let ten = "An";
let tuoi = 14;
let diemTB = 8.5;

console.log("Tên:", ten);
console.log("Tuổi:", tuoi);
console.log("Điểm:", diemTB);
```

---

### Bài 2: Kiểm tra kiểu dữ liệu bằng `typeof`

```js
console.log(typeof ten);    // "string"
console.log(typeof tuoi);   // "number"
console.log(typeof diemTB); // "number"
```

---

### Bài 3: Tạo biến chưa gán giá trị, rồi gán sau

```js
let so;
console.log(typeof so); // 👉 "undefined"

so = 100;
console.log(typeof so); // 👉 "number"
```

---

## ❓ 6. Câu hỏi ôn tập

1. Sự khác nhau giữa `let` và `const` là gì?
2. Có bao nhiêu kiểu dữ liệu cơ bản? Kể tên?
3. Khi nào nên dùng `typeof`?
4. Đặt tên biến `Điểm Trung Bình` sao cho đúng cú pháp JavaScript?

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| Biến là gì? | Tên đại diện lưu dữ liệu |
| Khai báo biến | Dùng `let`, `const` |
| Kiểu dữ liệu | Số, chuỗi, đúng/sai, undefined, null, mảng, object |
| Kiểm tra kiểu | Dùng `typeof` |
| Quy tắc đặt tên | Không bắt đầu bằng số, không chứa dấu cách, nên có ý nghĩa |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể yêu cầu học sinh thử tạo thêm các biến nâng cao như mảng, object.
- Giới thiệu thêm về `var` để phân biệt (không khuyến khích dùng).