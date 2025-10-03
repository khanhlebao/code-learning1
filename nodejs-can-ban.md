# 🧠 Bài học: Giới thiệu về Node.js, npm và quản lý thư viện

---

## 📌 1. Node.js là gì?

- **Node.js** là môi trường chạy JavaScript ở bên ngoài trình duyệt.
- Thông thường, JavaScript chỉ chạy trong trình duyệt (Chrome, Firefox...), nhưng Node.js cho phép chạy trên máy tính như một ứng dụng bình thường.

> ✅ **Ví dụ thực tế:** Bạn có thể dùng Node.js để viết **web server**, **ứng dụng đọc file**, **tạo API**, v.v.

---

### 🛠 Ví dụ Hello World bằng Node.js

```js
// Tạo file hello.js
console.log("Xin chào từ Node.js!");
```

Chạy bằng terminal:

```bash
node hello.js
```

---

## 📦 2. npm là gì?

- **npm (Node Package Manager)** là công cụ giúp:
  - Cài đặt thư viện (package) từ cộng đồng
  - Quản lý các thư viện bạn đang dùng trong dự án
  - Chạy các lệnh tự động (scripts)

> 💡 npm đi kèm khi bạn cài Node.js.

---

## 📁 3. Quản lý thư viện bằng npm

### a. Khởi tạo dự án Node.js

```bash
npm init -y
```

- Lệnh này sẽ tạo file `package.json` để quản lý thông tin dự án.

---

### b. Cài thư viện từ npm

Ví dụ: Cài thư viện `lodash` – dùng để xử lý mảng, object, chuỗi...

```bash
npm install lodash
```

Sau khi cài, `package.json` và `node_modules/` sẽ được tạo.

---

### c. Dùng thư viện trong mã nguồn

```js
const _ = require('lodash');

const arr = [1, 2, 3, 4];
const reversed = _.reverse(arr.slice()); // copy mảng trước khi reverse
console.log(reversed); // [4, 3, 2, 1]
```

---

### d. Gỡ thư viện

```bash
npm uninstall lodash
```

---

## 📌 4. Một số file quan trọng

| File/Tên         | Giải thích |
|------------------|------------|
| `package.json`   | Quản lý thông tin dự án và thư viện |
| `node_modules/`  | Nơi chứa các thư viện đã cài |
| `package-lock.json` | Ghi lại chính xác phiên bản của các thư viện |

---

## 🔄 Phân biệt `require` và `import`

### 1. `require` là gì?

- Là cách nạp module có sẵn trong Node.js từ trước (CommonJS).
- Cách dùng:
```js
const fs = require('fs')
const _ = require('lodash')
```

- Được dùng mặc định trong hầu hết các file `.js` của Node.js (trừ khi bạn dùng ESM).

---

### 2. `import` là gì?

- Là cú pháp của **ES Modules (ESM)** — cú pháp hiện đại hơn, giống như trong trình duyệt.
- Cách dùng:
```js
import fs from 'fs'
import _ from 'lodash'
```

- Chỉ dùng được nếu bạn thêm `"type": "module"` trong `package.json`, hoặc dùng file `.mjs`.

---

### 3. Khi nào dùng cái nào?

| Tình huống                         | Nên dùng          |
|-----------------------------------|-------------------|
| Dự án Node.js cũ                  | `require`         |
| Viết dự án hiện đại, đồng bộ ESM  | `import`          |
| Dùng thư viện hỗ trợ ESM-only     | `import`          |

---

### ✅ Ví dụ minh họa:

**Dùng require (mặc định Node.js):**
```js
const chalk = require('chalk')
console.log(chalk.blue('Xin chào'))
```

**Dùng import (phải thêm `"type": "module"`):**
```js
import chalk from 'chalk'
console.log(chalk.blue('Xin chào'))
```

---

## ❓ Câu hỏi ôn tập

1. Node.js giúp gì cho lập trình viên JavaScript?
2. npm là gì và vì sao cần dùng?
3. Khi nào bạn cần file `package.json`?
4. Làm sao để dùng thư viện `lodash` trong mã JS?
5. Nếu muốn gỡ thư viện, bạn dùng lệnh nào?

---

## ✅ Tổng kết

- Node.js là môi trường giúp chạy JavaScript ngoài trình duyệt.
- npm là công cụ không thể thiếu để cài và quản lý thư viện.
- Việc quản lý thư viện giúp dự án trở nên rõ ràng, dễ tái sử dụng, và chuyên nghiệp.

---

## 🎁 Gợi ý thực hành

- Tạo một project mới → `npm init`
- Cài thư viện `chalk` để tô màu console
- Tạo file `main.js` và in ra dòng chữ nhiều màu với chalk---
