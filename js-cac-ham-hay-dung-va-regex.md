
# 🧠 Tổng hợp các hàm JavaScript thường dùng

Trong quá trình lập trình, chúng ta thường xuyên sử dụng các hàm có sẵn trong JavaScript để thao tác với chuỗi, số, mảng, đối tượng, cũng như kiểm tra điều kiện. Dưới đây là danh sách các hàm phổ biến, kèm theo giải thích và ví dụ minh họa dễ hiểu.

---

## 📌 I. Các hàm xử lý Chuỗi (String)

---

### 1. `split()`

#### 👉 Mục đích:
Tách chuỗi thành mảng các chuỗi con, sử dụng **ký tự phân tách** được chỉ định.

#### 🧠 Giải thích:
- Hàm `split()` không làm thay đổi chuỗi gốc.
- Trả về một **mảng mới** gồm các phần tử chuỗi.
- Nếu không truyền gì (`split()`), mặc định không chia.

#### ✅ Ví dụ:
```js
"hello world".split(" ") // ["hello", "world"]
"apple,banana,orange".split(",") // ["apple", "banana", "orange"]
```

#### ⚠️ Lưu ý:
```js
"abc".split("") // ["a", "b", "c"] — tách từng ký tự
```

---

### 2. `toUpperCase()` / `toLowerCase()`

#### 👉 Mục đích:
Chuyển đổi toàn bộ chữ cái trong chuỗi sang chữ hoa (`toUpperCase()`) hoặc chữ thường (`toLowerCase()`).

#### 🧠 Giải thích:
- Không làm thay đổi chuỗi gốc.
- Thường dùng để **chuẩn hóa dữ liệu** trước khi so sánh.

#### ✅ Ví dụ:
```js
"hello".toUpperCase() // "HELLO"
"HELLO".toLowerCase() // "hello"
```

#### ⚠️ Lưu ý:
So sánh không phân biệt hoa thường nên dùng:
```js
a.toLowerCase() === b.toLowerCase()
```

---

### 3. `trim()`

#### 👉 Mục đích:
Loại bỏ **khoảng trắng ở đầu và cuối** chuỗi (bao gồm cả tab, xuống dòng).

#### 🧠 Giải thích:
- Không xóa khoảng trắng ở giữa chuỗi.
- Giúp chuẩn hóa dữ liệu đầu vào từ người dùng.

#### ✅ Ví dụ:
```js
"   Hello World  ".trim() // "Hello World"
```

#### ⚠️ Biến thể:
- `trimStart()` (hoặc `trimLeft()`): Xóa khoảng trắng đầu chuỗi.
- `trimEnd()` (hoặc `trimRight()`): Xóa khoảng trắng cuối chuỗi.

---

### 4. `includes()`

#### 👉 Mục đích:
Kiểm tra xem một chuỗi có **chứa chuỗi con** được chỉ định hay không.

#### 🧠 Giải thích:
- Trả về `true` hoặc `false`.
- Phân biệt chữ hoa – chữ thường.

#### ✅ Ví dụ:
```js
"JavaScript".includes("Script") // true
"hello".includes("HELLO") // false
```

#### ✅ Kiểm tra điều kiện:
```js
if (email.includes("@")) {
  console.log("Email hợp lệ!");
}
```

---

### 5. `replace()`

#### 👉 Mục đích:
Thay thế phần đầu tiên **khớp** trong chuỗi bằng một chuỗi khác.

#### 🧠 Giải thích:
- Mặc định chỉ thay **một lần đầu tiên**.
- Muốn thay **nhiều chỗ**, cần dùng **biểu thức chính quy với flag `g`**.

#### ✅ Ví dụ cơ bản:
```js
"Hello JS".replace("JS", "JavaScript") // "Hello JavaScript"
```

#### ✅ Dùng biểu thức chính quy:
```js
"1-2-3-4".replace(/-/g, "/") // "1/2/3/4"
```

---

### 6. `substring(start, end)`

