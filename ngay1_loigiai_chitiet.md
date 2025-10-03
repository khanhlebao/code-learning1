
# 📝 Giải thích chi tiết bài tập – Ngày 1: Tổng quan JavaScript nâng cao

---

## 🧩 Bài 1: Phân tích hoisting

```js
function test() {
  console.log(a);
  var a = 10;
}
test();
```

✅ **Kết quả:** `undefined`

### 🔍 Giải thích:
- Biến `a` được khai báo bằng `var`, nên **bị hoisted** (kéo khai báo lên đầu function).
- Tuy nhiên, **giá trị gán `a = 10` không bị hoisted**.
- Khi chạy `console.log(a)`, `a` đã được khai báo nhưng **chưa có giá trị** → mặc định là `undefined`.

💡 Bạn nên tránh viết như vậy để giảm lỗi, hãy luôn khai báo biến ở đầu scope.

---

## 🧩 Bài 2: TDZ (Temporal Dead Zone)

```js
{
  console.log(name);
  let name = "Alice";
}
```

❌ **Kết quả:** `ReferenceError`

### 🔍 Giải thích:
- `let name` được hoisted, nhưng nằm trong **TDZ** từ đầu block `{}` đến dòng khai báo `let name = "Alice";`.
- Trong khoảng thời gian đó, bạn **không được truy cập `name`**, nếu cố gắng sẽ nhận lỗi.

📌 Đây là lý do tại sao nên luôn khai báo biến bằng `let`/`const` trước khi sử dụng.

---

## 🧩 Bài 3: Lexical Scope

```js
let count = 1;
function outer() {
  let count = 2;
  return function inner() {
    console.log(count);
  };
}
const fn = outer();
fn();
```

✅ **Kết quả:** `2`

### 🔍 Giải thích:
- Khi `inner()` được tạo ra bên trong `outer()`, nó **"nhớ" môi trường nơi nó được định nghĩa**.
- Trong môi trường đó, `count = 2`.
- Dù `fn()` được gọi ở bên ngoài, `inner()` vẫn **truy cập biến `count` bên trong `outer()`** → in ra `2`.

💡 Đây là một ví dụ rõ ràng về **closure** – hàm nhớ môi trường định nghĩa của nó.

---

## 🧩 Bài 4: Viết `createCounter()`

### Yêu cầu:
Tạo một function `createCounter` trả về 1 hàm, mỗi lần gọi thì tăng biến `count` lên 1.

```js
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### ✅ Giải pháp:

```js
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}
```

### 🔍 Giải thích:
- `count` là biến **nội bộ** trong `createCounter()`.
- `return function() { ... }` là một **closure**, có quyền truy cập biến `count` dù `createCounter` đã kết thúc.
- Mỗi lần gọi `counter()`, `count` tăng lên và trả về kết quả.

📌 Đây là kỹ thuật hay dùng trong:
- Đếm số lần nhấn nút
- Tạo ID tự động
- Tạo hàm có trạng thái riêng (stateful function)

---

✅ Bạn đã nắm được cách JS xử lý biến, phạm vi và hoisting qua các bài tập trên. Hãy thử tự viết lại các ví dụ theo cách riêng để ghi nhớ lâu hơn nhé!
