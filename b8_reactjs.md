
# 📘 ReactJS – Buổi 8: useEffect – Side Effects và Vòng Đời Component

> Tài liệu trình bày chuyên sâu về hook `useEffect` trong React – công cụ chính để xử lý các **side effects** như gọi API, thao tác với DOM, set timeout, và đồng bộ dữ liệu theo vòng đời component.

---

## 🎯 Mục tiêu

- Hiểu khái niệm side effect và khi nào cần dùng `useEffect`.
- Biết cách sử dụng `useEffect` để thực hiện các hành động sau render.
- Nắm rõ dependency array và cơ chế re-run effect.
- Làm quen với hàm cleanup – dọn dẹp trong lifecycle component.

---

## I. Side Effect là gì?

Side effect là **bất kỳ hành vi nào ảnh hưởng ngoài phạm vi của component render**, ví dụ:

- Gọi API
- Lưu vào `localStorage`
- Đăng ký sự kiện `window`
- Đặt `setTimeout`, `setInterval`
- Thao tác DOM trực tiếp

React không cho phép gọi các side effect trực tiếp trong phần render → cần dùng `useEffect`.

---

## II. Cú pháp `useEffect`

```jsx
import { useEffect } from "react";

useEffect(() => {
  // Side effect logic ở đây
}, [dependencies]);
```

---

## III. Các trường hợp phổ biến

### 1. Chạy một lần sau khi render lần đầu (componentDidMount)

```jsx
useEffect(() => {
  console.log("Chạy một lần khi mount");
}, []);
```

> `[]` → effect chỉ chạy một lần sau khi component mount.

---

### 2. Chạy mỗi khi giá trị thay đổi (componentDidUpdate)

```jsx
useEffect(() => {
  console.log("Giá trị count đã thay đổi:", count);
}, [count]);
```

> Effect sẽ chạy lại mỗi khi `count` thay đổi.

---

### 3. Không có dependency → luôn chạy sau mỗi render

```jsx
useEffect(() => {
  console.log("Chạy mỗi lần render");
});
```

---

## IV. Cleanup function – dọn dẹp effect

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Đang chạy...");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Đã dọn dẹp!");
  };
}, []);
```

> Hàm `return` bên trong `useEffect` sẽ được gọi khi component bị unmount hoặc trước khi effect chạy lại.

---

## V. Gọi API bằng useEffect

```jsx
useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

> Gọi API khi component được mount → dữ liệu lưu vào state để hiển thị.

---

## VI. Tổng kết kiến thức

| Khái niệm                  | Ý nghĩa chính                                                             |
|----------------------------|---------------------------------------------------------------------------|
| Side Effect                | Hành động không phải tính toán UI thuần, như gọi API, setTimeout...      |
| useEffect                  | Hook xử lý side effects trong function component                         |
| Dependency array           | Quyết định khi nào effect chạy lại                                       |
| Cleanup function           | Hàm dọn dẹp tài nguyên khi component unmount hoặc rerun effect           |
| Vòng đời component         | useEffect tương ứng với các giai đoạn: mount, update, unmount            |

---

## 📋 Câu hỏi ôn tập

1. Side effect là gì? Cho ví dụ cụ thể.
2. useEffect chạy vào những thời điểm nào?
3. Nếu dependency array là rỗng, effect chạy mấy lần?
4. Khi nào cần dùng cleanup function trong useEffect?
5. Viết ví dụ gọi API trong useEffect và lưu dữ liệu vào state.

---

## 🧪 Bài tập thực hành

### Bài 1: Thời gian thực

- Tạo component hiển thị đồng hồ.
- Dùng `setInterval` để cập nhật thời gian mỗi giây.
- Dọn dẹp `interval` khi component unmount.

### Bài 2: Đếm sự kiện cuộn trang

- Lắng nghe sự kiện `scroll` → in ra vị trí Y.
- Cleanup event listener khi unmount.

### Bài 3: Gọi API và render dữ liệu

- Gọi API từ `https://jsonplaceholder.typicode.com/users`.
- Hiển thị danh sách tên người dùng.

---

## 📎 Ghi chú chuyên sâu

- Không nên đặt `async` trực tiếp trong `useEffect` → nên tạo hàm phụ async bên trong.
- Nếu thiếu dependency → có thể gây bug logic hoặc dùng dữ liệu cũ.
- Dùng ESLint plugin để phát hiện lỗi dependency trong useEffect (`react-hooks/exhaustive-deps`).
