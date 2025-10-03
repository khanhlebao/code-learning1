
# 🎨 Giới thiệu về Code Style và Template Dự Án Node.js

---

## 📐 I. Code Style là gì?

**Code Style** (quy tắc định dạng mã) giúp:
- Viết code nhất quán (consistent)
- Dễ đọc, dễ bảo trì
- Giúp nhóm làm việc trơn tru
- Dễ tích hợp kiểm tra tự động (CI)

---

## 🧱 II. Những yếu tố thường có trong Code Style

| Thành phần                    | Ví dụ / Quy định phổ biến                        |
|------------------------------|--------------------------------------------------|
| Indent (thụt lề)             | 2 spaces (JS/TS), 4 spaces (Python)             |
| Dấu chấm phẩy `;`            | Có hoặc không — tuỳ quy định nhóm               |
| Nháy đơn hay nháy kép        | `'string'` hoặc `"string"`                      |
| Dấu cách (`space`)           | `if (x === 5) {}` thay vì `if(x===5){}`         |
| Dấu phẩy cuối (trailing comma) | Có hay không trong array/object                |
| Đặt tên biến (naming)        | camelCase cho biến thường, PascalCase cho class|
| Comment (chú thích)          | Sử dụng rõ ràng, không lan man                  |
| Sắp xếp import/module        | import từ core > external > internal            |

---

## 🔧 III. Một số công cụ hỗ trợ Code Style

### ✅ 1. Prettier

- Tự động format code theo chuẩn
- Hỗ trợ JS, TS, HTML, CSS, JSON...

📦 Cài đặt:

```bash
npm install --save-dev prettier
```

🔧 Tạo file `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

📌 Dùng trong CLI:

```bash
npx prettier --write .
```

---

### ✅ 2. ESLint

- Dùng để **kiểm tra code**, phát hiện lỗi logic hoặc style
- Có thể kết hợp với Prettier

📦 Cài đặt:

```bash
npm install --save-dev eslint
```

Khởi tạo cấu hình:

```bash
npx eslint --init
```

📌 Ví dụ rule trong `.eslintrc`:

```json
{
  "rules": {
    "semi": ["error", "never"],
    "quotes": ["error", "single"]
  }
}
```

---

## 🏗 IV. Template dự án Node.js phổ biến

| Template / Boilerplate      | Mô tả                                                  |
|-----------------------------|---------------------------------------------------------|
| **Node.js + Express**       | Dự án backend REST API đơn giản                        |
| **Node.js + TypeScript**    | Có cấu trúc rõ ràng, hỗ trợ kiểm tra kiểu               |
| **NestJS**                  | Framework cao cấp hơn, dùng decorator, module, OOP      |
| **CLI tool template**       | Tạo công cụ dòng lệnh bằng Node                        |
| **Monorepo (nx, turborepo)**| Dùng cho dự án lớn nhiều thư viện con                 |

---

## 📁 V. Cấu trúc thư mục phổ biến trong Node.js

```bash
my-app/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── index.js
├── tests/
├── .prettierrc
├── .eslintrc
├── package.json
└── README.md
```

---

## ✅ Kết luận

- **Style code** giúp dự án rõ ràng, dễ đọc, teamwork hiệu quả.
- Hãy dùng **Prettier** để định dạng và **ESLint** để kiểm tra lỗi logic/style.
- Dự án nên theo một **template rõ ràng** để mở rộng lâu dài.

---

