
# Buổi 3: `this`, call, apply, bind trong JavaScript

## 1. Mở đầu
Trong buổi học này, chúng ta sẽ tìm hiểu rõ về từ khoá `this` trong JavaScript. Kiến thức này có vẻ khó ban đầu nhưng rất quan trọng, vì nó định nghĩa ai đang "gọi" hàm và ngữ cảnh xảy ra.

---

## 2. `this` trong JavaScript là gì?

`this` là từ khoá đại diện cho đối tượng (object) đang "sở hữu" hoặc "gọi" hàm đó. Giá trị của `this` được quyết định dựa trên **cách gọi hàm**, không phải nơi hàm được định nghĩa.

### 2.1 Trong hàm bình thường (non-strict mode)
```js
function show() {
  console.log(this);
}
show();
```
Khi gọi `show()` một cách độc lập, trong non-strict mode (không có 'use strict'), `this` mặc định là **`window`** (trên trình duyệt).

### 2.2 Trong strict mode
```js
'use strict';
function show() {
  console.log(this);
}
show();
```
Trong strict mode, nếu gọi hàm độc lập, `this` sẽ là **`undefined`** thay vì `window`. Điều này giúc ta tránh lỗi vô tình thay đổi biến toàn cục.

### 2.3 Trong method của object
```js
const person = {
  name: 'An',
  sayHi: function() {
    console.log('Hi, ' + this.name);
  }
};

person.sayHi();
```
Trong ví dụ này, hàm `sayHi` được gọi như **một method của object** `person`, nên `this` chỉ đến `person`.

### 2.4 Trong arrow function
```js
const person = {
  name: 'Binh',
  sayHi: () => {
    console.log('Hi, ' + this.name);
  }
};

person.sayHi();
```
Mặc dù hàm đang ở trong object, nhưng vì nó là **arrow function**, nên `this` **không là `person`**, mà nó nhìn ra ngoài (scope cha gần nhất). Trong trình duyệt, `this.name` trở thành `window.name` (thường undefined).

> **Ghi nhớ**: Arrow function **không có `this` riêng**, nó lấy theo bối cảnh được định nghĩa (lexical `this`).

---

## 3. Cách thay đổi `this`

JavaScript cung cấp ba hàm: `call()`, `apply()`, `bind()` giúp thay đổi giá trị của `this` khi gọi hàm.

### 3.1 `call()`
GọI hàm ngay lập tức và thay đổi `this`
```js
function greet() {
  console.log('Hi, ' + this.name);
}

const user = { name: 'Lan' };

greet.call(user); // Hi, Lan
```
- `greet.call(user)` gọi hàm `greet` và đặt `this = user`.

### 3.2 `apply()`
Giống `call()`, nhưng tham số truyền vào là **một mảng**
```js
function greet(msg) {
  console.log(msg + ', ' + this.name);
}

greet.apply(user, ['Hello']); // Hello, Lan
```
- Đặc biệt hữu ích khi ta muốn dùng tham số dưới dạng mảng (ví dụ: khi dùng `arguments`).

### 3.3 `bind()`
Trả về **một hàm mới** với `this` đã được đặt trước.
```js
const greetUser = greet.bind(user, 'Chào');
greetUser(); // Chào, Lan
```
- Không gọi ngay. Thích hợp khi cần trì hoãn hoặc truyền hàm làm callback.

---

## 4. Lỗi phổ biến khi dùng `this`

### 4.1 `this` trong callback mất ngữ cảnh
```js
const counter = {
  count: 0,
  inc: function() {
    setTimeout(function() {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

counter.inc();
```
Vì hàm trong `setTimeout` là hàm bình thường, `this` đối lại về `window` hoặc `undefined` (strict mode), không phải `counter`.

### Cách khắc phục:

#### a) Dùng arrow function (kế thừa `this` bên ngoài)
```js
inc: function() {
  setTimeout(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
```

#### b) Dùng `bind`
```js
setTimeout(function() {
  this.count++;
  console.log(this.count);
}.bind(this), 1000);
```

---

## 5. Bài tập thực hành

1. Tạo object `student` có thuộc tính `name`, viết method `sayHi()` dùng `this` để hiển thị tên.
2. Viết hàm `sayHi` độc lập, dùng `call()` để gọi với `student`.
3. Thêm tham số `msg` cho hàm, dùng `apply()` để truyền ['Hello'].
4. Tạo hàm mới được ràng buộc bằng `bind()` và gọi sau 2 giây bằng `setTimeout`.

---

## 6. Tổng kết
- `this` không dựa vào nơi hàm định nghĩa, mà dựa vào **cách gọi**.
- Arrow function **không có `this` riêng**, lấy theo bối cảnh.
- Dùng `call`, `apply`, `bind` để điều khiển rõ `this` khi cần thiết.