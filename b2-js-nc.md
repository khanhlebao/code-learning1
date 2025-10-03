
# 📘 Buổi 2: Closure & Execution Context trong JavaScript

---

## I. Execution Context là gì?

### 1. Khái niệm:
Execution Context (ngữ cảnh thực thi) là môi trường mà trong đó đoạn mã JavaScript được thực thi.

Mỗi khi thực thi một đoạn mã, JavaScript tạo ra một Execution Context để xử lý đoạn mã đó.

Execution Context bao gồm 3 thành phần chính:
- **Variable Object (VO)**: Nơi lưu trữ các biến, hàm, và tham số của hàm.
- **Scope Chain**: Chuỗi các phạm vi (scope) để tìm biến.
- **This Binding**: Biến `this` được gán tương ứng với ngữ cảnh.

---

### 2. Các loại Execution Context:
| Loại | Mô tả |
|------|------|
| Global Execution Context | Tạo ra đầu tiên khi file JS bắt đầu chạy. Chỉ có một cái duy nhất. |
| Function Execution Context | Mỗi khi hàm được gọi, một Execution Context mới được tạo. |
| Eval Execution Context | Được tạo khi dùng hàm `eval()`. Ít dùng, không nên dùng. |

---

### 3. Call Stack hoạt động ra sao?
JavaScript chạy theo mô hình **Call Stack**:
- Stack = ngăn xếp chứa các Execution Context
- Khi một hàm được gọi → context của nó được "đẩy" vào stack
- Khi hàm kết thúc → context được "gỡ bỏ"

#### Ví dụ minh họa:
```js
function greet() {
  console.log("Xin chào");
}
function start() {
  greet();
  console.log("Bắt đầu học!");
}
start();
```
Quá trình:
1. Global Context được tạo
2. Gọi `start()` → tạo context cho `start`
3. Trong `start`, gọi `greet()` → tạo context cho `greet`
4. `greet()` kết thúc → context của nó bị loại khỏi stack
5. `start()` kết thúc → loại khỏi stack

---

## II. Closure là gì?

### 1. Định nghĩa
**Closure** là một hàm có thể "nhớ" và truy cập đến các biến trong phạm vi bên ngoài của nó, ngay cả khi hàm đó đã được thực thi bên ngoài phạm vi đó.

📌 Nói cách khác, closure giúp bạn giữ lại được các biến cục bộ ngay cả khi hàm cha đã kết thúc.

---

### 2. Ví dụ cơ bản:
```js
function taoBoDem() {
  let dem = 0;
  return function () {
    dem++;
    console.log(`Giá trị: ${dem}`);
  };
}

const boDem = taoBoDem();
boDem(); // 1
boDem(); // 2
```

🧠 Giải thích:
- `taoBoDem()` tạo ra một biến `dem` cục bộ.
- Hàm trả về bên trong vẫn truy cập được `dem` nhờ closure.
- Dù `taoBoDem()` đã chạy xong, closure vẫn giữ `dem` sống trong bộ nhớ.

---

### 3. Ứng dụng của Closure:
| Tình huống | Lợi ích của Closure |
|-----------|---------------------|
| Ghi nhớ trạng thái | Ghi nhớ biến qua nhiều lần gọi hàm |
| Ẩn dữ liệu | Bảo vệ biến không bị truy cập trực tiếp từ bên ngoài |
| Tạo các module | Dùng trong kiến trúc module hóa |
| Async code | Kết hợp closure với bất đồng bộ như setTimeout |

---

## III. Closure để bảo vệ dữ liệu (Module Pattern)

### Ví dụ:
```js
function CounterModule() {
  let count = 0;
  return {
    tang() {
      count++;
      return count;
    },
    giam() {
      count--;
      return count;
    },
    lay() {
      return count;
    }
  };
}

const counter = CounterModule();
counter.tang(); // 1
console.log(counter.count); // undefined ✅
```

🧠 Giải thích:
- `count` không bị truy cập được từ bên ngoài, nhưng vẫn có thể thao tác thông qua các hàm closure.
- Closure giúp giữ cho dữ liệu `private` như trong OOP.

---

## IV. Closure trong bất đồng bộ (setTimeout)

### Sai lầm phổ biến:
```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```
👉 Kết quả: `4`, `4`, `4`

📌 Giải thích:
- Biến `i` khai báo bằng `var` không tạo phạm vi mới trong mỗi vòng lặp.
- Tất cả các callback của `setTimeout` dùng chung một `i`.

---

### Cách sửa dùng Closure (IIFE):
```js
for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
```
✅ Kết quả: `1`, `2`, `3`

### Cách sửa dùng `let`:
```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```
✅ `let` có block scope, tạo biến riêng mỗi vòng lặp

---

## V. Bài tập

### Bài 1: Viết hàm ghi nhớ tổng cộng dồn
```js
const tinhTong = taoTinhTong();
tinhTong(5); // 5
tinhTong(10); // 15
```
✅ Giải:
```js
function taoTinhTong() {
  let tong = 0;
  return function (so) {
    tong += so;
    console.log(tong);
  };
}
```

---

### Bài 2: Viết closure tạo người chơi ghi điểm
```js
const player1 = taoNguoiChoi('Alice');
player1.tangDiem(); // Alice: 1
player1.tangDiem(); // Alice: 2
```
✅ Giải:
```js
function taoNguoiChoi(ten) {
  let diem = 0;
  return {
    tangDiem() {
      diem++;
      console.log(`${ten}: ${diem}`);
    }
  };
}
```

---

## VI. Ôn tập nhanh

1. Execution Context là gì và có bao nhiêu loại?
2. Closure là gì? Khi nào được tạo ra?
3. Tại sao `setTimeout` với `var` in ra cùng một giá trị?
4. Cách dùng `let` và IIFE để giải quyết?
5. Ứng dụng Closure trong việc ẩn biến?

---

## VII. Tổng kết

| Chủ đề | Ghi nhớ |
|--------|---------|
| Execution Context | Mỗi khi code chạy đều cần ngữ cảnh thực thi riêng |
| Closure | Hàm giữ lại được phạm vi nơi nó sinh ra |
| Bảo vệ biến | Closure giúp bạn tạo "private variables" |
| Async | Closure là chìa khóa kiểm soát bất đồng bộ |

---

## VIII. Bài tập về nhà

1. Tạo module `calculator` có các phương thức:
   - `add(number)`, `sub(number)`, `get()`
   - Không cho phép truy cập biến nội bộ từ bên ngoài

2. Dùng vòng lặp `for` với `setTimeout` để in số 1 → 5 mỗi giây.
   - Viết 2 cách: dùng `let` và dùng Closure (IIFE)