#### 👉 Mục đích:
Trích xuất **chuỗi con** từ chuỗi ban đầu, bắt đầu tại chỉ số `start` và kết thúc **trước** chỉ số `end`.

#### 🧠 Giải thích:
- Nếu `start > end` → JS sẽ tự động hoán đổi.
- Nếu `end` không truyền → cắt đến hết chuỗi.

#### ✅ Ví dụ:
```js
"abcdef".substring(1, 4) // "bcd"
"abcdef".substring(4)    // "ef"
```

#### ⚠️ So sánh với `slice()`:
- `substring()` không nhận số âm.
- `slice()` nhận số âm để đếm từ cuối chuỗi.

```js
"abcdef".slice(-3) // "def"
```

---

## 📌 II. Các hàm xử lý Mảng (Array)

---

### 1. `map()`

#### 👉 Mục đích:
Tạo **mảng mới** bằng cách áp dụng hàm xử lý lên **từng phần tử** của mảng ban đầu.

#### 🧠 Giải thích:
- Không làm thay đổi mảng gốc.
- Trả về một mảng mới với các giá trị đã được biến đổi.

#### ✅ Ví dụ:
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6]
```

---

### 2. `filter()`

#### 👉 Mục đích:
Tạo **mảng mới** chỉ gồm những phần tử **thỏa điều kiện** (predicate function) nhất định.

#### 🧠 Giải thích:
- Mỗi phần tử được đưa vào hàm kiểm tra (return true hoặc false).
- Những phần tử return `true` sẽ có mặt trong mảng kết quả.

#### ✅ Ví dụ:
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]
```

---

### 3. `reduce()`

#### 👉 Mục đích:
Tính toán và **rút gọn** mảng thành một **giá trị duy nhất** (tổng, tích, chuỗi, object, v.v.)

#### 🧠 Giải thích:
- Nhận vào một hàm xử lý (`callback`) và giá trị khởi tạo (`initialValue`).
- Hàm callback nhận 2 tham số chính: `accumulator` (tích lũy) và `currentValue`.

#### ✅ Ví dụ – Tính tổng:
```js
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6
```

---

### 4. `forEach()`

#### 👉 Mục đích:
Duyệt qua từng phần tử trong mảng, **thực thi hành động phụ (side-effect)** như log ra console, gọi API,...

#### 🧠 Giải thích:
- Không trả về gì (undefined).
- Không tạo mảng mới.

#### ✅ Ví dụ:
```js
const fruits = ["🍎", "🍌", "🍇"];
fruits.forEach(fruit => console.log(fruit));
// Output:
// 🍎
// 🍌
// 🍇
```

---

### 5. `find()` / `findIndex()`

#### 👉 Mục đích:
- `find()`: Tìm và trả về **phần tử đầu tiên** thỏa mãn điều kiện.
- `findIndex()`: Trả về **vị trí (index)** của phần tử đầu tiên thỏa điều kiện.

#### 🧠 Giải thích:
- Dừng lại ngay khi tìm thấy phần tử phù hợp đầu tiên.
- Trả về `undefined` hoặc `-1` nếu không tìm thấy.

#### ✅ Ví dụ:
```js
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

const result = users.find(user => user.age > 25);
console.log(result); // { name: "Bob", age: 30 }

const idx = users.findIndex(user => user.name === "Charlie");
console.log(idx); // 2
```

---

## 📌 III. Các hàm xử lý Số (Math)

### 1. `Math.round()`, `Math.floor()`, `Math.ceil()`
- `round`: Làm tròn gần nhất.
- `floor`: Làm tròn xuống.
- `ceil`: Làm tròn lên.

```js
Math.round(1.5) // 2
Math.floor(1.9) // 1
Math.ceil(1.1) // 2
```

### 2. `Math.random()`
Tạo số ngẫu nhiên từ 0 đến <1.

```js
Math.floor(Math.random() * 10) // [0..9]
```

### 3. `Math.max()`, `Math.min()`
Tìm giá trị lớn nhất / nhỏ nhất trong danh sách.

