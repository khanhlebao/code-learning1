# 🧑‍🏫 Buổi 1: Giới Thiệu Về JavaScript

## 🎯 Mục tiêu buổi học
- Hiểu JavaScript là gì, xuất xứ và vai trò của nó trên Web.
- Biết cách nhúng và chạy JavaScript trong trang HTML.
- Làm quen với các câu lệnh cơ bản: `alert()`, `console.log()`.
- Biết cách dùng DevTools trên trình duyệt để chạy lệnh.

---

## 📚 1. JavaScript là gì?

### 🧾 Khái niệm
JavaScript (viết tắt là JS) là một **ngôn ngữ lập trình** được sử dụng rộng rãi để tạo ra các **tính năng động** cho các trang web. Nó được chạy trực tiếp trên trình duyệt (như Chrome, Firefox, Edge...).

> 🎂 JavaScript được tạo ra năm 1995 bởi Brendan Eich và ban đầu có tên là LiveScript.

### 📌 JavaScript dùng để làm gì?
| Chức năng | Ví dụ |
|----------|-------|
| Tạo tương tác | Khi nhấn nút thì hiện ra thông báo |
| Thay đổi nội dung HTML | Tự động thay đổi nội dung mà không cần tải lại trang |
| Kiểm tra dữ liệu đầu vào | Ví dụ: kiểm tra người dùng đã nhập email hay chưa |
| Tạo hiệu ứng động | Ví dụ: trượt ảnh, animation... |
| Tạo game, ứng dụng web | Cùng với HTML & CSS |

---

## 💡 2. JavaScript hoạt động ở đâu?

- **Trình duyệt web:** là nơi phổ biến nhất để chạy JS (client-side).
- **Máy chủ (server):** như Node.js – sẽ học ở các buổi sau.

---

## 🧪 3. Cách chạy JavaScript

### 3.1 Nhúng trong file HTML với thẻ `<script>`
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Xin chào</h1>
    <script>
      alert("Chào bạn!");
    </script>
  </body>
</html>
```
> ✅ `alert()` sẽ hiển thị hộp thoại bật lên.

---

### 3.2 Chạy trực tiếp bằng bảng Console
1. Mở trình duyệt Chrome
2. Bấm `F12` để mở DevTools
3. Chọn tab **Console**
4. Gõ thử lệnh:
```js
console.log("Xin chào JavaScript!");
```

> ✅ `console.log()` in ra dòng chữ vào bảng Console, thường dùng để kiểm tra chương trình khi lập trình.

---

## 🧠 4. Minh họa hoạt động của JS

```
[Người dùng] → [HTML/CSS] → [Trang tĩnh không thay đổi]
[Người dùng] → [HTML + CSS + JS] → [Trang động, có thể phản hồi lại]
```

---

## 📝 5. Bài tập thực hành

### Bài 1: Viết câu chào tên em bằng `alert()`
```js
alert("Chào bạn học sinh lớp 9A!");
```

### Bài 2: In thông tin cá nhân vào bảng console
```js
console.log("Họ tên: Nguyễn Văn A");
console.log("Tuổi: 15");
console.log("Trường: THCS ABC");
```

### Bài 3: Viết chương trình hiện thông báo 2 lần
```js
alert("Xin chào!");
alert("Chúc bạn học tốt JavaScript!");
```

---

## ❓ 6. Câu hỏi ôn tập
1. JavaScript khác HTML và CSS chỗ nào?
2. Cách chạy JavaScript trên trình duyệt là gì?
3. Hàm `alert()` khác gì so với `console.log()`?

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| JavaScript là gì? | Ngôn ngữ lập trình chạy trong trình duyệt |
| Dùng để làm gì? | Tạo trang web động và tương tác |
| Cách chạy | Qua thẻ `<script>` hoặc Console |
| Hàm cơ bản | `alert()` và `console.log()` |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể dùng công cụ như JSFiddle, CodePen, repl.it để học sinh thử chạy lệnh.
- Cho học sinh thử thay đổi nội dung HTML bằng JS ở các buổi sau.