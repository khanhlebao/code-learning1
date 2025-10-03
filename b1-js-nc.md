# 📘 Buổi 1: Tổng quan JavaScript Nâng Cao

## 🎯 Mục tiêu
Hiểu cặn kẽ cách JavaScript xử lý biến, hàm, phạm vi, và ngữ cảnh thực thi. Nắm rõ:
- Scope (phạm vi biến)
- Hoisting (cơ chế kéo lên đầu)
- Strict mode (chế độ nghiêm ngặt)
- Lexical Environment (môi trường từ vựng)
- Temporal Dead Zone (TDZ)
- Execution Context (bối cảnh thực thi)


## 1. 🔍 Scope (Phạm vi biến)

### ✅ Khái niệm:
"Scope" là nơi mà một biến có thể được truy cập.

### 📚 Các loại scope trong JavaScript:

| Loại scope    | Khai báo bằng | Phạm vi               | Ghi chú                                 |
|---------------|----------------|------------------------|------------------------------------------|
| Global Scope  | Bất kỳ         | Toàn bộ chương trình  | Biến toàn cục, mọi nơi đều dùng được    |
| Function Scope| `var`          | Trong hàm             | Biến chỉ sống trong thân hàm            |
| Block Scope   | `let`, `const` | Trong `{}`            | An toàn hơn, chỉ sống trong khối        |

### 🧪 Ví dụ:

```js
function demo() {
  var a = 1; // Function Scope

  if (true) {
    let b = 2;      // Block Scope
    const c = 3;    // Block Scope
    console.log(b, c); // ✅ 2 3
  }

  console.log(a); // ✅ 1
  // console.log(b, c); ❌ ReferenceError
}
```

## 2. 🎣 Hoisting (Cơ chế kéo lên đầu)

### ✅ Khái niệm:
Khi JavaScript biên dịch mã, nó sẽ "kéo" các khai báo biến và hàm lên đầu scope hiện tại (không kéo giá trị gán!).

### 🧪 Ví dụ với `var`:

```js
console.log(a); // ✅ undefined
var a = 5;
```

**Giải thích:** JavaScript hiểu như:
```js
var a;
console.log(a); // undefined
a = 5;
```

### 🧪 Ví dụ với `function`:

```js
foo(); // ✅ chạy được

function foo() {
  console.log("Xin chào!");
}
```

## 3. 🚨 Strict Mode (Chế độ nghiêm ngặt)

### ✅ Khái niệm:
Khi bạn thêm `"use strict";` vào đầu file/hàm, JavaScript sẽ ép bạn viết code chặt chẽ hơn, tránh lỗi tiềm ẩn.

### 🧪 Ví dụ:

```js
"use strict";

x = 10; // ❌ ReferenceError: x is not defined
```

## 4. 🧠 Lexical Environment (Môi trường từ vựng)

### ✅ Khái niệm:
Lexical Environment là nơi xác định biến được truy cập trong hàm – dựa trên **vị trí khi viết mã**, **không phải khi gọi**.

### 🧪 Ví dụ:

```js
let a = 1;

function outer() {
  let b = 2;

  function inner() {
    console.log(a, b);
  }

  return inner;
}

const fn = outer();
fn(); // ✅ 1 2
```

## 5. ⏳ TDZ – Temporal Dead Zone (Vùng chết tạm thời)

### ✅ Khái niệm:
Biến được khai báo bằng `let`/`const` sẽ bị "treo" trong vùng TDZ từ lúc scope bắt đầu đến lúc gặp khai báo.

### 🧪 Ví dụ:

```js
{
  // TDZ bắt đầu từ đây
  // console.log(name); ❌ ReferenceError
  let name = "Minh Quân"; // TDZ kết thúc
}
```

## 6. ⚙️ Execution Context (Bối cảnh thực thi)

### ✅ Khái niệm:
Mỗi khi JS chạy một hàm, nó tạo ra một **Execution Context (EC)** gồm:

- **Variable Environment**: nơi chứa biến nội bộ (`let`, `const`, `var`)
- **Scope Chain**: để tìm các biến từ cha
- **`this` binding**: sẽ học sau
- **Lexical Environment**: như đã nói ở trên

### 🧪 Ví dụ:

```js
let name = "world";

function greet() {
  let text = "Hello " + name;
  console.log(text);
}

greet(); // ✅ Hello world
```


## 🧪 Bài tập

### 🧩 Bài 1: Phân tích hoisting
```js
function test() {
  console.log(a);
  var a = 10;
}
test();
```

### 🧩 Bài 2: TDZ
```js
{
  console.log(name);
  let name = "Alice";
}
```

### 🧩 Bài 3: Lexical Scope
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

### 🧩 Bài 4: Viết `createCounter()`
```js
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

👉 Hãy tự viết function `createCounter` sao cho khi gọi `counter()` nhiều lần, kết quả sẽ tăng dần.

---

## 📌 Tổng kết bài học

Hôm nay bạn đã học được:

✅ **Scope** – Phạm vi sống của biến: global, function, block  
✅ **Hoisting** – Cách JS kéo khai báo lên đầu trước khi chạy  
✅ **Strict Mode** – Bắt lỗi tốt hơn, ngăn bạn viết code nguy hiểm  
✅ **Lexical Environment** – Cách JS nhớ được biến nhờ ngữ cảnh viết mã  
✅ **TDZ** – Không truy cập được `let/const` trước khi khai báo  
✅ **Execution Context** – JS chạy mỗi hàm như tạo ra "ngăn nhớ tạm" chứa biến và hàm

---

## ❓ Câu hỏi ôn tập

1. Scope trong JavaScript là gì? Có bao nhiêu loại?
2. `var`, `let`, `const` khác nhau ra sao về phạm vi và hoisting?
3. Chế độ `"use strict"` có tác dụng gì?
4. Biến `let` bị lỗi `ReferenceError` là do đâu?
5. Vì sao `inner()` trong ví dụ lại in ra được giá trị từ `outer()`?
6. Execution Context là gì? Nó chứa những gì?
7. Hãy giải thích hoisting bằng ví dụ bạn tự viết ra.
8. Vì sao nên hạn chế dùng `var` trong thực tế?

---

👉 Hãy ôn lại các ví dụ và thử viết lại chúng mà không cần nhìn đáp án.  
🧠 Ghi chú lại phần nào bạn thấy khó hiểu để hỏi lại vào buổi học sau.
