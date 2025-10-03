# 🧑‍🏫 Buổi 3: Toán Tử và Biểu Thức

## 🎯 Mục tiêu buổi học
- Hiểu các loại toán tử trong JavaScript.
- Biết cách sử dụng biểu thức trong tính toán và so sánh.
- Làm quen với toán tử logic (`&&`, `||`, `!`).

---

## 🔢 1. Toán tử số học (Arithmetic Operators)

| Toán tử | Tác dụng | Ví dụ |
|---------|----------|--------|
| `+`     | Cộng     | `a + b` |
| `-`     | Trừ      | `a - b` |
| `*`     | Nhân     | `a * b` |
| `/`     | Chia     | `a / b` |
| `%`     | Chia lấy dư | `a % b` |

```js
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

---

## 🔍 2. Toán tử so sánh (Comparison Operators)

| Toán tử | Tác dụng | Ví dụ |
|---------|----------|--------|
| `==`    | So sánh bằng (không so kiểu) | `5 == "5"` → `true` |
| `===`   | So sánh bằng (có so kiểu)    | `5 === "5"` → `false` |
| `!=`    | Khác                           | `5 != 6` → `true` |
| `!==`   | Khác cả giá trị và kiểu        | `5 !== "5"` → `true` |
| `>`     | Lớn hơn                        | `5 > 3` |
| `<`     | Nhỏ hơn                        | `5 < 6` |
| `>=`    | Lớn hơn hoặc bằng              | `5 >= 5` |
| `<=`    | Nhỏ hơn hoặc bằng              | `3 <= 4` |

---

## 📝 3. Toán tử gán (Assignment)

```js
let x = 10;
x += 5; // x = x + 5 → x = 15
x *= 2; // x = x * 2 → x = 30
```

---

## ⚙️ 4. Toán tử logic (Logical Operators)

| Toán tử | Tác dụng | Ví dụ |
|---------|----------|--------|
| `&&`    | Và (AND) | `true && false` → `false` |
| `||`    | Hoặc (OR) | `true || false` → `true` |
| `!`     | Phủ định (NOT) | `!true` → `false` |

```js
let tuoi = 20;
let laHocSinh = true;

if (tuoi >= 18 && laHocSinh) {
  console.log("Bạn là học sinh trưởng thành");
}
```

---

## 🧪 Bài tập thực hành

### Bài 1: Tính toán đơn giản
Tính tổng, hiệu, tích, chia, chia lấy dư của 2 số

```js
let a = 15;
let b = 4;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);
console.log("Dư:", a % b);
```

---

### Bài 2: So sánh 2 số

```js
let x = 8;
let y = "8";

console.log(x == y);  // true
console.log(x === y); // false
```

---

### Bài 3: Kiểm tra điều kiện

```js
let diem = 9;

if (diem >= 8) {
  console.log("Giỏi");
} else if (diem >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
```

---

### Bài 4: Dùng toán tử logic

```js
let tuoi = 17;
let coTheThiGPLX = (tuoi >= 18 && tuoi <= 60);
console.log("Được thi GPLX?", coTheThiGPLX);
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| Toán tử số học | `+`, `-`, `*`, `/`, `%` |
| So sánh | `==`, `===`, `!=`, `>`, `<`, ... |
| Toán tử gán | `=`, `+=`, `-=`, ... |
| Toán tử logic | `&&`, `||`, `!` |
| Ứng dụng | Dùng trong biểu thức và điều kiện `if` |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể yêu cầu học sinh thử thêm các ví dụ logic như kiểm tra độ tuổi, điều kiện học sinh nhận học bổng,...