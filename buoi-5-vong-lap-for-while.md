# 🧑‍🏫 Buổi 5: Vòng Lặp `for` và `while`

## 🎯 Mục tiêu buổi học
- Hiểu được vòng lặp là gì và khi nào nên sử dụng.
- Biết cách dùng vòng lặp `for` và `while`.
- Làm quen với cách đếm và lặp lại hành động.

---

## 🔁 1. Vòng lặp là gì?

- Vòng lặp cho phép thực hiện lặp đi lặp lại một đoạn mã nhiều lần.
- Giúp viết code ngắn gọn hơn, tránh trùng lặp.

---

## 🔄 2. Cấu trúc vòng lặp `for`

```js
for (khởi tạo; điều kiện; cập nhật) {
  // nội dung lặp
}
```

### Ví dụ:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Lần thứ " + i);
}
```

---

## 🔂 3. Cấu trúc vòng lặp `while`

```js
while (điều kiện) {
  // nội dung lặp
}
```

### Ví dụ:

```js
let i = 1;
while (i <= 5) {
  console.log("While lần " + i);
  i++;
}
```

---

## ⚖️ 4. So sánh `for` và `while`

| Loại vòng lặp | Khi nào dùng |
|---------------|--------------|
| `for`         | Biết trước số lần lặp |
| `while`       | Không biết trước số lần lặp, chỉ dừng khi điều kiện sai |

---

## 🧪 Bài tập thực hành

### Bài 1: In các số từ 1 đến 10

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

### Bài 2: In số chẵn từ 2 đến 20

```js
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
```

---

### Bài 3: Tính tổng từ 1 đến 100

```js
let tong = 0;
for (let i = 1; i <= 100; i++) {
  tong += i;
}
console.log("Tổng từ 1 đến 100 là:", tong);
```

---

### Bài 4: Vòng lặp `while` yêu cầu nhập đúng

```js
let nhap = "";
while (nhap !== "ok") {
  nhap = prompt("Gõ 'ok' để tiếp tục:");
}
alert("Cảm ơn bạn!");
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| `for` | Lặp khi biết trước số lần |
| `while` | Lặp khi chưa biết trước số lần |
| Mục đích | Giúp tự động hóa việc lặp lại hành động |

---

## 📌 Ghi chú thêm cho giáo viên
- Khuyến khích học sinh thay đổi giá trị điều kiện để quan sát kết quả khác nhau.
- Có thể giới thiệu thêm về `do...while` ở buổi sau.