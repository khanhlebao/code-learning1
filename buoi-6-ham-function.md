# 🧑‍🏫 Buổi 6: Hàm (Function)

## 🎯 Mục tiêu buổi học
- Biết hàm là gì và vì sao nên dùng.
- Biết cách khai báo và gọi hàm.
- Biết truyền tham số và trả về kết quả.

---

## 🧠 1. Hàm là gì?

- Hàm là một nhóm lệnh được đặt tên để thực hiện một nhiệm vụ cụ thể.
- Có thể gọi lại nhiều lần, giúp code ngắn gọn, dễ hiểu và tái sử dụng.

---

## 🛠️ 2. Cách khai báo hàm

```js
function tenHam() {
  // nội dung
}
```

### Ví dụ:

```js
function chao() {
  console.log("Xin chào bạn!");
}
chao(); // gọi hàm
```

---

## 📥 3. Hàm có tham số

- Tham số là dữ liệu truyền vào hàm khi gọi.

```js
function chaoTen(ten) {
  console.log("Chào " + ten);
}
chaoTen("An");
```

---

## 📤 4. Hàm trả về kết quả (`return`)

```js
function tinhTong(a, b) {
  return a + b;
}

let kq = tinhTong(3, 5);
console.log("Tổng là:", kq);
```

---

## ➡️ 5. Hàm mũi tên (Arrow Function)

- Là cách viết hàm ngắn gọn hơn, thường dùng trong ES6+

```js
const nhan = (a, b) => {
  return a * b;
};
console.log(nhan(4, 5));
```

---

## 🧪 Bài tập thực hành

### Bài 1: Viết hàm chào

```js
function chao() {
  console.log("Chào mừng bạn đến lớp học JavaScript!");
}
chao();
```

---

### Bài 2: Viết hàm tính bình phương

```js
function binhPhuong(x) {
  return x * x;
}
console.log(binhPhuong(6)); // 36
```

---

### Bài 3: Viết hàm kiểm tra số chẵn

```js
function laChan(n) {
  return n % 2 === 0;
}
console.log(laChan(4)); // true
console.log(laChan(5)); // false
```

---

### Bài 4: Hàm tính tổng từ 1 đến n

```js
function tongTu1DenN(n) {
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tong += i;
  }
  return tong;
}
console.log(tongTu1DenN(10)); // 55
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| Hàm là gì? | Nhóm lệnh có thể tái sử dụng |
| Tham số | Dữ liệu truyền vào hàm |
| Kết quả | Dùng `return` để trả về |
| Gọi hàm | Viết tên hàm và truyền tham số nếu cần |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể giới thiệu thêm khái niệm “phạm vi biến trong hàm”.
- Khuyến khích học sinh tạo hàm xử lý logic đơn giản như kiểm tra năm nhuận, tìm số lớn nhất,...