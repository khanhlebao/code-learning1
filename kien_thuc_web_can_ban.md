
# 🌐 TÀI LIỆU KIẾN THỨC CƠ BẢN VỀ WEB

## I. Web hoạt động như thế nào?

### 1. Mô hình Client – Server

| Thành phần | Mô tả |
|------------|------|
| **Client** | Thiết bị người dùng (máy tính, điện thoại), thường là trình duyệt web (Chrome, Firefox, Safari...). Gửi yêu cầu đến server. |
| **Server** | Máy chủ lưu trữ và cung cấp tài nguyên (HTML, CSS, JS, ảnh...). Phản hồi lại các yêu cầu từ client. |

---

### 2. Giao tiếp bằng HTTP/HTTPS

HTTP (HyperText Transfer Protocol) là **giao thức truyền tải siêu văn bản**, là cách mà **client và server nói chuyện với nhau**.

- HTTP thường sử dụng cổng `80`
- HTTPS (HTTP Secure) sử dụng cổng `443`, có mã hóa (SSL/TLS) => **an toàn hơn**

#### Các loại HTTP Request:

| Loại | Mục đích |
|------|----------|
| **GET** | Lấy dữ liệu từ server (ví dụ: tải trang web) |
| **POST** | Gửi dữ liệu lên server (ví dụ: gửi form) |
| **PUT/PATCH** | Cập nhật dữ liệu |
| **DELETE** | Xóa dữ liệu |

---

### 3. Quy trình hoạt động cơ bản

1. Người dùng nhập URL vào trình duyệt (ví dụ: `https://chat.openai.com`)
2. Trình duyệt gửi HTTP request đến server.
3. Server xử lý và gửi lại HTML/CSS/JS.
4. Trình duyệt **hiển thị nội dung** bằng cách:
   - Phân tích (parse) HTML => dựng DOM Tree
   - Tải và áp dụng CSS => tính toán layout và style
   - Chạy JavaScript => thêm tương tác, gọi API, v.v.

---

### 4. Trình duyệt làm gì?

| Thành phần | Vai trò |
|------------|---------|
| **HTML Parser** | Phân tích mã HTML để tạo cấu trúc trang (DOM Tree) |
| **CSS Engine** | Phân tích CSS để áp dụng style |
| **JavaScript Engine** | Thực thi JS (V8, SpiderMonkey,...) |
| **Render Engine** | Hiển thị giao diện lên màn hình người dùng |

---

## II. Kiến thức Frontend vs Backend

| Loại | Vai trò |
|------|--------|
| **Frontend (Client-side)** | Giao diện người dùng, dùng HTML, CSS, JS |
| **Backend (Server-side)** | Xử lý dữ liệu, lưu trữ database, API. Dùng PHP, Node.js, Python, v.v. |

---

## III. Cấu trúc file website

### 1. Cấu trúc cơ bản

```
/my-website
├── index.html     # Trang chính (HTML)
├── style.css      # Giao diện (CSS)
└── script.js      # Tương tác (JS)
```

### 2. HTML – Khung nội dung

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Trang web đơn giản</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Xin chào thế giới!</h1>
  <button onclick="sayHi()">Bấm vào tôi</button>

  <script src="script.js"></script>
</body>
</html>
```

### 3. CSS – Giao diện

```css
body {
  background-color: #f0f8ff;
  font-family: Arial;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
```

### 4. JavaScript – Tạo tương tác

```javascript
function sayHi() {
  alert("Chào bạn, đây là JavaScript hoạt động!");
}
```

---

## IV. Các công cụ & khái niệm nâng cao

| Công cụ / Khái niệm | Mô tả |
|---------------------|------|
| **DevTools (F12)** | Công cụ trong trình duyệt để kiểm tra HTML, CSS, JS |
| **DOM (Document Object Model)** | Cây cấu trúc của HTML, có thể chỉnh bằng JS |
| **Fetch / XMLHttpRequest** | Gửi HTTP request bằng JavaScript |
| **API (Application Programming Interface)** | Giao diện kết nối giữa frontend và backend |
| **SPA (Single Page Application)** | Ứng dụng web chỉ có 1 trang, dùng JS để thay đổi nội dung động (React, Vue, Angular) |

---

## V. Tổng kết

| Thành phần | Nhiệm vụ |
|------------|----------|
| **HTML** | Xây dựng khung nội dung |
| **CSS** | Trang trí và bố cục |
| **JavaScript** | Xử lý logic, tạo tương tác |
| **Trình duyệt** | Nhận dữ liệu từ server, hiển thị cho người dùng |
| **Server** | Lưu trữ, xử lý, trả dữ liệu |