```js
Math.max(1, 5, 3) // 5
Math.min(1, 5, 3) // 1
```

---

## 📌 IV. Một số hàm tiện ích khác

### 1. `parseInt()` / `parseFloat()`
Chuyển chuỗi sang số nguyên / số thực.

```js
parseInt("42")     // 42
parseFloat("3.14") // 3.14
```

### 2. `typeof`
Kiểm tra kiểu dữ liệu của biến.

```js
typeof "abc" // "string"
typeof 123   // "number"
```

### 3. `Array.isArray()`
Kiểm tra biến có phải mảng không.

```js
Array.isArray([1, 2, 3]) // true
```
---

## 📌 V. Biểu thức chính quy

Biểu thức chính quy (viết tắt là regex) là một chuỗi ký tự đặc biệt dùng để **tìm kiếm**, **so khớp mẫu**, hoặc **thay thế** trong chuỗi văn bản.

Ví dụ:  
- Tìm tất cả email trong văn bản  
- Kiểm tra chuỗi có chứa số điện thoại hợp lệ  
- Loại bỏ ký tự đặc biệt khỏi chuỗi

---

## ✅ Cách tạo biểu thức chính quy trong JavaScript

Có 2 cách:

```js
const regex1 = /abc/;              // Dạng literal
const regex2 = new RegExp("abc");  // Dạng hàm RegExp
```

---

## ✅ Một số ký hiệu phổ biến trong regex

| Ký hiệu | Ý nghĩa |
|--------|---------|
| `.`     | Bất kỳ ký tự nào (trừ xuống dòng) |
| `*`     | Lặp lại 0 hoặc nhiều lần |
| `+`     | Lặp lại 1 hoặc nhiều lần |
| `?`     | Có hoặc không |
| `\`    | Ký tự thoát |
| `^`     | Bắt đầu chuỗi |
| `$`     | Kết thúc chuỗi |
| `[]`    | Tập hợp ký tự |
| `[^]`   | Phủ định tập hợp |
| `|`     | Hoặc |
| `()`    | Nhóm |

---

## ✅ Ví dụ cơ bản

### 1. Tìm tất cả chữ cái trong chuỗi
```js
const str = "abc123";
const result = str.match(/[a-z]/g); // ['a', 'b', 'c']
```

### 2. Kiểm tra chuỗi có phải là email
```js
const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
emailRegex.test("abc@example.com"); // true
```

### 3. Loại bỏ ký tự đặc biệt
```js
const clean = "Hello@#World!".replace(/[^a-zA-Z0-9 ]/g, "");
console.log(clean); // "HelloWorld"
```

---

## ✅ Một số flag (cờ) hữu dụng

| Flag | Ý nghĩa |
|------|--------|
| `g`  | global – tìm tất cả khớp |
| `i`  | ignoreCase – không phân biệt hoa thường |
| `m`  | multi-line – xử lý nhiều dòng |

```js
"hello HELLO".match(/hello/gi); // ["hello", "HELLO"]
```

---

## ✅ Một số ví dụ hay dùng

| Regex | Mục đích |
|-------|----------|
| `/\d+/g` | Tìm tất cả các số |
| `/\w+/g` | Tìm tất cả các từ (chữ + số) |
| `/\s+/g` | Tìm khoảng trắng |
| `/^\d{3}-\d{2}-\d{4}$/` | Định dạng số an sinh kiểu Mỹ 123-45-6789 |
| `/^.{8,}$/` | Kiểm tra chuỗi có ít nhất 8 ký tự |

---

## ✅ Tổng kết

| Nhóm hàm       | Mục đích chính                    |
|----------------|-----------------------------------|
| Chuỗi          | Cắt, nối, chuyển đổi, tìm kiếm    |
| Mảng           | Lặp, lọc, biến đổi, tính toán     |
| Số             | Làm tròn, tìm giá trị, ngẫu nhiên |
| Regex          | Kiểm tra, trích xuất, thay thế    |
| Khác           | Ép kiểu, kiểm tra kiểu            |
