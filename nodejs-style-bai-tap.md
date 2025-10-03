
# ❓ Câu hỏi ôn tập - Code Style và Template Dự Án

## 🧠 Câu hỏi lý thuyết

1. Code Style là gì? Vì sao nó lại quan trọng trong lập trình nhóm?
2. Sự khác biệt giữa Prettier và ESLint là gì?
3. Tại sao nên sử dụng file `.prettierrc` và `.eslintrc`?
4. Trong một dự án Node.js, `src/`, `tests/`, và `node_modules/` nên được tổ chức thế nào?
5. Nếu bạn thấy có quá nhiều lỗi style khi code, bạn sẽ làm gì để sửa nhanh?

---

# 🧪 Bài tập thực hành Code Style

## Bài 1: Cài Prettier và định dạng mã

1. Tạo một thư mục mới `style-demo`.
2. Tạo file `index.js` với nội dung không chuẩn (không có dấu cách, nháy kép...).
3. Cài Prettier và tạo file `.prettierrc`.
4. Dùng `npx prettier --write .` để định dạng lại mã.

---

## Bài 2: Cài ESLint và phát hiện lỗi

1. Trong cùng thư mục, cài `eslint` bằng `npm install --save-dev eslint`.
2. Khởi tạo file cấu hình `.eslintrc` bằng `npx eslint --init`.
3. Tạo file `bad.js` có lỗi ví dụ như `var x = 5` hoặc thiếu `;`.
4. Chạy `npx eslint .` để xem lỗi được phát hiện.

---

## Bài 3: Kết hợp ESLint và Prettier

1. Cài thêm `eslint-config-prettier` để tích hợp cả hai.
2. Cập nhật `.eslintrc` để không xung đột với Prettier.
3. Viết lại file `sample.js` và chạy cả hai công cụ kiểm tra.

---

## Bài 4: Viết lại đoạn code theo style chuẩn

Cho đoạn code sau (cố tình sai chuẩn):

```js
function test ( ){
console.log( "Chao the gioi")
}
```

Học sinh hãy sửa lại để:

- Dùng nháy đơn
- Không có khoảng trắng dư
- Có dấu `;` nếu cần
- Đặt tên hàm là `sayHello`

---

## Bài 5: Tạo cấu trúc dự án Node chuẩn

1. Tạo thư mục `my-project`
2. Tạo các thư mục con: `src/`, `tests/`, `scripts/`
3. Tạo file `.eslintrc`, `.prettierrc`, và mô phỏng một file mã nguồn trong `src/`

---

✅ Hoàn thành các bài tập này giúp học sinh:
- Làm quen với Prettier, ESLint
- Hiểu và sửa lỗi code style
- Thiết lập template dự án bài bản
