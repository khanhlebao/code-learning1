
# ❓ Câu hỏi ôn tập - Node.js & npm cơ bản

## 🧠 Câu hỏi lý thuyết

1. Node.js là gì? Tại sao cần dùng Node.js thay vì chỉ dùng JavaScript trong trình duyệt?
2. npm là gì? npm dùng để làm gì trong dự án?
3. Sự khác nhau giữa `package.json` và `package-lock.json` là gì?
4. Khi chạy `npm install lodash`, điều gì xảy ra?
5. Làm sao để sử dụng một thư viện đã cài đặt bằng npm trong mã JavaScript?

---

# 🧪 Bài tập thực hành

## Bài 1: Hello từ Node.js
Tạo file `hello.js` và in ra dòng chữ “Xin chào học sinh Node.js!” bằng `console.log`.

---

## Bài 2: Tạo dự án npm
1. Khởi tạo một project Node.js mới bằng lệnh `npm init -y`.
2. Kiểm tra file `package.json` được tạo ra.

---

## Bài 3: Cài và dùng thư viện `chalk`
1. Dùng `npm install chalk`.
2. Tạo file `color.js` và in ra dòng chữ `"Thành công!"` với màu xanh lá bằng chalk.

```js
import chalk from 'chalk'
console.log(chalk.green('Thành công!'))
```

> Gợi ý: Nếu dùng Type: module trong `package.json`, dùng `import`. Ngược lại dùng `require`.

---

## Bài 4: Dùng thư viện `lodash`
1. Cài thư viện `lodash`.
2. Tạo file `array.js` và in ra mảng đã được đảo ngược bằng `_.reverse`.

```js
const _ = require('lodash')
const arr = [1, 2, 3]
console.log(_.reverse(arr.slice()))
```

---

## Bài 5: Tạo thư mục cấu trúc chuẩn
1. Tạo thư mục dự án `my-node-app`
2. Bên trong, tạo cấu trúc như sau:

```
my-node-app/
├── src/
│   └── index.js
├── package.json
```

3. Trong `index.js`, in ra ngày giờ hiện tại bằng `console.log(new Date())`

---

✅ Học sinh hoàn thành 5 bài tập này sẽ nắm được cách:
- Chạy file Node
- Dùng `npm init`, cài & sử dụng thư viện
- Viết cấu trúc dự án rõ ràng
