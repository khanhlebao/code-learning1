# 🧑‍🏫 Buổi 7: Mảng (Array)

## 🎯 Mục tiêu buổi học
- Biết mảng là gì và cách khai báo.
- Truy cập phần tử trong mảng.
- Duyệt mảng bằng vòng lặp.
- Làm quen với các phương thức mảng thông dụng.

---

## 🧠 1. Mảng là gì?

- Mảng là một danh sách chứa nhiều giá trị (phần tử).
- Mỗi phần tử được đánh số từ 0 trở đi (chỉ số).

```js
let dsSo = [1, 2, 3, 4, 5];
let dsTen = ["An", "Bình", "Chi"];
```

---

## 🎯 2. Truy cập phần tử trong mảng

```js
let mang = [10, 20, 30];
console.log(mang[0]); // 10
console.log(mang[2]); // 30
```

> ⚠️ Lưu ý: Chỉ số bắt đầu từ 0.

---

## 🔁 3. Duyệt mảng

### Dùng `for`

```js
let ds = [1, 2, 3, 4];

for (let i = 0; i < ds.length; i++) {
  console.log("Phần tử:", ds[i]);
}
```

### Dùng `for...of`

```js
for (let so of ds) {
  console.log(so);
}
```

---

## 🧰 4. Một số phương thức mảng

| Phương thức | Tác dụng |
|-------------|----------|
| `push(x)`   | Thêm phần tử vào cuối |
| `pop()`     | Xóa phần tử cuối |
| `shift()`   | Xóa phần tử đầu |
| `unshift(x)`| Thêm phần tử vào đầu |
| `length`    | Trả về độ dài mảng |

```js
let mang = [1, 2];
mang.push(3);        // [1, 2, 3]
mang.pop();          // [1, 2]
console.log(mang.length); // 2
```

---

## 🧪 Bài tập thực hành

### Bài 1: Tạo mảng và in từng phần tử

```js
let dsTen = ["An", "Bình", "Chi"];
for (let ten of dsTen) {
  console.log("Tên:", ten);
}
```

---

### Bài 2: Tính tổng các số trong mảng

```js
let ds = [3, 5, 7];
let tong = 0;
for (let so of ds) {
  tong += so;
}
console.log("Tổng =", tong);
```

---

### Bài 3: Tìm số lớn nhất trong mảng

```js
let ds = [4, 9, 2, 7];
let max = ds[0];

for (let so of ds) {
  if (so > max) {
    max = so;
  }
}
console.log("Số lớn nhất:", max);
```

---

### Bài 4: Đảo ngược mảng

```js
let ds = [1, 2, 3];
let dao = ds.reverse();
console.log(dao); // [3, 2, 1]
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| Mảng là gì? | Danh sách các giá trị |
| Truy cập | Qua chỉ số `mang[i]` |
| Duyệt mảng | Dùng `for`, `for...of` |
| Phương thức | `push`, `pop`, `length`, ... |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể giới thiệu thêm `map`, `filter` nếu học sinh tiếp thu nhanh.
- Khuyến khích học sinh thử thao tác thêm vào mảng sau khi nhập từ prompt.