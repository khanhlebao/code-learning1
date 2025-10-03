
# 📘 ReactJS – Buổi 10: Điều Hướng với React Router DOM

> Tài liệu này trình bày về cách xây dựng ứng dụng đa trang trong React bằng thư viện `react-router-dom`. Giúp quản lý điều hướng (routing) giữa các component tương ứng với URL mà không cần reload trang.

---

## 🎯 Mục tiêu

- Hiểu khái niệm routing trong SPA.
- Cài đặt và cấu hình `react-router-dom`.
- Tạo và xử lý nhiều tuyến đường (route).
- Sử dụng `<Link>`, `<NavLink>` để điều hướng giữa các trang.
- Hiểu nested route và outlet.

---

## I. Routing trong SPA là gì?

Trong ứng dụng Single Page Application, routing không còn điều hướng sang trang HTML khác mà thực hiện **hiển thị component khác** theo URL → không reload toàn bộ trang.

---

## II. Cài đặt React Router

```bash
npm install react-router-dom
```

---

## III. Cấu trúc Router cơ bản

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- `BrowserRouter`: Bao quanh toàn bộ ứng dụng.
- `Routes`: Nơi khai báo danh sách đường dẫn.
- `Route`: Gắn URL với component tương ứng.

---

## IV. Điều hướng bằng `<Link>`

```jsx
import { Link } from "react-router-dom";

<Link to="/">Trang chủ</Link>
<Link to="/about">Giới thiệu</Link>
```

> Tránh dùng thẻ `<a href>` vì sẽ reload lại trang.

---

## V. NavLink – Tự động thêm class cho trang đang active

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
  Giới thiệu
</NavLink>
```

> Rất hữu ích cho thanh menu điều hướng.

---

## VI. Route lồng nhau (Nested Routes)

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

- Dùng `<Outlet />` trong component cha để hiển thị route con.

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h2>Trang Dashboard</h2>
      <Outlet />
    </>
  );
}
```

---

## VII. Trang không tồn tại – Route `*`

```jsx
<Route path="*" element={<h2>404 – Không tìm thấy trang</h2>} />
```

---

## VIII. Tổng kết kiến thức

| Chủ đề                   | Ý nghĩa chính                                                        |
|--------------------------|----------------------------------------------------------------------|
| Routing trong SPA        | Hiển thị component theo URL mà không reload                          |
| `BrowserRouter`          | Thành phần gốc bao quanh hệ thống router                            |
| `Routes` và `Route`      | Định nghĩa đường dẫn và component tương ứng                          |
| `<Link>` và `<NavLink>`  | Điều hướng giữa các route, không reload                             |
| Nested Route + Outlet    | Hiển thị các route con trong layout cha                             |
| Route `*`                | Dùng để xử lý các đường dẫn không tồn tại (404)                      |

---

## 📋 Câu hỏi ôn tập

1. SPA điều hướng khác gì với web truyền thống?
2. Vai trò của `BrowserRouter`, `Routes`, `Route`?
3. Vì sao không nên dùng `<a href>` trong React Router?
4. `<NavLink>` khác gì `<Link>`?
5. Viết cấu trúc router có 1 route cha `/admin` và 2 route con `/admin/users`, `/admin/settings`.

---

## 🧪 Bài tập thực hành

### Bài 1: Tạo hai trang

- Trang chủ (`/`) → nội dung “Chào mừng”.
- Trang giới thiệu (`/about`) → nội dung mô tả cá nhân.
- Điều hướng bằng `<Link>`.

### Bài 2: Navbar với NavLink

- Tạo thanh điều hướng gồm: Trang chủ, Giới thiệu, Liên hệ.
- Dùng `NavLink` để gắn class active.

### Bài 3: Dashboard và nested route

- Tạo route `/dashboard` với 2 route con:
  - `/dashboard/profile`
  - `/dashboard/settings`
- Trong component `Dashboard`, hiển thị `<Outlet />`.

---

## 📎 Ghi chú chuyên sâu

- `react-router-dom` là thư viện phổ biến nhất cho SPA với React.
- Có thể dùng lazy loading kết hợp `React.lazy` để tối ưu route lớn.
- Thư viện còn hỗ trợ `navigate`, `useParams`, `redirect`, `loader` (nâng cao).
